(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-mainmenu-mainmenu-module"],{

/***/ "./src/app/layout/mainmenu/mainmenu.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/mainmenu/mainmenu.module.ts ***!
  \****************************************************/
/*! exports provided: MainmenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuPageModule", function() { return MainmenuPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mainmenu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mainmenu.page */ "./src/app/layout/mainmenu/mainmenu.page.ts");







var routes = [
    {
        path: '',
        component: _mainmenu_page__WEBPACK_IMPORTED_MODULE_6__["MainmenuPage"],
        children: [
            {
                path: 'dashboard',
                loadChildren: '../dashboard/dashboard.module#DashboardPageModule'
            },
            {
                path: 'mainmenu/first',
                loadChildren: '../bottomtabmenus/bottomtabmenus.module#BottomtabmenusPageModule'
            },
            {
                path: 'trainer/calorieassignment',
                loadChildren: '../membercalorietargetassignmentlist/membercalorietargetassignmentlist.module#MembercalorietargetassignmentlistPageModule'
            },
            {
                path: '',
                redirectTo: '/mainmenu/dashboard'
            }
        ]
    }
];
var MainmenuPageModule = /** @class */ (function () {
    function MainmenuPageModule() {
    }
    MainmenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mainmenu_page__WEBPACK_IMPORTED_MODULE_6__["MainmenuPage"]]
        })
    ], MainmenuPageModule);
    return MainmenuPageModule;
}());



/***/ }),

/***/ "./src/app/layout/mainmenu/mainmenu.page.html":
/*!****************************************************!*\
  !*** ./src/app/layout/mainmenu/mainmenu.page.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n  <ion-menu contentId=\"content\">\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item [routerLink]=\"p.url\" routerDirection=\"root\" [class.active-item]=\"selectedPath==p.url\">\n            {{p.title}}\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/layout/mainmenu/mainmenu.page.scss":
/*!****************************************************!*\
  !*** ./src/app/layout/mainmenu/mainmenu.page.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21haW5tZW51L0Q6XFxBcHBEZXZlbG9wbWVudFxcTWFudHJhQXBwXFxtYW50cmF0cmFpbmVyL3NyY1xcYXBwXFxsYXlvdXRcXG1haW5tZW51XFxtYWlubWVudS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQ0FBK0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tYWlubWVudS9tYWlubWVudS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlLWl0ZW0ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/layout/mainmenu/mainmenu.page.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/mainmenu/mainmenu.page.ts ***!
  \**************************************************/
/*! exports provided: MainmenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainmenuPage", function() { return MainmenuPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var MainmenuPage = /** @class */ (function () {
    function MainmenuPage(router) {
        var _this = this;
        this.router = router;
        this.pages = [
            {
                title: 'Dashboard',
                url: '/mainmenu/dashboard'
            },
            {
                title: 'Calorie Assingment',
                url: 'trainer/calorieassignment'
            },
        ];
        this.selectedPath = '';
        this.router.events.subscribe(function (event) {
            _this.selectedPath = event.url;
        });
    }
    MainmenuPage.prototype.ngOnInit = function () {
        // this.router.events.subscribe((event:RouterEvent) => {
        //   this.selectedPath = event.url;
        // });
    };
    MainmenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainmenu',
            template: __webpack_require__(/*! ./mainmenu.page.html */ "./src/app/layout/mainmenu/mainmenu.page.html"),
            styles: [__webpack_require__(/*! ./mainmenu.page.scss */ "./src/app/layout/mainmenu/mainmenu.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainmenuPage);
    return MainmenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=layout-mainmenu-mainmenu-module.js.map