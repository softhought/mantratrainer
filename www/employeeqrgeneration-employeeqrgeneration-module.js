(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employeeqrgeneration-employeeqrgeneration-module"],{

/***/ "./src/app/employeeqrgeneration/employeeqrgeneration.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/employeeqrgeneration/employeeqrgeneration.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmployeeqrgenerationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeqrgenerationPageModule", function() { return EmployeeqrgenerationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _employeeqrgeneration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./employeeqrgeneration.page */ "./src/app/employeeqrgeneration/employeeqrgeneration.page.ts");
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-qrcode */ "./node_modules/angularx-qrcode/dist/index.js");








var routes = [
    {
        path: '',
        component: _employeeqrgeneration_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeqrgenerationPage"]
    }
];
var EmployeeqrgenerationPageModule = /** @class */ (function () {
    function EmployeeqrgenerationPageModule() {
    }
    EmployeeqrgenerationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                angularx_qrcode__WEBPACK_IMPORTED_MODULE_7__["QRCodeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_employeeqrgeneration_page__WEBPACK_IMPORTED_MODULE_6__["EmployeeqrgenerationPage"]]
        })
    ], EmployeeqrgenerationPageModule);
    return EmployeeqrgenerationPageModule;
}());



/***/ }),

/***/ "./src/app/employeeqrgeneration/employeeqrgeneration.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/employeeqrgeneration/employeeqrgeneration.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding>\n  <div id=\"employeeQRgenerationPage\">\n\n      <h6>Employee Attendance </h6>\n      <form [formGroup]=\"emplMobileForm\" >\n        <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>Verify your mobile</ion-card-subtitle>\n           \n              \n            </ion-card-header>\n          \n            <ion-card-content>\n\n                <ion-item no-lines>\n                    <ion-input type=\"number\" clearInput placeholder=\"\" formControlName=\"emplMobileNo\"></ion-input> \n                </ion-item>\n\n                <ion-grid>\n                  <ion-row *ngIf=\"!isMobileNoVerified\">\n                    <ion-col text-center>\n                        <ion-button *ngIf=\"isSubmitClicked\"><ion-spinner name=\"crescent\"></ion-spinner></ion-button>\n                      <ion-button (click)=\"verifyMbl()\" *ngIf=\"!isSubmitClicked\">Verify & Generate <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row *ngIf=\"isMobileNoVerified\">\n                    <ion-col text-center>\n                      <ion-button style=\"--background: rgb(0, 162, 36);\">Verified <ion-icon name=\"checkmark-circle\"></ion-icon> </ion-button>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col text-center>\n                     <p style=\"font-size: 11px;\">Verify your mobile no and generate QR code for attendance.</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                \n\n            </ion-card-content>\n        </ion-card>\n      </form>\n\n     \n\n      <div id=\"qrSection\" >\n\n          <!-- <qrcode [qrdata]=\"'bjhbjhn jhkjh k'\" [size]=\"110\" [level]=\"'M'\" ></qrcode> -->\n          <div *ngIf=\"isMobileNoVerified\">\n            <qrcode [qrdata]=\"employeeQRCode\" [size]=\"180\" [level]=\"'M'\" ></qrcode>\n          </div>\n\n\n          <ion-spinner *ngIf=\"isLoaderEnable\" name=\"dots\"></ion-spinner>\n        <!-- <qrcode *ngIf=\"!isLoaderEnable && employeeQRCode!=null\" [qrdata]=\"employeeQRCode\" colorlight=\"#ed5417\" colordark=\"#FFF\" allowEmptyString=\"false\" [size]=\"110\" [level]=\"'M'\" [usesvg]=\"true\"></qrcode> -->\n      </div>\n      <p id=\"qrscantxt\">Scan QR Code</p>\n     \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/employeeqrgeneration/employeeqrgeneration.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/employeeqrgeneration/employeeqrgeneration.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#employeeQRgenerationPage {\n  background: #ff6309;\n  height: 100%;\n  padding-top: 3rem; }\n  #employeeQRgenerationPage h6 {\n    text-align: center;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    color: #9F3A00;\n    margin-bottom: 5%; }\n  #employeeQRgenerationPage ion-card {\n    background: #FFF;\n    width: 85%;\n    margin: 0 auto; }\n  #employeeQRgenerationPage ion-card ion-card-subtitle {\n      text-align: center;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      font-weight: 600; }\n  #employeeQRgenerationPage ion-card ion-item {\n      width: 86%;\n      margin: 0 auto;\n      --background: transparent;\n      margin-bottom: 6px;\n      --border-width: 0 0 0px 0;\n      border: 1px solid #e7e7e7;\n      border-radius: 50px; }\n  #employeeQRgenerationPage ion-card ion-button {\n      --background:rgb(255, 99, 9); }\n  #employeeQRgenerationPage #qrSection {\n    width: 190px;\n    height: 190px;\n    margin: 10% auto;\n    background: #FFF;\n    border: 2px solid #FFF;\n    position: relative;\n    padding: 2%; }\n  #employeeQRgenerationPage #qrSection qrcode img {\n      border-radius: 8px !important; }\n  #employeeQRgenerationPage #qrSection ion-spinner {\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: auto;\n      top: 43%; }\n  #employeeQRgenerationPage #qrscantxt {\n    text-align: center;\n    margin-top: -35px;\n    font-size: 12px;\n    color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVxcmdlbmVyYXRpb24vRDpcXEFwcERldmVsb3BtZW50XFxNYW50cmFBcHBcXG1hbnRyYXRyYWluZXIvc3JjXFxhcHBcXGVtcGxveWVlcXJnZW5lcmF0aW9uXFxlbXBsb3llZXFyZ2VuZXJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBMkI7RUFDM0IsWUFBVztFQUNYLGlCQUFnQixFQUFBO0VBSHBCO0lBTVEsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLGlCQUFpQixFQUFBO0VBVnpCO0lBY1EsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixjQUFjLEVBQUE7RUFoQnRCO01BbUJZLGtCQUFrQjtNQUNsQix5QkFBeUI7TUFDekIsbUJBQW1CO01BQ25CLGdCQUFnQixFQUFBO0VBdEI1QjtNQTBCWSxVQUFVO01BQ1YsY0FBYztNQUNkLHlCQUFhO01BSVosa0JBQWtCO01BQ2xCLHlCQUFlO01BQ2YseUJBQXlCO01BQ3pCLG1CQUFtQixFQUFBO0VBbkNoQztNQXVDWSw0QkFBYSxFQUFBO0VBdkN6QjtJQTRDUSxZQUFXO0lBQ1gsYUFBWTtJQUNaLGdCQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFxQjtJQUNyQixrQkFBa0I7SUFFbEIsV0FBVyxFQUFBO0VBbkRuQjtNQXVEZ0IsNkJBQTZCLEVBQUE7RUF2RDdDO01BNkRZLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsUUFBUTtNQUNSLFlBQVk7TUFDWixRQUFRLEVBQUE7RUFqRXBCO0lBcUVRLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcXJnZW5lcmF0aW9uL2VtcGxveWVlcXJnZW5lcmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNlbXBsb3llZVFSZ2VuZXJhdGlvblBhZ2Uge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgOTksIDkpO1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICBwYWRkaW5nLXRvcDozcmVtO1xyXG5cclxuICAgIGg2e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOUYzQTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1jYXJke1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuXHJcbiAgICAgICAgaW9uLWNhcmQtc3VidGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgd2lkdGg6IDg2JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAvLyAgYm9yZGVyOiAxcHggc29saWQgI2Y4ZjhmODtcclxuICAgICAgICAgLy8gICBib3JkZXItcmFkaXVzOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgIC8vICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgICAgICAgICAgICAtLWJvcmRlci13aWR0aDogMCAwIDBweCAwO1xyXG4gICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U3ZTdlNztcclxuICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6cmdiKDI1NSwgOTksIDkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjcXJTZWN0aW9ue1xyXG4gICAgICAgIHdpZHRoOjE5MHB4O1xyXG4gICAgICAgIGhlaWdodDoxOTBweDtcclxuICAgICAgICBtYXJnaW46MTAlIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgICAgICBib3JkZXI6MnB4IHNvbGlkICNGRkY7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vYm9yZGVyLXJhZGl1czogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAyJTtcclxuXHJcbiAgICAgICAgcXJjb2Rle1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgaW9uLXNwaW5uZXJ7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgdG9wOiA0MyU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgI3Fyc2NhbnR4dHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTM1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/employeeqrgeneration/employeeqrgeneration.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/employeeqrgeneration/employeeqrgeneration.page.ts ***!
  \*******************************************************************/
/*! exports provided: EmployeeqrgenerationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeqrgenerationPage", function() { return EmployeeqrgenerationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");






var EmployeeqrgenerationPage = /** @class */ (function () {
    function EmployeeqrgenerationPage(_authservice, toastController, storage) {
        this._authservice = _authservice;
        this.toastController = toastController;
        this.storage = storage;
        //isdLoaderEnable = false;
        this.isLoaderEnable = true;
        this.employeeMbl = null;
        this.employeeQRCode = null;
        this.isMobileNoVerified = false;
        this.isSubmitClicked = false;
        this.emplMobileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emplMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
    }
    EmployeeqrgenerationPage.prototype.ngOnInit = function () {
        var _this = this;
        // this.emplMobileForm.get('emplMobileNo').enable();
        this.storage.get('employeemobile').then(function (mbl) {
            console.log("NgOnInit Console :: " + mbl);
            _this.employeeMbl = mbl;
            if (_this.employeeMbl == null) {
                _this.emplMobileForm.get('emplMobileNo').enable();
                _this.isMobileNoVerified = false;
                _this.employeeQRCode = "";
            }
            else {
                _this.employeeQRCode = "" + _this.employeeMbl; //because no is not working for qr code 
                console.log("this.employeeQRCode " + _this.employeeQRCode);
                _this.isLoaderEnable = false;
                _this.emplMobileForm.patchValue({
                    'emplMobileNo': _this.employeeMbl
                });
                _this.emplMobileForm.get('emplMobileNo').disable();
                _this.isMobileNoVerified = true;
            }
        });
    };
    EmployeeqrgenerationPage.prototype.verifyMbl = function () {
        var _this = this;
        this.isSubmitClicked = true;
        this.isLoaderEnable = true;
        if (this.emplMobileForm.get('emplMobileNo').value != "") {
            var response_1;
            this._authservice.verifyMobile(this.emplMobileForm.value).then(function (data) {
                response_1 = data;
                _this.isLoaderEnable = false;
                if (response_1.STATUS == 200 && response_1.STATUS_MSG == "SUCCESS") {
                    _this.isLoaderEnable = false;
                    _this.employeeQRCode = "" + _this.emplMobileForm.get('emplMobileNo').value;
                    _this.storage.set("employeemobile", _this.emplMobileForm.get('emplMobileNo').value);
                    _this.isMobileNoVerified = true;
                    _this.isSubmitClicked = false;
                }
                else if (response_1.STATUS == 300 && response_1.STATUS_MSG == "NOT_FOUND") {
                    _this.employeeQRCode = null;
                    _this.isSubmitClicked = false;
                    _this.presentToastWithOptions('Mobile no is not registered', 'bottom');
                }
                else {
                    _this.employeeQRCode = null;
                    _this.isSubmitClicked = false;
                    _this.presentToastWithOptions('Some Problem.Please try again later...', 'bottom');
                }
            }, function (error) {
                console.log(error);
                console.log("Error on qr scanner display");
                _this.isSubmitClicked = false;
            });
        }
        else {
            this.employeeQRCode = null;
            this.presentToastWithOptions('Please enter mobile number', 'bottom');
            this.isSubmitClicked = false;
        }
    };
    EmployeeqrgenerationPage.prototype.presentToastWithOptions = function (msg, pos) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            showCloseButton: true,
                            position: pos,
                            animated: true,
                            color: 'light',
                            keyboardClose: true,
                            closeButtonText: 'X',
                            duration: 3000,
                            cssClass: 'customToastCls'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    EmployeeqrgenerationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-employeeqrgeneration',
            template: __webpack_require__(/*! ./employeeqrgeneration.page.html */ "./src/app/employeeqrgeneration/employeeqrgeneration.page.html"),
            styles: [__webpack_require__(/*! ./employeeqrgeneration.page.scss */ "./src/app/employeeqrgeneration/employeeqrgeneration.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
    ], EmployeeqrgenerationPage);
    return EmployeeqrgenerationPage;
}());



/***/ })

}]);
//# sourceMappingURL=employeeqrgeneration-employeeqrgeneration-module.js.map