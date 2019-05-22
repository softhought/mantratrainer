(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-membercalorietargetassignmentlist-membercalorietargetassignmentlist-module"],{

/***/ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.module.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: MembercalorietargetassignmentlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembercalorietargetassignmentlistPageModule", function() { return MembercalorietargetassignmentlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _membercalorietargetassignmentlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./membercalorietargetassignmentlist.page */ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.ts");







var routes = [
    {
        path: '',
        component: _membercalorietargetassignmentlist_page__WEBPACK_IMPORTED_MODULE_6__["MembercalorietargetassignmentlistPage"]
    }
];
var MembercalorietargetassignmentlistPageModule = /** @class */ (function () {
    function MembercalorietargetassignmentlistPageModule() {
    }
    MembercalorietargetassignmentlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_membercalorietargetassignmentlist_page__WEBPACK_IMPORTED_MODULE_6__["MembercalorietargetassignmentlistPage"]]
        })
    ], MembercalorietargetassignmentlistPageModule);
    return MembercalorietargetassignmentlistPageModule;
}());



/***/ }),

/***/ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-toggle style=\"display:block !important;\">\n          <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"menu\" (click)=\"toggleMenu()\" ></ion-icon>\n          </ion-button>\n        </ion-menu-toggle>\n      </ion-buttons>\n      <ion-title start>Header</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"Back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n      </ion-toolbar>\n    \n  </ion-header>\n\n\n<ion-content no-padding>\n    <div id=\"calorieAssingmentPage\">\n    <ion-card *ngFor=\"let dummy of ' '.repeat(10).split(''), let x = index\">\n\n        <!-- <ion-card-header>\n          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n          <ion-card-title>Card Title</ion-card-title>\n        </ion-card-header> -->\n      \n        <ion-card-content>\n\n          <!-- <ion-item>\n              <ion-badge color=\"primary\">11</ion-badge>\n              <ion-badge color=\"secondary\">22</ion-badge>\n              <ion-badge color=\"tertiary\">33</ion-badge>\n              <ion-badge color=\"success\">44</ion-badge>\n              <ion-badge color=\"warning\">55</ion-badge>\n              <ion-badge color=\"danger\">66</ion-badge>\n              <ion-badge color=\"light\">77</ion-badge>\n              <ion-badge color=\"medium\">88</ion-badge>\n              <ion-badge color=\"dark\">99</ion-badge>\n          </ion-item> -->\n\n          <ion-row >\n            <ion-col size=\"3\">\n              <img src=\"https://www.mantrahealthzone.co.in/images/team_mantra/793940_234_5271avirup%20chowdhury.jpg\" />\n            </ion-col>\n            <ion-col size=\"9\">\n              <h4>MHCMYSC00000072</h4>\n              <h5>ADITYA DOLUI</h5>\n              <p>BP,GGC,Male</p>\n              <ion-item lines=\"full\">\n                  <ion-input type=\"text\" placeholder=\"Calorie Target\"></ion-input>\n                  <ion-button>\n                      <ion-icon name=\"send\"></ion-icon>\n                  </ion-button>\n              </ion-item>\n\n              \n            </ion-col>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#calorieAssingmentPage ion-card-content img {\n  width: 72%;\n  border-radius: 20px; }\n\n#calorieAssingmentPage ion-card-content ion-item {\n  --padding-start: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbWJlcmNhbG9yaWV0YXJnZXRhc3NpZ25tZW50bGlzdC9EOlxcQXBwRGV2ZWxvcG1lbnRcXE1hbnRyYUFwcFxcbWFudHJhdHJhaW5lci9zcmNcXGFwcFxcbGF5b3V0XFxtZW1iZXJjYWxvcmlldGFyZ2V0YXNzaWdubWVudGxpc3RcXG1lbWJlcmNhbG9yaWV0YXJnZXRhc3NpZ25tZW50bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHWSxVQUFVO0VBQ1YsbUJBQW1CLEVBQUE7O0FBSi9CO0VBUVksK0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbWVtYmVyY2Fsb3JpZXRhcmdldGFzc2lnbm1lbnRsaXN0L21lbWJlcmNhbG9yaWV0YXJnZXRhc3NpZ25tZW50bGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY2Fsb3JpZUFzc2luZ21lbnRQYWdle1xyXG4gICAgaW9uLWNhcmQtY29udGVudHtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MiU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.ts ***!
  \****************************************************************************************************/
/*! exports provided: MembercalorietargetassignmentlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembercalorietargetassignmentlistPage", function() { return MembercalorietargetassignmentlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MembercalorietargetassignmentlistPage = /** @class */ (function () {
    function MembercalorietargetassignmentlistPage() {
    }
    MembercalorietargetassignmentlistPage.prototype.ngOnInit = function () {
    };
    MembercalorietargetassignmentlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-membercalorietargetassignmentlist',
            template: __webpack_require__(/*! ./membercalorietargetassignmentlist.page.html */ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.html"),
            styles: [__webpack_require__(/*! ./membercalorietargetassignmentlist.page.scss */ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MembercalorietargetassignmentlistPage);
    return MembercalorietargetassignmentlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=layout-membercalorietargetassignmentlist-membercalorietargetassignmentlist-module.js.map