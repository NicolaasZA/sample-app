(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "74mu":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-ff3fc52f.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
const hostContext = (selector, el) => {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */
const createColorClasses = (color, cssClassMap) => {
  return (typeof color === 'string' && color.length > 0) ? Object.assign({ 'ion-color': true, [`ion-color-${color}`]: true }, cssClassMap) : cssClassMap;
};
const getClassList = (classes) => {
  if (classes !== undefined) {
    const array = Array.isArray(classes) ? classes : classes.split(' ');
    return array
      .filter(c => c != null)
      .map(c => c.trim())
      .filter(c => c !== '');
  }
  return [];
};
const getClassMap = (classes) => {
  const map = {};
  getClassList(classes).forEach(c => map[c] = true);
  return map;
};
const SCHEME = /^[a-z][a-z0-9+\-.]*:/;
const openURL = async (url, ev, direction, animation) => {
  if (url != null && url[0] !== '#' && !SCHEME.test(url)) {
    const router = document.querySelector('ion-router');
    if (router) {
      if (ev != null) {
        ev.preventDefault();
      }
      return router.push(url, direction, animation);
    }
  }
  return false;
};




/***/ }),

/***/ "JbSX":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/button-active-4927a4c1.js ***!
  \*********************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createButtonActiveGesture; });
/* harmony import */ var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a8b7a1c.js */ "wEJo");
/* harmony import */ var _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./haptic-27b3f981.js */ "qULd");
/* harmony import */ var _index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-f49d994d.js */ "iWo5");




const createButtonActiveGesture = (el, isButton) => {
  let currentTouchedButton;
  let initialTouchedButton;
  const activateButtonAtPoint = (x, y, hapticFeedbackFn) => {
    if (typeof document === 'undefined') {
      return;
    }
    const target = document.elementFromPoint(x, y);
    if (!target || !isButton(target)) {
      clearActiveButton();
      return;
    }
    if (target !== currentTouchedButton) {
      clearActiveButton();
      setActiveButton(target, hapticFeedbackFn);
    }
  };
  const setActiveButton = (button, hapticFeedbackFn) => {
    currentTouchedButton = button;
    if (!initialTouchedButton) {
      initialTouchedButton = currentTouchedButton;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.add('ion-activated'));
    hapticFeedbackFn();
  };
  const clearActiveButton = (dispatchClick = false) => {
    if (!currentTouchedButton) {
      return;
    }
    const buttonToModify = currentTouchedButton;
    Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(() => buttonToModify.classList.remove('ion-activated'));
    /**
     * Clicking on one button, but releasing on another button
     * does not dispatch a click event in browsers, so we
     * need to do it manually here. Some browsers will
     * dispatch a click if clicking on one button, dragging over
     * another button, and releasing on the original button. In that
     * case, we need to make sure we do not cause a double click there.
     */
    if (dispatchClick && initialTouchedButton !== currentTouchedButton) {
      currentTouchedButton.click();
    }
    currentTouchedButton = undefined;
  };
  return Object(_index_f49d994d_js__WEBPACK_IMPORTED_MODULE_2__["createGesture"])({
    el,
    gestureName: 'buttonActiveDrag',
    threshold: 0,
    onStart: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["a"]),
    onMove: ev => activateButtonAtPoint(ev.currentX, ev.currentY, _haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["b"]),
    onEnd: () => {
      clearActiveButton(true);
      Object(_haptic_27b3f981_js__WEBPACK_IMPORTED_MODULE_1__["h"])();
      initialTouchedButton = undefined;
    }
  });
};




/***/ }),

/***/ "P64T":
/*!******************************************!*\
  !*** ./src/app/services/core.service.ts ***!
  \******************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");


let CoreService = class CoreService {
    constructor() { }
};
CoreService.ctorParameters = () => [];
CoreService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], CoreService);



/***/ }),

/***/ "R7+x":
/*!*********************************************!*\
  !*** ./src/app/services/scanner.service.ts ***!
  \*********************************************/
/*! exports provided: ScannerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerService", function() { return ScannerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");




let ScannerService = class ScannerService {
    constructor(toasts, platform) {
        this.toasts = toasts;
        this.platform = platform;
        this.SDK = this.platform.is('ios')
            ? 'AfqPddOBRz84MGjA0hBW7tg0GJdPKsvMEUVOupU44yNYLb0woSSlBtx3jxNCNXR2p0hiDSs1ac8sVMfmKUe1ZzV7EMcvd5i0mxies6leYU+eXWTc/Ce5ywNRG4njQdMPY1FVcPQdvR3PBd/+KgjapwBGIFYThzwpDonxjphJo/SsFxOAAMnb5nGXpFu4phKwnYRrYwx5QZzffTI7lE9zp7FENJr00JKpfYNdXCC3C7TD3djcaeV3KG1E6ljMWaD3KehOPr56HCglZ2pp2GU7dr0Qn+IwTlQ9u7IeOFrIL2QeLkAr7mx3EY1PUd1Qs4KCq9JXsmDMcWohGNsoOqrIcUG3B24gIRjiCXlcweWhBk0p84qz4T0FAcyp5TNI8Gytew2rO2gNMhBalYjvtEtzO2xEDNJU0rwo+/YceZEoM7w38xrhEJ1JBFtXmXB+OiD/mtLJH9y4AL4YIzQTErsbHQXxf5gATFQGPfQQ+MpOUFH/4tlUx8SJLHTyUl4LYGJ0lenwwvZzTp8pR64vnee/OZb0pjWZG6Q8zhbK1df2YfbBXxj6zIbqc5paecF4Z10dbpStbdYeu1DfaZszNWywjlZ26ldvkt57D/f9PlwCqaGES53rdaDhNSn37jbTfXg2+KVjMsdQXPYX5GLGVBRStIWcvCfGMn4MUhOBuBDY5bdFua7KT1SWiEq1YKK7kQbxDSN/Tb+qtSgleHfxnWcDBGEc+9boGGrwJOvrxg4RGsr9nEGYsKVJO7Qxhr2g9c0OBCn9DFBIWESTy93DTy0RsIV2VjALGjraUECXlkV8DoUdteXH4oL0SzS0N/P/8hyrYdEXSQ=='
            : 'AS7PfZuBD1AXLsecRRZxMQ8r/yC7JG8TfmXhYlB2drxxYmQ0InrW9z52fYzlGEFKKlF1DzI0BIuTbNxYu3M2t0pNGXJTVeRfADGlgpVozblgIDpq8RQUEuVnzXtYTujpGGi+8SMmGrTeKP6MdzHXtLkm6XOf7eD2LW3bqCwILY8a9w+ysVJdzs9NAmbK260qXsdXLFCMUIdqQbpY5ecHLqmxgO251JF2IKk+AlTuSyggdLoqvG7Ua9Jc1OApb5qUB8gM0lSbKHLsvCh5L3puQ5wfVXi+YY6DaDupfMTUFU0lYwW3Mqyf+ptlhv0ITy++VIwMH0AnBlkaDkOjEOBCUS/kJkordhNPTi9LospK/H8ilwUPtBbULvN6xYdGoyCBQy4wOZgOcjqyeBUKdw/ao/+cy4WVrEEtQYtT2jDYMMDQ7Yz9iM2ApIDSyb7uiPUdZAfBdYsFNIzcAHDEw4SvVoTY2Ro0YY7ADNb7k0SV0ueN62UY+5kqA7F3UNYZc7UNX1QKSx+Dyod5Ajc3os55hciZuFytOuURDXmHCZqnXrJ2R5Nb4RfXkMBR9LO9tz5Vji8+FIFNK9bzcHg66u54oWdbetZACmCHuveCUXlszVK42d+oLtOjtpGEFJNk5WuN+m9V6D9qdmYutaaAP+SU4P2Wlu6DOQmos5qxSMamoQ/78wWACNJeQRVKwPNo1/nGMO8Vg7ETOi7p9R+P5oh3lqsvKzg9GJf+B+yT+0pae87o5FygjkvrnwAVLgbJd6dKYvxnHJY5Ufw0RlBh03obETpWCnlE1YUkvXrKU6lINcrOKhZ9u3f2oTwWOIztMDx5YFNDig==';
        this.onScanEvent = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](undefined);
        this.torchActive = false;
        this.platform.ready().then(() => {
            if (typeof Scandit !== 'undefined') {
                this.configureScandit();
            }
        });
    }
    configureScandit() {
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
        }
        else if (this.cameraFront) {
            this.cameraFront.applySettings(this.cameraSettings);
            this.dataCaptureContext.setFrameSource(this.cameraFront);
            this.usingCamera = 'front';
            console.log('Front has torch ?', this.cameraBack.getIsTorchAvailable());
        }
        // Hook listener
        const listener = {
            didScan: (b, session) => {
                if (session.newlyRecognizedBarcodes.length > 0) {
                    const barcodeObj = session.newlyRecognizedBarcodes[0];
                    const barcode = this.generateBarcodeFromScanResult(barcodeObj);
                    this.onScanEvent.next(barcode);
                    this.onScanEvent.next(undefined);
                }
                else {
                    console.warn('no results');
                }
            }
        };
        this.barcodeCapture.addListener(listener);
        // Create view
        this.viewObj = Scandit.DataCaptureView.forContext(this.dataCaptureContext);
    }
    setCameraView(htmlElement) {
        console.log('startScanning', htmlElement);
        if (htmlElement) {
            this.viewObj.connectToElement(htmlElement);
        }
    }
    startScanning() {
        console.log('startScanning');
        // Turn camera being used on
        this.usingCamera === 'front'
            ? this.cameraFront.switchToDesiredState(Scandit.FrameSourceState.On)
            : this.cameraBack.switchToDesiredState(Scandit.FrameSourceState.On);
        this.barcodeCapture.isEnabled = true;
        console.log('Using', this.usingCamera, 'camera');
    }
    stopScanning(shutdown = false) {
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
    unicodeToHex(str) {
        let hex = '';
        for (let i = 0; i < str.length; i++) {
            hex += '' + str.charCodeAt(i).toString(16);
        }
        return hex;
    }
    bytesToHex(bytes) {
        let hex = '';
        bytes.forEach((b) => {
            const piece = b.toString(16);
            hex += (piece.length >= 2 ? '' : '0') + piece;
        });
        return hex;
    }
    toggleFlashlight() {
        this.torchActive = !this.torchActive;
        if (this.platform.is('capacitor')) {
            if (this.torchActive) {
                this.cameraBack.desiredTorchState = Scandit.TorchState.On;
                this.cameraFront.desiredTorchState = Scandit.TorchState.On;
            }
            else {
                this.cameraBack.desiredTorchState = Scandit.TorchState.Off;
                this.cameraFront.desiredTorchState = Scandit.TorchState.Off;
            }
        }
    }
    switchCamera() {
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
            }
            else {
                this.showToast('No back camera found!');
            }
        }
        else {
            // Currently using back camera, try to switch to front
            if (this.cameraFront) {
                this.cameraBack.switchToDesiredState(Scandit.FrameSourceState.Off);
                this.dataCaptureContext.setFrameSource(this.cameraFront);
                this.cameraFront.switchToDesiredState(Scandit.FrameSourceState.On);
                this.usingCamera = 'front';
            }
            else {
                this.showToast('No back camera found!');
            }
        }
    }
    generateBarcodeFromScanResult(barcodeObj) {
        const barcodeType = barcodeObj.symbology;
        const byteData = Array.from(barcodeObj.data, (y) => y.charCodeAt(0));
        const barcode = {
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
    showToast(message) {
        this.toasts.create({ message, duration: 4000 }).then((t) => t.present());
    }
};
ScannerService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
ScannerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ScannerService);



/***/ }),

/***/ "acej":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-4392cd63.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var _helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers-dd7e4b7b.js */ "1vRN");


const attachComponent = async (delegate, container, component, cssClasses, componentProps) => {
  if (delegate) {
    return delegate.attachViewToDom(container, component, componentProps, cssClasses);
  }
  if (typeof component !== 'string' && !(component instanceof HTMLElement)) {
    throw new Error('framework delegate is missing');
  }
  const el = (typeof component === 'string')
    ? container.ownerDocument && container.ownerDocument.createElement(component)
    : component;
  if (cssClasses) {
    cssClasses.forEach(c => el.classList.add(c));
  }
  if (componentProps) {
    Object.assign(el, componentProps);
  }
  container.appendChild(el);
  await new Promise(resolve => Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_0__["c"])(el, resolve));
  return el;
};
const detachComponent = (delegate, element) => {
  if (element) {
    if (delegate) {
      const container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }
    element.remove();
  }
  return Promise.resolve();
};




/***/ }),

/***/ "h3R7":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/spinner-configs-cd7845af.js ***!
  \***********************************************************************/
/*! exports provided: S */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return SPINNERS; });
const spinners = {
  'bubbles': {
    dur: 1000,
    circles: 9,
    fn: (dur, index, total) => {
      const animationDelay = `${(dur * index / total) - dur}ms`;
      const angle = 2 * Math.PI * index / total;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circles': {
    dur: 1000,
    circles: 8,
    fn: (dur, index, total) => {
      const step = index / total;
      const animationDelay = `${(dur * step) - dur}ms`;
      const angle = 2 * Math.PI * step;
      return {
        r: 5,
        style: {
          'top': `${9 * Math.sin(angle)}px`,
          'left': `${9 * Math.cos(angle)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'circular': {
    dur: 1400,
    elmDuration: true,
    circles: 1,
    fn: () => {
      return {
        r: 20,
        cx: 48,
        cy: 48,
        fill: 'none',
        viewBox: '24 24 48 48',
        transform: 'translate(0,0)',
        style: {}
      };
    }
  },
  'crescent': {
    dur: 750,
    circles: 1,
    fn: () => {
      return {
        r: 26,
        style: {}
      };
    }
  },
  'dots': {
    dur: 750,
    circles: 3,
    fn: (_, index) => {
      const animationDelay = -(110 * index) + 'ms';
      return {
        r: 6,
        style: {
          'left': `${9 - (9 * index)}px`,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 17,
        y2: 29,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  },
  'lines-small': {
    dur: 1000,
    lines: 12,
    fn: (dur, index, total) => {
      const transform = `rotate(${30 * index + (index < 6 ? 180 : -180)}deg)`;
      const animationDelay = `${(dur * index / total) - dur}ms`;
      return {
        y1: 12,
        y2: 20,
        style: {
          'transform': transform,
          'animation-delay': animationDelay,
        }
      };
    }
  }
};
const SPINNERS = spinners;




/***/ }),

/***/ "qULd":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-27b3f981.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, d, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hapticImpact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelectionEnd; });
const HapticEngine = {
  getEngine() {
    const win = window;
    return (win.TapticEngine) || (win.Capacitor && win.Capacitor.isPluginAvailable('Haptics') && win.Capacitor.Plugins.Haptics);
  },
  available() {
    return !!this.getEngine();
  },
  isCordova() {
    return !!window.TapticEngine;
  },
  isCapacitor() {
    const win = window;
    return !!win.Capacitor;
  },
  impact(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.impact({ style });
  },
  notification(options) {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    const style = this.isCapacitor() ? options.style.toUpperCase() : options.style;
    engine.notification({ style });
  },
  selection() {
    this.impact({ style: 'light' });
  },
  selectionStart() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionStart();
    }
    else {
      engine.gestureSelectionStart();
    }
  },
  selectionChanged() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionChanged();
    }
    else {
      engine.gestureSelectionChanged();
    }
  },
  selectionEnd() {
    const engine = this.getEngine();
    if (!engine) {
      return;
    }
    if (this.isCapacitor()) {
      engine.selectionEnd();
    }
    else {
      engine.gestureSelectionEnd();
    }
  }
};
/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
const hapticSelection = () => {
  HapticEngine.selection();
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */
const hapticSelectionStart = () => {
  HapticEngine.selectionStart();
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */
const hapticSelectionChanged = () => {
  HapticEngine.selectionChanged();
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */
const hapticSelectionEnd = () => {
  HapticEngine.selectionEnd();
};
/**
 * Use this to indicate success/failure/warning to the user.
 * options should be of the type `{ style: 'light' }` (or `medium`/`heavy`)
 */
const hapticImpact = (options) => {
  HapticEngine.impact(options);
};




/***/ })

}]);
//# sourceMappingURL=common.js.map