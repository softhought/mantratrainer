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

module.exports = "<ion-content no-padding>\n  <div id=\"employeeQRgenerationPage\">\n\n      <h6>Employee Attendance </h6>\n      <form [formGroup]=\"emplMobileForm\" >\n        <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>Verify your mobile</ion-card-subtitle>\n           \n              \n            </ion-card-header>\n          \n            <ion-card-content>\n\n                <ion-item no-lines>\n                    <ion-input type=\"number\" clearInput placeholder=\"\" formControlName=\"emplMobileNo\"></ion-input> \n                </ion-item>\n\n                <ion-grid>\n                  <ion-row>\n                    <ion-col text-center>\n                      <ion-button (click)=\"verifyMbl()\">Verify & Generate <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                    <ion-col text-center>\n                     <p style=\"font-size: 11px;\">Verify your mobile no and generate QR code for attendance.</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n                \n\n            </ion-card-content>\n        </ion-card>\n      </form>\n\n     \n      <div id=\"qrSection\" >\n          <ion-spinner name=\"crescent\"></ion-spinner>\n        <qrcode *ngIf=\"employeeQRCode\" [qrdata]=\"employeeQRCode\" allowEmptyString=\"false\" [size]=\"260\" [level]=\"'M'\"></qrcode>\n      </div>\n      <p id=\"qrscantxt\">Scan QR Code</p>\n     \n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/employeeqrgeneration/employeeqrgeneration.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/employeeqrgeneration/employeeqrgeneration.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#employeeQRgenerationPage {\n  background: #ff6309;\n  height: 100%;\n  padding-top: 2%; }\n  #employeeQRgenerationPage h6 {\n    text-align: center;\n    font-size: 1.2rem;\n    text-transform: uppercase;\n    color: #9F3A00;\n    margin-bottom: 10%; }\n  #employeeQRgenerationPage ion-card {\n    background: #FFF;\n    width: 85%;\n    margin: 0 auto; }\n  #employeeQRgenerationPage ion-card ion-card-subtitle {\n      text-align: center;\n      text-transform: uppercase;\n      letter-spacing: 2px;\n      font-weight: 600; }\n  #employeeQRgenerationPage ion-card ion-item {\n      width: 86%;\n      margin: 0 auto;\n      --background: transparent;\n      margin-bottom: 6px;\n      --border-width: 0 0 0px 0;\n      border: 1px solid #e7e7e7;\n      border-radius: 50px; }\n  #employeeQRgenerationPage ion-card ion-button {\n      --background:rgb(255, 99, 9); }\n  #employeeQRgenerationPage #qrSection {\n    width: 260px;\n    height: 260px;\n    margin: 10% auto;\n    background: #FFF;\n    border: 2px solid #FFF;\n    position: relative;\n    border-radius: 14px; }\n  #employeeQRgenerationPage #qrSection img {\n      border-radius: 8px; }\n  #employeeQRgenerationPage #qrSection ion-spinner {\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: auto;\n      top: 43%; }\n  #employeeQRgenerationPage #qrscantxt {\n    text-align: center;\n    margin-top: -35px;\n    font-size: 12px;\n    color: #FFF; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWVxcmdlbmVyYXRpb24vRDpcXEFwcERldmVsb3BtZW50XFxNYW50cmFBcHBcXG1hbnRyYXRyYWluZXIvc3JjXFxhcHBcXGVtcGxveWVlcXJnZW5lcmF0aW9uXFxlbXBsb3llZXFyZ2VuZXJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBMkI7RUFDM0IsWUFBVztFQUNYLGVBQWMsRUFBQTtFQUhsQjtJQU1RLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0IsRUFBQTtFQVYxQjtJQWNRLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYyxFQUFBO0VBaEJ0QjtNQW1CWSxrQkFBa0I7TUFDbEIseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixnQkFBZ0IsRUFBQTtFQXRCNUI7TUEwQlksVUFBVTtNQUNWLGNBQWM7TUFDZCx5QkFBYTtNQUlaLGtCQUFrQjtNQUNsQix5QkFBZTtNQUNmLHlCQUF5QjtNQUN6QixtQkFBbUIsRUFBQTtFQW5DaEM7TUF1Q1ksNEJBQWEsRUFBQTtFQXZDekI7SUE0Q1EsWUFBVztJQUNYLGFBQVk7SUFDWixnQkFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLG1CQUFtQixFQUFBO0VBbEQzQjtNQXFEWSxrQkFBa0IsRUFBQTtFQXJEOUI7TUF5RFksa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxRQUFRO01BQ1IsWUFBWTtNQUNaLFFBQVEsRUFBQTtFQTdEcEI7SUFpRVEsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWVxcmdlbmVyYXRpb24vZW1wbG95ZWVxcmdlbmVyYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2VtcGxveWVlUVJnZW5lcmF0aW9uUGFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCA5OSwgOSk7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHBhZGRpbmctdG9wOjIlO1xyXG5cclxuICAgIGg2e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiAjOUYzQTAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIH1cclxuXHJcbiAgICBpb24tY2FyZHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgIGlvbi1jYXJkLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWl0ZW17XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NiU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgLy8gIGJvcmRlcjogMXB4IHNvbGlkICNmOGY4Zjg7XHJcbiAgICAgICAgIC8vICAgYm9yZGVyLXJhZGl1czogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAvLyAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG4gICAgICAgICAgICAgLS1ib3JkZXItd2lkdGg6IDAgMCAwcHggMDtcclxuICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOnJnYigyNTUsIDk5LCA5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI3FyU2VjdGlvbntcclxuICAgICAgICB3aWR0aDoyNjBweDtcclxuICAgICAgICBoZWlnaHQ6MjYwcHg7XHJcbiAgICAgICAgbWFyZ2luOjEwJSBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgYm9yZGVyOjJweCBzb2xpZCAjRkZGO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHRvcDogNDMlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICNxcnNjYW50eHR7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgIH1cclxufSJdfQ== */"

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
        var _this = this;
        this._authservice = _authservice;
        this.toastController = toastController;
        this.storage = storage;
        this.isdLoaderEnable = false;
        this.employeeQRCode = null;
        this.emplMobileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            emplMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
        });
        storage.get('employeemobile').then(function (employeemobile) {
            _this.employeeMbl = employeemobile;
        });
    }
    EmployeeqrgenerationPage.prototype.ngOnInit = function () {
    };
    EmployeeqrgenerationPage.prototype.verifyMbl = function () {
        var _this = this;
        alert("Mobile " + this.employeeMbl);
        this.isdLoaderEnable = true;
        if (this.emplMobileForm.get('emplMobileNo').value != "") {
            var response_1;
            this._authservice.verifyMobile(this.emplMobileForm.value).then(function (data) {
                response_1 = data;
                _this.isdLoaderEnable = false;
                if (response_1.STATUS == 200 && response_1.STATUS_MSG == "SUCCESS") {
                    _this.employeeQRCode = _this.emplMobileForm.get('emplMobileNo').value;
                    _this.storage.set("employeemobile", _this.emplMobileForm.get('emplMobileNo').value);
                }
                else if (response_1.STATUS == 300 && response_1.STATUS_MSG == "NOT_FOUND") {
                    _this.presentToastWithOptions('Mobile no is not registered', 'bottom');
                }
                else {
                    _this.presentToastWithOptions('Some Problem.Please try again later...', 'bottom');
                }
            }, function (error) {
                console.log(error);
                console.log("Error on sending otp");
            });
        }
        else {
            this.presentToastWithOptions('Please enter mobile number', 'bottom');
            this.isdLoaderEnable = false;
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