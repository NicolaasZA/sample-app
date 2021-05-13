(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-scan-scan-module"],{

/***/ "Fo4Z":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.module.ts ***!
  \*******************************************/
/*! exports provided: ScanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPageModule", function() { return ScanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _scan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scan.page */ "NpPW");







let ScanPageModule = class ScanPageModule {
};
ScanPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([{ path: '', component: _scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"] }])
        ],
        declarations: [_scan_page__WEBPACK_IMPORTED_MODULE_6__["ScanPage"]]
    })
], ScanPageModule);



/***/ }),

/***/ "NpPW":
/*!*****************************************!*\
  !*** ./src/app/pages/scan/scan.page.ts ***!
  \*****************************************/
/*! exports provided: ScanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScanPage", function() { return ScanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_scan_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./scan.page.html */ "eF8J");
/* harmony import */ var _scan_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scan.page.scss */ "vH3q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/core.service */ "P64T");
/* harmony import */ var src_app_services_scanner_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/scanner.service */ "R7+x");







// const { BarcodeScanner } = Plugins;
let ScanPage = class ScanPage {
    constructor(core, nav, platform, scanner) {
        this.core = core;
        this.nav = nav;
        this.platform = platform;
        this.scanner = scanner;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        if (this.platform.is('capacitor')) {
            this.scanner.startScanning();
            this.scanner.setCameraView(document.getElementById('cameraView'));
            const sub = this.scanner.onScanEvent.subscribe((barcode) => {
                if (barcode) {
                    sub.unsubscribe();
                    // Stop scanning
                    this.scanner.stopScanning();
                    this.core.lastScan = barcode;
                    this.nav.navigateRoot('/home');
                }
            });
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
};
ScanPage.ctorParameters = () => [
    { type: src_app_services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: src_app_services_scanner_service__WEBPACK_IMPORTED_MODULE_6__["ScannerService"] }
];
ScanPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-scan',
        template: _raw_loader_scan_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_scan_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ScanPage);



/***/ }),

/***/ "eF8J":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/scan/scan.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <div class=\"top\">\n    <strong class=\"ion-text-uppercase\">Place barcode in center</strong>\n  </div>\n\n  <div class=\"cameraView\" #cameraView id=\"cameraView\"></div>\n\n  <div class=\"bottom\">\n    <ion-row>\n\n      <ion-col>\n        <ion-button color=\"danger\" size=\"small\" expand=\"full\" (click)=\"cancelScan()\">\n          <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <!-- <ion-col>\n        <ion-button color=\"success\" size=\"small\" expand=\"full\" (click)=\"test()\">\n          TEST\n        </ion-button>\n      </ion-col> -->\n\n      <ion-col>\n        <ion-button color=\"primary\" size=\"small\" expand=\"full\" (click)=\"scanner.switchCamera()\">\n          <ion-icon slot=\"icon-only\" [name]=\"scanner.usingCamera == 'back' ? 'camera-reverse' : 'camera-reverse-outline'\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n      <ion-col>\n        <ion-button [color]=\"scanner.torchActive ? 'medium' : 'light'\" size=\"small\" expand=\"full\" (click)=\"scanner.toggleFlashlight()\">\n          <ion-icon slot=\"icon-only\" color=\"dark\" [name]=\"scanner.torchActive ? 'flash' : 'flash-outline'\"></ion-icon>\n        </ion-button>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n  <div class=\"bottom right\">\n  </div>\n</ion-content>");

/***/ }),

/***/ "vH3q":
/*!*******************************************!*\
  !*** ./src/app/pages/scan/scan.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  overflow: hidden;\n}\n\n.top {\n  position: fixed;\n  top: 60px;\n  width: 100vw;\n  text-align: center;\n  z-index: 1001;\n}\n\n.bottom {\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n  z-index: 1001;\n}\n\n.bottom ion-row,\n.bottom ion-col {\n  padding: 0px;\n  margin: 0px;\n}\n\n.cameraView {\n  background-color: #424242;\n  position: fixed;\n  top: 0px;\n  bottom: 60px;\n  left: 0px;\n  right: 0px;\n}\n\nion-button {\n  margin: 0px;\n  opacity: 0.8;\n  min-height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NjYW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUNFOztFQUVFLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBQUY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSEYiLCJmaWxlIjoic2Nhbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogNjBweDsgLy8gaW5jcmVhc2UgdG8gYWNjb3VudCBmb3Igbm90Y2hlc1xuICB3aWR0aDogMTAwdnc7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMTtcbn1cblxuLmJvdHRvbSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogMTAwMTtcblxuICBpb24tcm93LFxuICBpb24tY29sIHtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbn1cblxuLmNhbWVyYVZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMHB4O1xuICBib3R0b206IDYwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgLy8gaGVpZ2h0OiAxMDAlO1xuICAvLyB3aWR0aDogMTAwJTtcbiAgLy8gei1pbmRleDogNTAwO1xufVxuXG5pb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG9wYWNpdHk6IDAuODtcbiAgbWluLWhlaWdodDogNDBweDtcbiAgLy8gd2lkdGg6IDEwMCU7XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=pages-scan-scan-module.js.map