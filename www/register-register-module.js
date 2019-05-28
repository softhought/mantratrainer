(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "./src/app/register/register.page.ts");







var routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]
    }
];
var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());



/***/ }),

/***/ "./src/app/register/register.page.html":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id=\"registerPage\">\r\n    <ion-img src=\"assets/register/register3.svg\"></ion-img>\r\n    <div id=\"registerSlog\">\r\n      <h2>Verify And Set Quick Login Pin</h2>\r\n      <p>Forget all \"Myths and Magic\" and simply believe in the purity of \"Mantra\".</p>\r\n    </div>\r\n\r\n    <!--\r\n    <form [formGroup]=\"loginForm\" novalidate  class=\"loginformcontainer\">\r\n      <ion-item no-lines>\r\n          <ion-input type=\"number \" clearInput placeholder=\"Enter registerd mobile no\" formControlName=\"emplMobileNo\" ></ion-input>\r\n      </ion-item>\r\n      <ion-item no-lines>\r\n          <ion-input clearInput placeholder=\"Set your pin\" formControlName=\"emplPin\" ></ion-input>\r\n      </ion-item>\r\n\r\n      <ion-item no-lines id=\"regBtnItem\" style=\"border:0;border-radius: 0px;\">\r\n          \r\n          <ion-button expand=\"full\" shape=\"round\" (click)=\"signIn(loginForm.value)\">Process </ion-button>\r\n         \r\n      </ion-item>\r\n    </form>\r\n    -->\r\n\r\n\r\n\r\n    <ion-card id=\"regformWizard\">\r\n       \r\n      \r\n        <ion-card-content>\r\n            <ion-slides pager=\"false\" #registerSlider>\r\n             \r\n                <ion-slide>\r\n                 \r\n                    <form [formGroup]=\"emplMobileForm\" >\r\n                      <ion-grid>\r\n                        <ion-row>\r\n                          <ion-col>\r\n                              <h4>1. Verify  Mobile</h4>\r\n                          </ion-col>\r\n                          <ion-col>\r\n                              <h4>1 of 3</h4>\r\n                          </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row class=\"inputRows\">\r\n                          <ion-col>\r\n                              <ion-item no-lines>\r\n                                  <ion-input type=\"number\" clearInput placeholder=\"Enter registered mobile no\" formControlName=\"emplMobileNo\" ></ion-input> \r\n                              </ion-item>\r\n                          </ion-col>\r\n                        </ion-row>\r\n\r\n                        <ion-row>\r\n                            <ion-col>\r\n                              <ion-button (click)=\"verifyMblAndSendOTP()\" *ngIf=\"!isOtpSendLoaderEnable\" >Send OTP <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\r\n                              <ion-spinner name=\"bubbles\" *ngIf=\"isOtpSendLoaderEnable\" ></ion-spinner>\r\n                            </ion-col>\r\n                        </ion-row>\r\n                      </ion-grid> \r\n                    </form>\r\n                </ion-slide>\r\n             \r\n\r\n            \r\n                <ion-slide>\r\n                   \r\n                    <form [formGroup]=\"emplMobileOTPForm\" novalidate >\r\n                      <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col>\r\n                                <h4>2. Enter OTP</h4>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <h4>2 of 3</h4>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col>\r\n                                <ion-item no-lines>\r\n                                    <ion-input type=\"number \" clearInput placeholder=\"Enter OTP\" formControlName=\"emplVerifyOTP\"></ion-input>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                         \r\n                          </ion-row>\r\n                         \r\n                          <ion-row>\r\n                              <ion-col>\r\n                                <ion-button  (click)=\"verifyOTP()\" *ngIf=\"!isOtpVerifyLoaderEnable\" >Verify <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\r\n                                <ion-spinner name=\"bubbles\" *ngIf=\"isOtpVerifyLoaderEnable\" ></ion-spinner>\r\n                              </ion-col>\r\n                          </ion-row>\r\n\r\n                          <ion-row>\r\n                              <ion-col>\r\n                                  <a (click)=\"verifyOTP()\" style=\"font-size: 12px;color:#878787;\">Re-send OTP</a>\r\n                              </ion-col>\r\n                            </ion-row>\r\n\r\n                        </ion-grid>\r\n                    </form>\r\n                </ion-slide>\r\n             \r\n\r\n             \r\n                <ion-slide>\r\n                    \r\n                    <form [formGroup]=\"emplsetPinForm\" novalidate >\r\n                      <ion-grid>\r\n                          <ion-row>\r\n                            <ion-col>\r\n                                <h4>3. Create Pin</h4>\r\n                            </ion-col>\r\n                            <ion-col>\r\n                                <h4>3 of 3</h4>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                            <ion-col>\r\n                                <ion-item no-lines>\r\n                                    <ion-input type=\"number \" clearInput placeholder=\"Set Pin\" formControlName=\"emplSetPin\" ></ion-input>\r\n                                </ion-item>\r\n                            </ion-col>\r\n                          </ion-row>\r\n                          <ion-row>\r\n                              <ion-col>\r\n                                <ion-button (click)=\"setLoginPin()\" *ngIf=\"!isSetPinLoaderEnable\">Set Pin <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\r\n                                <ion-spinner name=\"bubbles\" *ngIf=\"isSetPinLoaderEnable\" ></ion-spinner>\r\n                              </ion-col>\r\n                          </ion-row>\r\n                      </ion-grid>\r\n                    </form>\r\n                </ion-slide>\r\n              \r\n          </ion-slides>\r\n        \r\n\r\n\r\n        </ion-card-content>\r\n    </ion-card>\r\n\r\n    <p id=\"loginlink\"><ion-button size=\"small\" (click)=\"gotologin()\">Already registered. Login Now </ion-button> </p>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/register/register.page.scss":
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content#registerPage {\n  height: 100%;\n  --background:#F2652D;\n  text-align: center;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }\n  ion-content#registerPage ion-img {\n    width: 60%;\n    margin-left: auto;\n    margin-right: auto;\n    margin-top: 15%; }\n  ion-content#registerPage #registerSlog {\n    color: #FFF;\n    margin-bottom: 10px; }\n  ion-content#registerPage #registerSlog p {\n      width: 96%;\n      margin: 0 auto; }\n  ion-content#registerPage #regformWizard {\n    width: 85%;\n    margin: 0 auto;\n    margin-top: 30px;\n    background: #FFF;\n    border-radius: 20px; }\n  ion-content#registerPage #regformWizard ion-slides {\n      height: 180px; }\n  ion-content#registerPage #regformWizard .swiper-pagination {\n      display: none !important; }\n  ion-content#registerPage #regformWizard .item-interactive.ion-invalid {\n      --highlight-background: transparent; }\n  ion-content#registerPage #regformWizard .item-interactive.ion-valid {\n      --highlight-background: transparent; }\n  ion-content#registerPage form {\n    background: #FFF;\n    width: 100%;\n    margin: 0 auto;\n    border-radius: 8px;\n    padding-top: 0px; }\n  ion-content#registerPage form ion-item {\n      width: 86%;\n      margin: 0 auto;\n      --background: transparent;\n      margin-bottom: 6px;\n      --border-width: 0 0 0px 0;\n      border: 1px solid #e7e7e7;\n      border-radius: 50px; }\n  ion-content#registerPage form .inputRows {\n      margin-top: 15px; }\n  ion-content#registerPage form ion-button {\n      width: auto;\n      --background:#F2652D;\n      --box-shadow: 0 0px 0px 0px rgba(0,0,0,0.2),\r\n                           0 0px 0px 0 rgba(0,0,0,0.14),\r\n                           0 0px 0px 0 rgba(255, 255, 255, 0.12);\n      height: 40px;\n      --border-radius: 50px; }\n  ion-content#registerPage #loginlink {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto; }\n  ion-content#registerPage #loginlink ion-button {\n      --background:transparent;\n      --box-shadow: 0px 0px 0px;\n      --border-radius: 0;\n      text-transform: capitalize; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvRDpcXEFwcERldmVsb3BtZW50XFxNYW50cmFBcHBcXG1hbnRyYXRyYWluZXIvc3JjXFxhcHBcXHJlZ2lzdGVyXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFXO0VBRVgsb0JBQWE7RUFDYixrQkFBa0I7RUFDbEIsd0lBQXdJLEVBQUE7RUFMNUk7SUFTUSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlLEVBQUE7RUFadkI7SUFnQlEsV0FBVTtJQUNWLG1CQUFtQixFQUFBO0VBakIzQjtNQW1CWSxVQUFTO01BQ1QsY0FBYSxFQUFBO0VBcEJ6QjtJQTRCUSxVQUFTO0lBQ1QsY0FBYztJQUNkLGdCQUFlO0lBQ2YsZ0JBQWU7SUFDZixtQkFBbUIsRUFBQTtFQWhDM0I7TUFtQ1csYUFBYSxFQUFBO0VBbkN4QjtNQXNDWSx3QkFBdUIsRUFBQTtFQXRDbkM7TUF5Q1ksbUNBQXVCLEVBQUE7RUF6Q25DO01BNkNZLG1DQUF1QixFQUFBO0VBN0NuQztJQWtEUSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZ0JBQWUsRUFBQTtFQXREdkI7TUF5RFksVUFBVTtNQUNWLGNBQWM7TUFDZCx5QkFBYTtNQUlaLGtCQUFrQjtNQUNsQix5QkFBZTtNQUNmLHlCQUF5QjtNQUN6QixtQkFBbUIsRUFBQTtFQWxFaEM7TUFzRVksZ0JBQWUsRUFBQTtFQXRFM0I7TUErRVksV0FBVztNQUVYLG9CQUFhO01BRVo7O2dFQUFhO01BR0MsWUFBWTtNQUNaLHFCQUFnQixFQUFBO0VBdkYzQztJQWdHUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULE9BQU07SUFDTixRQUFPO0lBQ1AsWUFBWSxFQUFBO0VBcEdwQjtNQXNHWSx3QkFBYTtNQUNiLHlCQUFhO01BQ2Isa0JBQWdCO01BQ2hCLDBCQUEwQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQjcmVnaXN0ZXJQYWdle1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgLy8gIC0tYmFja2dyb3VuZDojZmYzMTBjO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGMjY1MkQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG5cclxuXHJcbiAgICBpb24taW1nIHtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICB9XHJcblxyXG4gICAgI3JlZ2lzdGVyU2xvZ3tcclxuICAgICAgICBjb2xvcjojRkZGO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgd2lkdGg6OTYlO1xyXG4gICAgICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjcmVnZm9ybVdpemFyZCB7XHJcbiAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIC8vICBib3R0b206MDtcclxuICAgICAgICBcclxuICAgICAgICB3aWR0aDo4NSU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I0ZGRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAgICAgICBpb24tc2xpZGVze1xyXG4gICAgICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgLnN3aXBlci1wYWdpbmF0aW9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtLWludGVyYWN0aXZlLmlvbi1pbnZhbGlkIHtcclxuICAgICAgICAgICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbS1pbnRlcmFjdGl2ZS5pb24tdmFsaWQge1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZm9ybXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDowcHg7XHJcblxyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICB3aWR0aDogODYlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgIC8vICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOGY4O1xyXG4gICAgICAgICAvLyAgIGJvcmRlci1yYWRpdXM6IDEycHggIWltcG9ydGFudDtcclxuICAgICAgICAgLy8gICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgIC0tYm9yZGVyLXdpZHRoOiAwIDAgMHB4IDA7XHJcbiAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnB1dFJvd3N7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG5cclxuXHJcbiAgICAgICBcclxuICAgICAgIFxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgIC8vICAtLWJhY2tncm91bmQ6I2ZmMzEwYztcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiNGMjY1MkQ7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgIC0tYm94LXNoYWRvdzogMCAwcHggMHB4IDBweCByZ2JhKDAsMCwwLDAuMiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMHB4IDBweCAwIHJnYmEoMCwwLDAsMC4xNCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgMHB4IDBweCAwIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICAgXHJcbiAgICAgICAgXHJcblxyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuICAgICNsb2dpbmxpbmt7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OjA7XHJcbiAgICAgICAgcmlnaHQ6MDtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAtLWJveC1zaGFkb3c6IDBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/register/register.page.ts":
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");







var RegisterPage = /** @class */ (function () {
    function RegisterPage(router, navCtrl, _authservice, toastController, storage) {
        this.router = router;
        this.navCtrl = navCtrl;
        this._authservice = _authservice;
        this.toastController = toastController;
        this.storage = storage;
        this.isOtpSendLoaderEnable = false;
        this.isOtpVerifyLoaderEnable = false;
        this.isSetPinLoaderEnable = false;
        this.emplMobileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            emplMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.emplMobileOTPForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            emplVerifyOTP: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
        this.emplsetPinForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            emplSetPin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
        });
    }
    RegisterPage.prototype.ngOnInit = function () {
        //this.registerSlider.lockSwipes(true);
    };
    RegisterPage.prototype.verifyMblAndSendOTP = function () {
        var _this = this;
        this.isOtpSendLoaderEnable = true;
        if (this.emplMobileForm.get('emplMobileNo').value != "") {
            var response_1;
            this._authservice.sendOTP(this.emplMobileForm.value).then(function (data) {
                response_1 = data;
                _this.isOtpSendLoaderEnable = false;
                if (response_1.STATUS == 200 && response_1.STATUS_MSG == "SUCCESS") {
                    _this.sliderNextControll();
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
            this.isOtpSendLoaderEnable = false;
        }
    };
    RegisterPage.prototype.verifyOTP = function () {
        var _this = this;
        this.isOtpVerifyLoaderEnable = true;
        var response;
        this._authservice.verifyOTP(this.emplMobileForm.value, this.emplMobileOTPForm.value).then(function (data) {
            response = data;
            if (response.STATUS == 200 && response.STATUS_MSG == "SUCCESS") {
                _this.sliderNextControll();
            }
            else if (response.STATUS == 444 && response.STATUS_MSG == "OTP_EXPIRED") {
                _this.presentToastWithOptions('OTP Expired. Try to send again...', 'bottom');
            }
            else if (response.STATUS == 444 && response.STATUS_MSG == "OTP_MISMATCH") {
                _this.presentToastWithOptions('OTP mismatch.', 'bottom');
            }
            else {
                _this.presentToastWithOptions('Some Problem.Please try again later...', 'bottom');
            }
            _this.isOtpVerifyLoaderEnable = false;
        }, function (error) {
            console.log(error);
            console.log("Error from login attempt");
        });
    };
    RegisterPage.prototype.setLoginPin = function () {
        var _this = this;
        var mblno = this.emplMobileForm.get('emplMobileNo').value;
        this.isSetPinLoaderEnable = true;
        var response;
        this._authservice.setloginPin(this.emplMobileForm.value, this.emplMobileOTPForm.value, this.emplsetPinForm.value).then(function (data) {
            response = data;
            if (response.STATUS == 200 && response.STATUS_MSG == "SUCCESS") {
                _this.storage.clear();
                var mblno_1 = _this.emplMobileForm.get('emplMobileNo').value;
                _this.storage.set('registeredmobile', mblno_1);
                _this.navCtrl.navigateForward('login');
            }
            else {
                _this.presentToastWithOptions('Some Problem.Please try again later...', 'bottom');
            }
            _this.isSetPinLoaderEnable = false;
        }, function (error) {
            console.log("Error from login attempt");
        });
    };
    RegisterPage.prototype.presentToastWithOptions = function (msg, pos) {
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
    RegisterPage.prototype.sliderNextControll = function () {
        this.registerSlider.lockSwipes(false);
        this.registerSlider.slideNext(200);
        this.registerSlider.lockSwipes(true);
    };
    RegisterPage.prototype.sliderPrevControll = function () {
        this.registerSlider.lockSwipes(false);
        this.registerSlider.slidePrev(200);
        this.registerSlider.lockSwipes(true);
    };
    RegisterPage.prototype.gotologin = function () {
        this.navCtrl.navigateForward('login');
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('registerSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RegisterPage.prototype, "registerSlider", void 0);
    RegisterPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.page.html */ "./src/app/register/register.page.html"),
            styles: [__webpack_require__(/*! ./register.page.scss */ "./src/app/register/register.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], RegisterPage);
    return RegisterPage;
}());



/***/ })

}]);
//# sourceMappingURL=register-register-module.js.map