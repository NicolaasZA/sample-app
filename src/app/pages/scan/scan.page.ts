import { Component } from '@angular/core';

import { NavController, Platform } from '@ionic/angular';

import { CoreService } from 'src/app/services/core.service';
import { ScannerService } from 'src/app/services/scanner.service';

// const { BarcodeScanner } = Plugins;

@Component({
  selector: 'app-scan',
  templateUrl: './scan.page.html',
  styleUrls: ['./scan.page.scss'],
})
export class ScanPage {

  constructor(
    private core: CoreService,
    private nav: NavController,
    private platform: Platform,
    public scanner: ScannerService,
  ) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    if (this.platform.is('capacitor')) {
      this.scanner.startScanning();
      this.scanner.setCameraView(document.getElementById('cameraView'));

      const sub = this.scanner.onScanEvent.subscribe(
        (barcode) => {
          if (barcode) {
            sub.unsubscribe();

            // Stop scanning
            this.scanner.stopScanning();

            this.core.lastScan = barcode;
            this.nav.navigateRoot('/home');
          }
        }
      );
    }
  }

  onBarcodeScan() {

  }

  ionViewWillLeave() {
    if (this.platform.is('capacitor')) {
      this.scanner.stopScanning();
    }
  }

  cancelScan() {
    this.nav.navigateBack('home');
  }

}
