(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["splashscreen-splashscreen-module"],{

/***/ "./src/app/splashscreen/splashscreen.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.module.ts ***!
  \*****************************************************/
/*! exports provided: SplashscreenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPageModule", function() { return SplashscreenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _splashscreen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./splashscreen.page */ "./src/app/splashscreen/splashscreen.page.ts");







var routes = [
    {
        path: '',
        component: _splashscreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashscreenPage"]
    }
];
var SplashscreenPageModule = /** @class */ (function () {
    function SplashscreenPageModule() {
    }
    SplashscreenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_splashscreen_page__WEBPACK_IMPORTED_MODULE_6__["SplashscreenPage"]]
        })
    ], SplashscreenPageModule);
    return SplashscreenPageModule;
}());



/***/ }),

/***/ "./src/app/splashscreen/splashscreen.page.html":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding>\r\n  <ion-slides pager=\"true\" [options]=\"slideOpts\">\r\n      <ion-slide  id=\"slide1\">\r\n          <h1>Daily Workout</h1>\r\n          <ion-img src=\"assets/splash/ersonal_trainer_ote3(1).svg\"></ion-img>\r\n          <p>If you want to stay fit & Healthy Throughout your Life Then forget all \"Myths and Magic\" and simply believe in the purity of \"Mantra\"</p>\r\n\r\n      </ion-slide>\r\n      <ion-slide  id=\"slide2\">\r\n          <h1>Meditation Techniques</h1>\r\n          <ion-img src=\"assets/splash/undraw_healthy_habit_bh5w.svg\"></ion-img>\r\n          <p>If you want to stay fit & Healthy Throughout your Life Then forget all \"Myths and Magic\" and simply believe in the purity of \"Mantra\"</p>\r\n      </ion-slide>\r\n      <ion-slide  id=\"slide3\">\r\n          <h1>Diet Chart</h1>\r\n          <ion-img src=\"assets/splash/fitness_tracker.svg\"></ion-img>\r\n          <p>If you want to stay fit & Healthy Throughout your Life Then forget all \"Myths and Magic\" and simply believe in the purity of \"Mantra\"</p>\r\n      </ion-slide>\r\n</ion-slides>\r\n\r\n\r\n\r\n\r\n  <ion-item lines=\"none\" id=\"bottomBtnSplash\" >\r\n    <ion-grid>\r\n      <ion-row text-center>\r\n        <ion-col col=\"6\">\r\n          <ion-button (click)=\"gotoRegistration()\">Register Now</ion-button>\r\n        </ion-col>\r\n        <ion-col col=\"6\">\r\n          <ion-button (click)=\"gotologin()\">Login</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </ion-item>\r\n\r\n\r\n\r\n</ion-content>"

/***/ }),

/***/ "./src/app/splashscreen/splashscreen.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slides {\n  height: 92%;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n  color: #FFF;\n  background: #F2652D;\n  --bullet-background-active:#FFF; }\n  ion-slides ion-slide {\n    display: inline; }\n  ion-slides ion-slide h1 {\n      color: #FFF;\n      letter-spacing: 3px;\n      margin-top: 3em;\n      font-size: 1.3rem;\n      margin-top: 5em; }\n  ion-slides ion-slide p {\n      font-size: 0.85rem;\n      width: 90%;\n      margin: 0 auto;\n      color: #FFFFFF;\n      letter-spacing: 1px; }\n  ion-slides ion-slide ion-img {\n      width: 90%;\n      margin-left: auto;\n      margin-right: auto;\n      display: block;\n      margin-top: 0em;\n      border: 0;\n      margin-bottom: 4em;\n      border-radius: 34px;\n      padding: 3%; }\n  #bottomBtnSplash {\n  height: 8%;\n  --background:#F2652D; }\n  #bottomBtnSplash ion-button {\n    --background:transparent;\n    color: #FFF;\n    --box-shadow: 0 0px 0px 0px rgba(0,0,0,0.2),\r\n                   0 0px 0px 0 rgba(0,0,0,0.14),\r\n                   0 0px 0px 0 rgba(255, 255, 255, 0.12); }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BsYXNoc2NyZWVuL0Q6XFxBcHBEZXZlbG9wbWVudFxcTWFudHJhQXBwXFxtYW50cmF0cmFpbmVyL3NyY1xcYXBwXFxzcGxhc2hzY3JlZW5cXHNwbGFzaHNjcmVlbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFXO0VBQ1gsd0lBQXdJO0VBQ3hJLFdBQVc7RUFFWCxtQkFBa0I7RUErQm5CLCtCQUEyQixFQUFBO0VBcEM5QjtJQU9RLGVBQWUsRUFBQTtFQVB2QjtNQVNZLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixlQUFlLEVBQUE7RUFiM0I7TUFnQlksa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixjQUFjO01BQ2QsY0FBYztNQUNkLG1CQUFtQixFQUFBO0VBcEIvQjtNQXlCWSxVQUFVO01BQ1YsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixjQUFjO01BQ2QsZUFBZTtNQUNmLFNBQVM7TUFDVCxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLFdBQVcsRUFBQTtFQU12QjtFQUNJLFVBQVM7RUFFVCxvQkFBYSxFQUFBO0VBSGpCO0lBTUksd0JBQWE7SUFDWixXQUFVO0lBQ1Y7O3dEQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zcGxhc2hzY3JlZW4vc3BsYXNoc2NyZWVuLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZXMge1xyXG4gICAgaGVpZ2h0OiA5MiU7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgIC8vIGJhY2tncm91bmQ6I2ZmMzEwYztcclxuICAgIGJhY2tncm91bmQ6I0YyNjUyRDtcclxuICAgIGlvbi1zbGlkZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDNlbTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG5cclxuICAgICAgICBpb24taW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBlbTtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0ZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDMlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6I0ZGRjtcclxufVxyXG5cclxuI2JvdHRvbUJ0blNwbGFzaCB7XHJcbiAgICBoZWlnaHQ6OCU7XHJcbiAgIC8vIC0tYmFja2dyb3VuZDojZmYzMTBjO1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNGMjY1MkQ7XHJcbiAgICBcclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgLS1iYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgIGNvbG9yOiNGRkY7XHJcbiAgICAgLS1ib3gtc2hhZG93OiAwIDBweCAwcHggMHB4IHJnYmEoMCwwLDAsMC4yKSxcclxuICAgICAgICAgICAgICAgICAgIDAgMHB4IDBweCAwIHJnYmEoMCwwLDAsMC4xNCksXHJcbiAgICAgICAgICAgICAgICAgICAwIDBweCAwcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xyXG4gICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/splashscreen/splashscreen.page.ts":
/*!***************************************************!*\
  !*** ./src/app/splashscreen/splashscreen.page.ts ***!
  \***************************************************/
/*! exports provided: SplashscreenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashscreenPage", function() { return SplashscreenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var SplashscreenPage = /** @class */ (function () {
    function SplashscreenPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slideOpts = {
            effect: 'flip'
        };
    }
    SplashscreenPage.prototype.ngOnInit = function () {
    };
    SplashscreenPage.prototype.gotoRegistration = function () {
        this.navCtrl.navigateForward('register');
    };
    SplashscreenPage.prototype.gotologin = function () {
        this.navCtrl.navigateForward('login');
    };
    SplashscreenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-splashscreen',
            template: __webpack_require__(/*! ./splashscreen.page.html */ "./src/app/splashscreen/splashscreen.page.html"),
            styles: [__webpack_require__(/*! ./splashscreen.page.scss */ "./src/app/splashscreen/splashscreen.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
    ], SplashscreenPage);
    return SplashscreenPage;
}());



/***/ })

}]);
//# sourceMappingURL=splashscreen-splashscreen-module.js.map