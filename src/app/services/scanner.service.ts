import { Injectable } from '@angular/core';
import { Platform, ToastController } from '@ionic/angular';

import { BehaviorSubject } from 'rxjs';
import { Barcode, Camera } from '../types/scandit';

declare var Scandit: any;

@Injectable({ providedIn: 'root' })
export class ScannerService {

  // ! ADD YOUR OWN SCANDIT KEYS HERE
  // ! THE TOP IS FOR IOS, THE BOTTOM FOR ANDROID
  private readonly SDK = this.platform.is('ios')
    ? 'IOS KEY HERE'
    : 'ANDROID KEY HERE';

  public onScanEvent: BehaviorSubject<Barcode> = new BehaviorSubject(undefined);

  private dataCaptureContext: any;
  private settings: any;
  private barcodeCapture: any;

  private cameraSettings: any;
  private cameraFront: Camera;
  private cameraBack: Camera;

  public usingCamera: 'front' | 'back';
  public torchActive = false;

  private viewObj: any;

  constructor(
    private toasts: ToastController,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      if (typeof Scandit !== 'undefined') {
        this.configureScandit();
      }
    });
  }

  private configureScandit() {
    // Create context
    this.dataCaptureContext = Scandit.DataCaptureContext.forLicenseKey(this.SDK);

    // Configure settings
    this.settings = new Scandit.BarcodeCaptureSettings();

    this.settings.enableSymbologies([
      Scandit.Symbology.Code128,
      Scandit.Symbology.Code39,
      Scandit.Symbology.EAN8,
      Scandit.Symbology.EAN13UPCA,
      Scandit.Symbology.UPCE,
      Scandit.Symbology.PDF417
    ]);
    this.settings.codeDuplicateFilter = 1500; // ms debounce between duplicate scans.

    // Create capture
    this.barcodeCapture = Scandit.BarcodeCapture.forContext(this.dataCaptureContext, this.settings);

    // Camera settings
    this.cameraSettings = Scandit.BarcodeCapture.recommendedCameraSettings;
    this.cameraFront = Scandit.Camera.atPosition(Scandit.CameraPosition.UserFacing);
    this.cameraBack = Scandit.Camera.atPosition(Scandit.CameraPosition.WorldFacing);

    if (this.cameraBack) {
      this.cameraBack.applySettings(this.cameraSettings);
      this.dataCaptureContext.setFrameSource(this.cameraBack);
      this.usingCamera = 'back';
      console.log('Back has torch ?', this.cameraBack.getIsTorchAvailable());
    } else if (this.cameraFront) {
      this.cameraFront.applySettings(this.cameraSettings);
      this.dataCaptureContext.setFrameSource(this.cameraFront);
      this.usingCamera = 'front';
      console.log('Front has torch ?', this.cameraBack.getIsTorchAvailable());
    }

    // Hook listener
    const listener = {
      didScan: (b: any, session: any) => {
        if (session.newlyRecognizedBarcodes.length > 0) {

          const barcodeObj = session.newlyRecognizedBarcodes[0];

          const barcode = this.generateBarcodeFromScanResult(barcodeObj);

          this.onScanEvent.next(barcode);
          this.onScanEvent.next(undefined);

        } else {
          console.warn('no results');
        }
      }
    };
    this.barcodeCapture.addListener(listener);

    // Create view
    this.viewObj = Scandit.DataCaptureView.forContext(this.dataCaptureContext);
  }

  public setCameraView(htmlElement: any) {
    console.log('startScanning', htmlElement);
    if (htmlElement) {
      this.viewObj.connectToElement(htmlElement);
    }
  }

  public startScanning() {
    console.log('startScanning');
    // Turn camera being used on
    this.usingCamera === 'front'
      ? this.cameraFront.switchToDesiredState(Scandit.FrameSourceState.On)
      : this.cameraBack.switchToDesiredState(Scandit.FrameSourceState.On);

    this.barcodeCapture.isEnabled = true;

    console.log('Using', this.usingCamera, 'camera');
  }

  public stopScanning(shutdown = false) {
    console.log('stopScanning');
    // Turn camera off
    this.usingCamera === 'front'
      ? this.cameraFront.switchToDesiredState(Scandit.FrameSourceState.Off)
      : this.cameraBack.switchToDesiredState(Scandit.FrameSourceState.Off);

    // Stop completely
    if (shutdown) {
      this.barcodeCapture.isEnabled = false;
    }
  }


  private unicodeToHex(str: string) {
    let hex = '';
    for (let i = 0; i < str.length; i++) {
      hex += '' + str.charCodeAt(i).toString(16);
    }
    return hex;
  }

  private bytesToHex(bytes: number[]) {
    let hex = '';
    bytes.forEach((b) => {
      const piece = b.toString(16);
      hex += (piece.length >= 2 ? '' : '0') + piece;
    });
    return hex;
  }

  public toggleFlashlight() {
    this.torchActive = !this.torchActive;
    if (this.platform.is('capacitor')) {
      if (this.torchActive) {
        this.cameraBack.desiredTorchState = Scandit.TorchState.On;
        this.cameraFront.desiredTorchState = Scandit.TorchState.On;
      } else {
        this.cameraBack.desiredTorchState = Scandit.TorchState.Off;
        this.cameraFront.desiredTorchState = Scandit.TorchState.Off;
      }
    }
  }

  public switchCamera() {
    if (!this.platform.is('capacitor')) {
      return;
    }
    if (this.usingCamera === 'front') {
      // Currently using front camera, try to switch to back
      if (this.cameraBack) {
        this.cameraFront.switchToDesiredState(Scandit.FrameSourceState.Off);
        this.dataCaptureContext.setFrameSource(this.cameraBack);
        this.cameraBack.switchToDesiredState(Scandit.FrameSourceState.On);
        this.usingCamera = 'back';
      } else {
        this.showToast('No back camera found!');
      }

    } else {
      // Currently using back camera, try to switch to front
      if (this.cameraFront) {
        this.cameraBack.switchToDesiredState(Scandit.FrameSourceState.Off);
        this.dataCaptureContext.setFrameSource(this.cameraFront);
        this.cameraFront.switchToDesiredState(Scandit.FrameSourceState.On);
        this.usingCamera = 'front';
      } else {
        this.showToast('No back camera found!');
      }
    }

  }

  public generateBarcodeFromScanResult(barcodeObj: any): Barcode {
    const barcodeType = barcodeObj.symbology;
    const byteData = Array.from(barcodeObj.data, (y: any) => y.charCodeAt(0));

    const barcode: Barcode = {
      type: barcodeType,
      data: barcodeObj.data,
      rawData: barcodeObj.rawData,
      bytes: byteData,
      hex: this.unicodeToHex(barcodeObj.data),
      rawHex: this.unicodeToHex(barcodeObj.rawData),
      bytesHex: this.bytesToHex(byteData)
    };
    return barcode;
  }

  private showToast(message: string) {
    this.toasts.create({ message, duration: 4000 }).then((t) => t.present());
  }

}
