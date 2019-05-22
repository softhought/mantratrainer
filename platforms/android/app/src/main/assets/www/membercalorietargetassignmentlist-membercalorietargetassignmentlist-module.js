(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["membercalorietargetassignmentlist-membercalorietargetassignmentlist-module"],{

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

module.exports = "<!-- <ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-toggle style=\"display:block !important;\">\n          <ion-button>\n            <ion-icon slot=\"icon-only\" name=\"menu\" (click)=\"toggleMenu()\" ></ion-icon>\n          </ion-button>\n        </ion-menu-toggle>\n      </ion-buttons>\n      <ion-title start>Header</ion-title>\n    </ion-toolbar>\n  </ion-header> -->\n\n  <ion-header>\n      <ion-toolbar>\n        <ion-buttons slot=\"start\">\n          <ion-back-button text=\"Back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title></ion-title>\n      </ion-toolbar>\n    \n  </ion-header>\n\n\n<ion-content no-padding>\n    <div id=\"calorieAssingmentPage\">\n    <ion-card *ngFor=\"let dummy of ' '.repeat(10).split(''), let x = index\" style=\"background:linear-gradient(rgba(255,49,12, 0.8), rgba(255,49,12,0.90)), url('https://image.freepik.com/free-vector/sport_48369-7051.jpg');  background-size: cover;\">\n\n        <!-- <ion-card-header>\n          <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n          <ion-card-title>Card Title</ion-card-title>\n        </ion-card-header> -->\n      \n        <ion-card-content>\n\n          <!-- <ion-item>\n              <ion-badge color=\"primary\">11</ion-badge>\n              <ion-badge color=\"secondary\">22</ion-badge>\n              <ion-badge color=\"tertiary\">33</ion-badge>\n              <ion-badge color=\"success\">44</ion-badge>\n              <ion-badge color=\"warning\">55</ion-badge>\n              <ion-badge color=\"danger\">66</ion-badge>\n              <ion-badge color=\"light\">77</ion-badge>\n              <ion-badge color=\"medium\">88</ion-badge>\n              <ion-badge color=\"dark\">99</ion-badge>\n          </ion-item> -->\n\n          <ion-row >\n            <ion-col size=\"3\">\n              <img src=\"https://www.mantrahealthzone.co.in/images/team_mantra/793940_234_5271avirup%20chowdhury.jpg\" />\n            </ion-col>\n            <ion-col size=\"9\">\n              <h4>MHCMYSC00000072</h4>\n              <h5>ADITYA DOLUI</h5>\n              <p>BP,GGC,Male</p>\n              <ion-item lines=\"none\">\n                  <ion-input type=\"text\" placeholder=\"Calorie Target\" ></ion-input>\n                  <ion-button>\n                      <ion-icon name=\"send\"></ion-icon>\n                  </ion-button>\n              </ion-item>\n\n              \n            </ion-col>\n\n          </ion-row>\n        </ion-card-content>\n      </ion-card>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#calorieAssingmentPage ion-card {\n  color: #FFF; }\n  #calorieAssingmentPage ion-card ion-card-content h4, #calorieAssingmentPage ion-card ion-card-content h5 {\n    letter-spacing: 1px;\n    padding-bottom: 2%;\n    font-weight: 700; }\n  #calorieAssingmentPage ion-card ion-card-content p {\n    font-size: 0.7rem;\n    font-weight: 700;\n    margin-right: 0;\n    margin-top: -8px;\n    margin-bottom: 13px;\n    font-size: 14px;\n    font-weight: 400;\n    line-height: 1.5; }\n  #calorieAssingmentPage ion-card ion-card-content img {\n    width: 75px;\n    height: 75px;\n    border-radius: 150px; }\n  #calorieAssingmentPage ion-card ion-card-content ion-item {\n    --padding-start: 0px !important;\n    --border-radius: 10px !important;\n    --padding: 0;\n    --background: #FFF;\n    border: 0px solid #f25315; }\n  #calorieAssingmentPage ion-card ion-card-content ion-item ion-input::shadow input {\n      color: var(--ion-color-primary);\n      text-indent: 15px; }\n  #calorieAssingmentPage ion-card ion-card-content ion-item ion-button {\n      --background: #f2460e; }\n  #calorieAssingmentPage ion-card ion-card-content ion-item.sc-ion-input-md-h:not(.item-label), #calorieAssingmentPage ion-card ion-card-content ion-item:not(.item-label) .sc-ion-input-md-h {\n    --padding-start: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbWJlcmNhbG9yaWV0YXJnZXRhc3NpZ25tZW50bGlzdC9EOlxcQXBwRGV2ZWxvcG1lbnRcXE1hbnRyYUFwcFxcbWFudHJhdHJhaW5lci9zcmNcXGFwcFxcbGF5b3V0XFxtZW1iZXJjYWxvcmlldGFyZ2V0YXNzaWdubWVudGxpc3RcXG1lbWJlcmNhbG9yaWV0YXJnZXRhc3NpZ25tZW50bGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxXQUFXLEVBQUE7RUFIbkI7SUFNZ0IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtFQVJoQztJQWNnQixpQkFBaUI7SUFDakIsZ0JBQWU7SUFHZixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQixFQUFBO0VBdkJoQztJQTRCYyxXQUFXO0lBQ1gsWUFBVztJQUNYLG9CQUFvQixFQUFBO0VBOUJsQztJQWtDZ0IsK0JBQWdCO0lBQ2hCLGdDQUFnQjtJQUNoQixZQUFVO0lBQ1Ysa0JBQWE7SUFDYix5QkFBeUIsRUFBQTtFQXRDekM7TUFtRG9CLCtCQUErQjtNQUMvQixpQkFBaUIsRUFBQTtFQXBEckM7TUF3RG9CLHFCQUFhLEVBQUE7RUF4RGpDO0lBK0RnQixxQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tZW1iZXJjYWxvcmlldGFyZ2V0YXNzaWdubWVudGxpc3QvbWVtYmVyY2Fsb3JpZXRhcmdldGFzc2lnbm1lbnRsaXN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjYWxvcmllQXNzaW5nbWVudFBhZ2V7XHJcblxyXG4gICAgaW9uLWNhcmQge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGlvbi1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICBoNCxoNXtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg1e1xyXG4gICAgICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjcwMDtcclxuXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAvLyAgd2lkdGg6IDcyJTtcclxuICAgICAgICAgICAgICAvLyAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6NzVweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwcHggc29saWQgI2YyNTMxNTtcclxuICAgICAgICAgICAgICAgLy8gYm94LXNoYWRvdzogMTNweCA3cHggMTFweCAwcHggI2E0MmIwMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBpb24taW5wdXR7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgLm5hdGl2ZS1pbnB1dHtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIC0tcGFkZGluZzogMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWlucHV0OjpzaGFkb3cgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1pbmRlbnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2YyNDYwZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pdGVtLnNjLWlvbi1pbnB1dC1tZC1oOm5vdCguaXRlbS1sYWJlbCksIGlvbi1pdGVtOm5vdCguaXRlbS1sYWJlbCkgLnNjLWlvbi1pbnB1dC1tZC1oIHtcclxuXHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDEycHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgfVxyXG59Il19 */"

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
//# sourceMappingURL=membercalorietargetassignmentlist-membercalorietargetassignmentlist-module.js.map