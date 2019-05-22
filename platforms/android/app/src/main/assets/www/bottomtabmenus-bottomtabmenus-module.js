(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bottomtabmenus-bottomtabmenus-module"],{

/***/ "./src/app/layout/bottomtabmenus/bottomtabmenus.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/bottomtabmenus/bottomtabmenus.module.ts ***!
  \****************************************************************/
/*! exports provided: BottomtabmenusPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomtabmenusPageModule", function() { return BottomtabmenusPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _bottomtabmenus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bottomtabmenus.page */ "./src/app/layout/bottomtabmenus/bottomtabmenus.page.ts");
/* harmony import */ var _tabdetails_secondtab_secondtab_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tabdetails/secondtab/secondtab.module */ "./src/app/layout/bottomtabmenus/tabdetails/secondtab/secondtab.module.ts");








_tabdetails_secondtab_secondtab_module__WEBPACK_IMPORTED_MODULE_7__["SecondtabPageModule"];
var routes = [
    {
        path: 'tabs',
        component: _bottomtabmenus_page__WEBPACK_IMPORTED_MODULE_6__["BottomtabmenusPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: './tabdetails/firsttab/firsttab.module#FirsttabPageModule'
            },
            {
                path: 'tab2',
                loadChildren: './tabdetails/secondtab/secondtab.module#SecondtabPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab1',
        pathMatch: 'full'
    }
];
var BottomtabmenusPageModule = /** @class */ (function () {
    function BottomtabmenusPageModule() {
    }
    BottomtabmenusPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_bottomtabmenus_page__WEBPACK_IMPORTED_MODULE_6__["BottomtabmenusPage"]]
        })
    ], BottomtabmenusPageModule);
    return BottomtabmenusPageModule;
}());



/***/ }),

/***/ "./src/app/layout/bottomtabmenus/bottomtabmenus.page.html":
/*!****************************************************************!*\
  !*** ./src/app/layout/bottomtabmenus/bottomtabmenus.page.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"sunny\"></ion-icon>\n      <ion-label>Tab1</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n        <ion-icon name=\"sunny\"></ion-icon>\n        <ion-label>Tab2</ion-label>\n      </ion-tab-button>\n\n  </ion-tab-bar>\n</ion-tabs>"

/***/ }),

/***/ "./src/app/layout/bottomtabmenus/bottomtabmenus.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/layout/bottomtabmenus/bottomtabmenus.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ib3R0b210YWJtZW51cy9ib3R0b210YWJtZW51cy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/bottomtabmenus/bottomtabmenus.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/bottomtabmenus/bottomtabmenus.page.ts ***!
  \**************************************************************/
/*! exports provided: BottomtabmenusPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomtabmenusPage", function() { return BottomtabmenusPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BottomtabmenusPage = /** @class */ (function () {
    function BottomtabmenusPage() {
    }
    BottomtabmenusPage.prototype.ngOnInit = function () {
    };
    BottomtabmenusPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bottomtabmenus',
            template: __webpack_require__(/*! ./bottomtabmenus.page.html */ "./src/app/layout/bottomtabmenus/bottomtabmenus.page.html"),
            styles: [__webpack_require__(/*! ./bottomtabmenus.page.scss */ "./src/app/layout/bottomtabmenus/bottomtabmenus.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BottomtabmenusPage);
    return BottomtabmenusPage;
}());



/***/ })

}]);
//# sourceMappingURL=bottomtabmenus-bottomtabmenus-module.js.map