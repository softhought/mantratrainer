(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/login/login.page.html":
/*!***************************************!*\
  !*** ./src/app/login/login.page.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content id=\"loginPage\" scrollY=\"true\" >\r\n    <div id=\"container\">\r\n        <main>\r\n            <section class=\"half\" id=\"loginTopScreen\" style=\"background:linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), url('assets/loginbg.svg');  background-size: contain;\">\r\n                \r\n                <div id=\"logo\">\r\n                    <ion-img src=\"assets/mantra_logo.png\"></ion-img>\r\n                    <h3>Mantra</h3>\r\n                    <p>LIFE STYLE HEALTH CLUB</p>\r\n                </div>\r\n               \r\n            </section>\r\n            <section class=\"half\" id=\"loginBottomScreen\" >\r\n                <div class=\"header__bg\"></div>\r\n\r\n                   <!-- <p>Login with your quick pin and enjoy your panel</p>-->\r\n\r\n                        <form novalidate [formGroup]=\"loginForm\" >\r\n                            <p id=\"logintext\">Login to continue</p>\r\n                            <input type=\"hidden\" formControlName=\"regMbl\" />\r\n                            <ion-grid>\r\n                                   \r\n                                <ion-row>\r\n                                  <ion-col>\r\n                                      <ion-item no-lines>\r\n                                       \r\n                                          <ion-input type=\"number\" clearInput placeholder=\"Enter Pin\" formControlName=\"loginPinCtrl\" ></ion-input>\r\n                                      </ion-item>\r\n                                  </ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    \r\n                                    <ion-col>\r\n                                            <ion-button style=\"width: 100%;\" type=\"bbutton\" *ngIf=\"!isLoginLoaderEnable\" (click)=\"loginToDashboard()\">Let's Start <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\r\n                                            <ion-spinner name=\"bubbles\" *ngIf=\"isLoginLoaderEnable\" ></ion-spinner>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n\r\n\r\n                                <!-- <ion-row>\r\n                                    <ion-col>1</ion-col>\r\n                                    <ion-col>2</ion-col>\r\n                                    <ion-col>3</ion-col>\r\n                                    <ion-col>4</ion-col>\r\n                                    <ion-col>5</ion-col>\r\n                                </ion-row>\r\n                                <ion-row>\r\n                                    <ion-col>6</ion-col>\r\n                                    <ion-col>7</ion-col>\r\n                                    <ion-col>8</ion-col>\r\n                                    <ion-col>9</ion-col>\r\n                                    <ion-col>0</ion-col>\r\n                                </ion-row> -->\r\n\r\n                                <ion-row>\r\n                                    <ion-col style=\"text-align:right;\">\r\n                                            <ion-button id=\"forgotpass\"> Forgot Password <ion-icon name=\"lock\"></ion-icon></ion-button>\r\n                                    </ion-col>\r\n                                </ion-row>\r\n\r\n                               \r\n                            </ion-grid>\r\n                          </form>\r\n                            <p id=\"registerlink\"><ion-button size=\"small\" (click)=\"gotoRegistration()\">Not yet registered. Register Now </ion-button> </p>\r\n            </section>\r\n        </main>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/login/login.page.scss":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content#loginPage {\n  /*\r\n    header {\r\n        position: relative;\r\n        height: 300px;\r\n        overflow: hidden;\r\n      }\r\n      \r\n      .header__bg {\r\n        position: absolute;\r\n        top: 0;\r\n        bottom: 0;\r\n        right: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n        background-image: linear-gradient(#ff9d2f, #ff6126);\r\n        transform: skewY(-6deg);\r\n        transform-origin: top left;\r\n      }\r\n      */ }\n  ion-content#loginPage ion-col {\n    position: initial !important; }\n  ion-content#loginPage #container {\n    height: 100%; }\n  ion-content#loginPage main {\n    height: calc(100% - 0px);\n    background: transparent; }\n  ion-content#loginPage .half {\n    height: 50%; }\n  ion-content#loginPage .half:first-child {\n    background: #ffffff; }\n  ion-content#loginPage .half:last-child {\n    background: #F2652D; }\n  ion-content#loginPage #loginTopScreen {\n    text-align: center;\n    position: relative; }\n  ion-content#loginPage #loginTopScreen #logo {\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: 0 auto;\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      /*\r\n            box-shadow: -178px -14px 34px 14px #E4E4E4;\r\n            border-radius: 150px;\r\n            padding: 2%;\r\n            */ }\n  ion-content#loginPage #loginTopScreen #logo ion-img {\n        width: 80px;\n        margin-left: auto;\n        margin-right: auto;\n        display: block; }\n  ion-content#loginPage #loginTopScreen #logo h3 {\n        font-size: 4em;\n        text-transform: uppercase;\n        font-weight: 700;\n        color: #F2652D;\n        margin-top: -5px;\n        text-shadow: 8px 3px 7px #DEDEDE; }\n  ion-content#loginPage #loginTopScreen #logo p {\n        letter-spacing: 3px;\n        margin-top: -23px; }\n  ion-content#loginPage #loginBottomScreen {\n    position: relative; }\n  ion-content#loginPage #loginBottomScreen .header__bg {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background-image: linear-gradient(#F2652D, #F2652D);\n      -webkit-transform: skewY(-7deg);\n              transform: skewY(-7deg);\n      -webkit-transform-origin: top left;\n              transform-origin: top left;\n      /* border-top: 10px solid #e9e9e9;\r\n            box-shadow: -93px 81px 0px 94px #FF2801; */ }\n  ion-content#loginPage #loginBottomScreen form {\n      top: 50%;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      position: absolute;\n      width: 90%;\n      left: 0;\n      right: 0;\n      margin: auto; }\n  ion-content#loginPage #loginBottomScreen form p {\n        text-align: center;\n        color: #FFF;\n        font-size: 1.2rem; }\n  ion-content#loginPage #loginBottomScreen ion-row {\n      text-align: center; }\n  ion-content#loginPage #loginBottomScreen ion-item {\n      --border-radius: 50px; }\n  ion-content#loginPage #loginBottomScreen ion-button {\n      margin-left: auto;\n      margin-right: auto;\n      text-align: center;\n      --background: transparent;\n      --border-radius: 50px; }\n  ion-content#loginPage #loginBottomScreen ion-button button {\n        --background: red;\n        --border-radius: 5px; }\n  ion-content#loginPage #loginBottomScreen #forgotpass {\n      --box-shadow: 0px 0px;\n      --border: 0px;\n      --border-radius: 0;\n      text-transform: capitalize; }\n  ion-content#loginPage #loginBottomScreen .item-interactive.ion-invalid {\n      --highlight-background: transparent; }\n  ion-content#loginPage #loginBottomScreen .item-interactive.ion-valid {\n      --highlight-background: transparent; }\n  ion-content#loginPage #loginBottomScreen .item-highlight {\n      --background: transparent; }\n  ion-content#loginPage #loginBottomScreen #registerlink {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      margin: 6px auto;\n      text-align: center;\n      font-size: 13px;\n      color: #ffffff;\n      line-height: 34px;\n      border-top: 1px solid #e15c27; }\n  ion-content#loginPage #loginBottomScreen #registerlink ion-button {\n        --box-shadow: 0px 0px 0px;\n        margin-left: auto;\n        margin-right: auto;\n        text-align: center;\n        --background: transparent;\n        --border-radius: 0px;\n        text-transform: capitalize; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vRDpcXEFwcERldmVsb3BtZW50XFxNYW50cmFBcHBcXG1hbnRyYXRyYWluZXIvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXdLSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQ3BKRyxFRHVLQztFQTNMUjtJQUdRLDRCQUE0QixFQUFBO0VBSHBDO0lBUVEsWUFBWSxFQUFBO0VBUnBCO0lBWVEsd0JBQXdCO0lBQ3hCLHVCQUF1QixFQUFBO0VBYi9CO0lBZ0JRLFdBQVcsRUFBQTtFQWhCbkI7SUFtQlEsbUJBQW1CLEVBQUE7RUFuQjNCO0lBdUJRLG1CQUFtQixFQUFBO0VBdkIzQjtJQThCUSxrQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUEvQjFCO01BbUNZLGtCQUFrQjtNQUNsQixPQUFPO01BQ1AsUUFBUTtNQUNSLGNBQWM7TUFFZCxRQUFRO01BQ1IsbUNBQTJCO2NBQTNCLDJCQUEyQjtNQUMzQjs7OzthQ01DLEVERkM7RUE5Q2Q7UUFnRGdCLFdBQVU7UUFDVixpQkFBZ0I7UUFDaEIsa0JBQWlCO1FBQ2pCLGNBQWEsRUFBQTtFQW5EN0I7UUF3RGdCLGNBQWM7UUFDZCx5QkFBeUI7UUFDekIsZ0JBQWdCO1FBRWhCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsZ0NBQWdDLEVBQUE7RUE5RGhEO1FBaUVnQixtQkFBbUI7UUFDbkIsaUJBQWlCLEVBQUE7RUFsRWpDO0lBeUVRLGtCQUFrQixFQUFBO0VBekUxQjtNQTRFWSxrQkFBa0I7TUFDbEIsTUFBTTtNQUNOLFNBQVM7TUFDVCxRQUFRO01BQ1IsT0FBTztNQUNQLFdBQVc7TUFDWCxZQUFZO01BRVosbURBQW1EO01BQ25ELCtCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsa0NBQTBCO2NBQTFCLDBCQUEwQjtNQUMzQjtzRENUMkMsRURVQztFQXhGdkQ7TUEyRlksUUFBUTtNQUNSLG1DQUEyQjtjQUEzQiwyQkFBMkI7TUFDM0Isa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixPQUFPO01BQ1AsUUFBUTtNQUNSLFlBQVksRUFBQTtFQWpHeEI7UUFtR2dCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsaUJBQWlCLEVBQUE7RUFyR2pDO01BeUdZLGtCQUFpQixFQUFBO0VBekc3QjtNQTRHWSxxQkFBZ0IsRUFBQTtFQTVHNUI7TUFnSFksaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixrQkFBa0I7TUFDbEIseUJBQWE7TUFDYixxQkFBZ0IsRUFBQTtFQXBINUI7UUFzSGdCLGlCQUFhO1FBQ2Isb0JBQWdCLEVBQUE7RUF2SGhDO01BNEhZLHFCQUFhO01BQ2IsYUFBUztNQUNULGtCQUFnQjtNQUNoQiwwQkFBMEIsRUFBQTtFQS9IdEM7TUFtSVksbUNBQXVCLEVBQUE7RUFuSW5DO01BdUlZLG1DQUF1QixFQUFBO0VBdkluQztNQTJJWSx5QkFBYSxFQUFBO0VBM0l6QjtNQStJWSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULE9BQU87TUFDUCxRQUFRO01BQ1IsZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixlQUFlO01BQ2YsY0FBYTtNQUNiLGlCQUFnQjtNQUNoQiw2QkFBNkIsRUFBQTtFQXhKekM7UUEwSlkseUJBQWE7UUFDVCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGtCQUFrQjtRQUNsQix5QkFBYTtRQUNiLG9CQUFnQjtRQUNoQiwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50I2xvZ2luUGFnZXtcclxuXHJcbiAgICBpb24tY29se1xyXG4gICAgICAgIHBvc2l0aW9uOiBpbml0aWFsICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gIFxyXG4gICAgI2NvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICBcclxuICAgIG1haW4ge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMHB4KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIC5oYWxmIHtcclxuICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgIH1cclxuICAgIC5oYWxmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgfVxyXG4gICAgLmhhbGY6bGFzdC1jaGlsZCB7XHJcbiAgICAgLy8gICBiYWNrZ3JvdW5kOiAjZmYzMTBjO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGMjY1MkQ7XHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgI2xvZ2luVG9wU2NyZWVuIHtcclxuICAgICAgICBcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICNsb2dve1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgLy9ib3R0b206IDUlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICAvKlxyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtMTc4cHggLTE0cHggMzRweCAxNHB4ICNFNEU0RTQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyJTtcclxuICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOjgwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDphdXRvO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDN7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDRlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgIC8vICBjb2xvcjogI2ZmMzEwYztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjRjI2NTJEO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgICAgICAgICAgICAgIHRleHQtc2hhZG93OiA4cHggM3B4IDdweCAjREVERURFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIzcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgICNsb2dpbkJvdHRvbVNjcmVlbntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIC5oZWFkZXJfX2JnIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZjI3MDAsICNmZjMxMGMpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0YyNjUyRCwgI0YyNjUyRCk7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2tld1koLTdkZWcpO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgICAgICAvKiBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNlOWU5ZTk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IC05M3B4IDgxcHggMHB4IDk0cHggI0ZGMjgwMTsgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICBmb3Jte1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICBcclxuICAgICAgICAjZm9yZ290cGFzc3tcclxuICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggMHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlcjogMHB4O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0taW50ZXJhY3RpdmUuaW9uLWludmFsaWQge1xyXG4gICAgICAgICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pdGVtLWludGVyYWN0aXZlLmlvbi12YWxpZCB7XHJcbiAgICAgICAgICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLml0ZW0taGlnaGxpZ2h0e1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3JlZ2lzdGVybGlua3tcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDZweCBhdXRvO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6I2ZmZmZmZjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6MzRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlMTVjMjc7XHJcbiAgICAgICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICAvKlxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAuaGVhZGVyX19iZyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZjlkMmYsICNmZjYxMjYpO1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2tld1koLTZkZWcpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgICovXHJcbiAgICAgXHJcblxyXG59IiwiaW9uLWNvbnRlbnQjbG9naW5QYWdlIHtcbiAgLypcclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLmhlYWRlcl9fYmcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmY5ZDJmLCAjZmY2MTI2KTtcclxuICAgICAgICB0cmFuc2Zvcm06IHNrZXdZKC02ZGVnKTtcclxuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcclxuICAgICAgfVxyXG4gICAgICAqLyB9XG4gIGlvbi1jb250ZW50I2xvZ2luUGFnZSBpb24tY29sIHtcbiAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50OyB9XG4gIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cbiAgaW9uLWNvbnRlbnQjbG9naW5QYWdlIG1haW4ge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMHB4KTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuICBpb24tY29udGVudCNsb2dpblBhZ2UgLmhhbGYge1xuICAgIGhlaWdodDogNTAlOyB9XG4gIGlvbi1jb250ZW50I2xvZ2luUGFnZSAuaGFsZjpmaXJzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjsgfVxuICBpb24tY29udGVudCNsb2dpblBhZ2UgLmhhbGY6bGFzdC1jaGlsZCB7XG4gICAgYmFja2dyb3VuZDogI0YyNjUyRDsgfVxuICBpb24tY29udGVudCNsb2dpblBhZ2UgI2xvZ2luVG9wU2NyZWVuIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgaW9uLWNvbnRlbnQjbG9naW5QYWdlICNsb2dpblRvcFNjcmVlbiAjbG9nbyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgLypcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogLTE3OHB4IC0xNHB4IDM0cHggMTRweCAjRTRFNEU0O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMiU7XHJcbiAgICAgICAgICAgICovIH1cbiAgICAgIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjbG9naW5Ub3BTY3JlZW4gI2xvZ28gaW9uLWltZyB7XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgICAgaW9uLWNvbnRlbnQjbG9naW5QYWdlICNsb2dpblRvcFNjcmVlbiAjbG9nbyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogI0YyNjUyRDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTVweDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDhweCAzcHggN3B4ICNERURFREU7IH1cbiAgICAgIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjbG9naW5Ub3BTY3JlZW4gI2xvZ28gcCB7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IC0yM3B4OyB9XG4gIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjbG9naW5Cb3R0b21TY3JlZW4ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjbG9naW5Cb3R0b21TY3JlZW4gLmhlYWRlcl9fYmcge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0YyNjUyRCwgI0YyNjUyRCk7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdZKC03ZGVnKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgICAgLyogYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZTllOWU5O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAtOTNweCA4MXB4IDBweCA5NHB4ICNGRjI4MDE7ICovIH1cbiAgICBpb24tY29udGVudCNsb2dpblBhZ2UgI2xvZ2luQm90dG9tU2NyZWVuIGZvcm0ge1xuICAgICAgdG9wOiA1MCU7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgbWFyZ2luOiBhdXRvOyB9XG4gICAgICBpb24tY29udGVudCNsb2dpblBhZ2UgI2xvZ2luQm90dG9tU2NyZWVuIGZvcm0gcCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtOyB9XG4gICAgaW9uLWNvbnRlbnQjbG9naW5QYWdlICNsb2dpbkJvdHRvbVNjcmVlbiBpb24tcm93IHtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAgIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjbG9naW5Cb3R0b21TY3JlZW4gaW9uLWl0ZW0ge1xuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MHB4OyB9XG4gICAgaW9uLWNvbnRlbnQjbG9naW5QYWdlICNsb2dpbkJvdHRvbVNjcmVlbiBpb24tYnV0dG9uIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweDsgfVxuICAgICAgaW9uLWNvbnRlbnQjbG9naW5QYWdlICNsb2dpbkJvdHRvbVNjcmVlbiBpb24tYnV0dG9uIGJ1dHRvbiB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogcmVkO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDVweDsgfVxuICAgIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjbG9naW5Cb3R0b21TY3JlZW4gI2ZvcmdvdHBhc3Mge1xuICAgICAgLS1ib3gtc2hhZG93OiAwcHggMHB4O1xuICAgICAgLS1ib3JkZXI6IDBweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XG4gICAgaW9uLWNvbnRlbnQjbG9naW5QYWdlICNsb2dpbkJvdHRvbVNjcmVlbiAuaXRlbS1pbnRlcmFjdGl2ZS5pb24taW52YWxpZCB7XG4gICAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuICAgIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjbG9naW5Cb3R0b21TY3JlZW4gLml0ZW0taW50ZXJhY3RpdmUuaW9uLXZhbGlkIHtcbiAgICAgIC0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XG4gICAgaW9uLWNvbnRlbnQjbG9naW5QYWdlICNsb2dpbkJvdHRvbVNjcmVlbiAuaXRlbS1oaWdobGlnaHQge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxuICAgIGlvbi1jb250ZW50I2xvZ2luUGFnZSAjbG9naW5Cb3R0b21TY3JlZW4gI3JlZ2lzdGVybGluayB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBtYXJnaW46IDZweCBhdXRvO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBsaW5lLWhlaWdodDogMzRweDtcbiAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTE1YzI3OyB9XG4gICAgICBpb24tY29udGVudCNsb2dpblBhZ2UgI2xvZ2luQm90dG9tU2NyZWVuICNyZWdpc3RlcmxpbmsgaW9uLWJ1dHRvbiB7XG4gICAgICAgIC0tYm94LXNoYWRvdzogMHB4IDBweCAwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1ib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.page.ts":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, storage, _authservice, toastController) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this._authservice = _authservice;
        this.toastController = toastController;
        this.isLoginLoaderEnable = false;
        console.log("Registered Mobile");
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            loginPinCtrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            regMbl: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    LoginPage.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.get('registeredmobile').then(function (regmobile) {
            console.log("Registered Mobile No " + regmobile);
            console.log(regmobile);
            _this.registeredMobileNo = regmobile;
            _this.loginForm.patchValue({
                regMbl: regmobile
            });
        });
    };
    LoginPage.prototype.loginToDashboard = function () {
        var _this = this;
        this.isLoginLoaderEnable = true;
        if (this.loginForm.get('regMbl').value == "") {
            this.presentToastWithOptions('First Set your pin. By clicking Register now.', 'bottom');
        }
        else {
            if (this.loginForm.get('loginPinCtrl').value != "") {
                var response_1;
                this._authservice.verifyLogin(this.loginForm.value).then(function (data) {
                    response_1 = data;
                    if (response_1.STATUS == 200 && response_1.STATUS_MSG == "SUCCESS") {
                        _this.storage.set("is_logged_in", true);
                        _this.storage.set("token", response_1.TOKEN);
                        // Note :: jwt-decode already installed will use later for decode
                        console.log("Response Token");
                        console.log(response_1.TOKEN);
                        console.log("Response Token End");
                        _this.navCtrl.navigateRoot('mainmenu');
                    }
                    else if (response_1.STATUS == 100 && response_1.STATUS_MSG == "INVALID_AUTH") {
                        _this.presentToastWithOptions('Invalid pin.Please check your pin.', 'bottom');
                    }
                    else if (response_1.STATUS == 300 && response_1.STATUS_MSG == "VALIDATION_REQ") {
                        _this.presentToastWithOptions('Pin is required', 'bottom');
                    }
                    else {
                        _this.presentToastWithOptions('Some Problem.Please try again later...', 'bottom');
                    }
                    _this.isLoginLoaderEnable = false;
                }, function (error) {
                    console.log(error);
                    console.log("Error on login");
                });
            }
            else {
                this.presentToastWithOptions('Please enter your pin', 'bottom');
                this.isLoginLoaderEnable = false;
            }
        }
    };
    LoginPage.prototype.gotoRegistration = function () {
        this.navCtrl.navigateForward('register');
    };
    LoginPage.prototype.presentToastWithOptions = function (msg, pos) {
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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=login-login-module.js.map