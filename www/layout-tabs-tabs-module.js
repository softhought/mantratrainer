(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-tabs-tabs-module"],{

/***/ "./src/app/layout/tabs/tabs.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/tabs/tabs.module.ts ***!
  \********************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "./src/app/layout/tabs/tabs.page.ts");
/* harmony import */ var src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/directives.module */ "./src/app/directives/directives.module.ts");
/* harmony import */ var _tabs_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tabs.router.module */ "./src/app/layout/tabs/tabs.router.module.ts");









var routes = [
    {
        path: '',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"],
        children: [
            {
                path: 'tab1',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab1/tab1.module#Tab1PageModule'
                    }
                ]
            },
            {
                path: 'tab2',
                children: [
                    {
                        path: '',
                        loadChildren: '../tab2/tab2.module#Tab2PageModule'
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
var TabsPageModule = /** @class */ (function () {
    function TabsPageModule() {
    }
    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                src_app_directives_directives_module__WEBPACK_IMPORTED_MODULE_7__["DirectivesModule"],
                _tabs_router_module__WEBPACK_IMPORTED_MODULE_8__["TabsPageRoutingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
        })
    ], TabsPageModule);
    return TabsPageModule;
}());



/***/ }),

/***/ "./src/app/layout/tabs/tabs.page.html":
/*!********************************************!*\
  !*** ./src/app/layout/tabs/tabs.page.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>tabs</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n<ion-content>\n\n  <h1>Upper Div</h1>\n\n<ion-tabs appSwipetab (ionTabsDidChange)=\"ionTabsDidChange($event)\" (tabChange)=\"onTabChange($event)\" #myTabs>\n\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"flash\"></ion-icon>\n      <ion-label>Assigned Members</ion-label>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"apps\"></ion-icon>\n      <ion-label>Available Members</ion-label>\n    </ion-tab-button>\n\n    \n  </ion-tab-bar>\n\n</ion-tabs>\n\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/layout/tabs/tabs.page.scss":
/*!********************************************!*\
  !*** ./src/app/layout/tabs/tabs.page.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swipe-area {\n  height: 100%;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3RhYnMvRDpcXEFwcERldmVsb3BtZW50XFxNYW50cmFBcHBcXG1hbnRyYXRyYWluZXIvc3JjXFxhcHBcXGxheW91dFxcdGFic1xcdGFicy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3RhYnMvdGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpcGUtYXJlYSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/layout/tabs/tabs.page.ts":
/*!******************************************!*\
  !*** ./src/app/layout/tabs/tabs.page.ts ***!
  \******************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_directives_swipetab_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/swipetab.directive */ "./src/app/directives/swipetab.directive.ts");




var TabsPage = /** @class */ (function () {
    function TabsPage() {
    }
    TabsPage.prototype.ionTabsDidChange = function ($event) {
        console.log($event);
        console.log('[TabsPage] ionTabsDidChange, $event: ', $event);
        this.swipetabDirective.onTabInitialized($event.tab);
    };
    TabsPage.prototype.onTabChange = function ($event) {
        console.log("Tab Change Clicked");
        console.log('[TabsPage] onTabChange, $event: ', $event);
        this.tabRef.select($event);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(src_app_directives_swipetab_directive__WEBPACK_IMPORTED_MODULE_3__["SwipetabDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_directives_swipetab_directive__WEBPACK_IMPORTED_MODULE_3__["SwipetabDirective"])
    ], TabsPage.prototype, "swipetabDirective", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myTabs'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonTabs"])
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.page.html */ "./src/app/layout/tabs/tabs.page.html"),
            styles: [__webpack_require__(/*! ./tabs.page.scss */ "./src/app/layout/tabs/tabs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());



/***/ }),

/***/ "./src/app/layout/tabs/tabs.router.module.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/tabs/tabs.router.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



// const routes: Routes = [
//   {
//     path: 'tabs',
//     component: TabsPage,
//     children: [
//       {
//         path: 'tab1',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab1/tab1.module#Tab1PageModule'
//           }
//         ]
//       },
//       {
//         path: 'tab2',
//         children: [
//           {
//             path: '',
//             loadChildren: '../tab2/tab2.module#Tab2PageModule'
//           }
//         ]
//       }
//     ]
//   }
// ];
var routes = [];
var TabsPageRoutingModule = /** @class */ (function () {
    function TabsPageRoutingModule() {
    }
    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], TabsPageRoutingModule);
    return TabsPageRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=layout-tabs-tabs-module.js.map