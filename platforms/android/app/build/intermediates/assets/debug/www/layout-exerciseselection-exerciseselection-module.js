(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-exerciseselection-exerciseselection-module"],{

/***/ "./src/app/layout/exerciseselection/exerciseselection.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/exerciseselection/exerciseselection.module.ts ***!
  \**********************************************************************/
/*! exports provided: ExerciseselectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseselectionPageModule", function() { return ExerciseselectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _exerciseselection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./exerciseselection.page */ "./src/app/layout/exerciseselection/exerciseselection.page.ts");







var routes = [
    {
        path: '',
        component: _exerciseselection_page__WEBPACK_IMPORTED_MODULE_6__["ExerciseselectionPage"]
    }
];
var ExerciseselectionPageModule = /** @class */ (function () {
    function ExerciseselectionPageModule() {
    }
    ExerciseselectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_exerciseselection_page__WEBPACK_IMPORTED_MODULE_6__["ExerciseselectionPage"]]
        })
    ], ExerciseselectionPageModule);
    return ExerciseselectionPageModule;
}());



/***/ }),

/***/ "./src/app/layout/exerciseselection/exerciseselection.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/exerciseselection/exerciseselection.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-back-button text=\"Back\"></ion-back-button>\n      </ion-buttons>\n      <ion-title></ion-title>\n    </ion-toolbar>\n  \n</ion-header>\n  \n<ion-content no-padding>\n    <div id=\"exerciseSelectionPageContent\" >\n  \n  \n      <!-- <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Card Subtitle</ion-card-subtitle>\n            <ion-card-title>Card Title</ion-card-title>\n          </ion-card-header>\n        \n          <ion-card-content>\n            Keep close to Nature's heart... and break clear away, once in awhile,\n            and climb a mountain or spend a week in the woods. Wash your spirit clean.\n          </ion-card-content>\n        </ion-card> -->\n  \n  \n    <ion-list>\n        <ion-list-header id=\"exerciseHeader\">\n            <ion-label>Choose exercise</ion-label>\n          </ion-list-header>\n    </ion-list>\n  \n  \n  \n    <ion-list *ngIf=\"isListDataAvailable\">\n      <ion-radio-group>\n  \n  \n        <!-- <ion-list-header>\n          <ion-label><ion-icon name=\"play\"></ion-icon> Choose your branch</ion-label>\n        </ion-list-header> -->\n    \n        <ion-item *ngFor=\"let exercise of exerciseList\" (ionSelect)=\"getSelectedExercise($event)\" lines=\"none\"> \n          <ion-label>{{exercise.exercise_name}}</ion-label>\n          <ion-radio slot=\"start\" [value]=\"exercise.exercise_id\"></ion-radio>\n        </ion-item>\n    \n     \n      </ion-radio-group>\n    </ion-list>\n  \n   <!-- Skeleton screen -->\n   <div *ngIf=\"!isListDataAvailable\">\n    <ion-list>\n      <ion-item *ngFor=\"let dummy of ' '.repeat(10).split(''), let x = index\">\n        <ion-label>\n          <h3>\n            <ion-skeleton-text animated=\"true\" style=\"width: 90%\"></ion-skeleton-text>\n          </h3>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  \n  </div>\n  \n  </ion-content>\n  \n  \n  <ion-footer text-center id=\"exerciseSelectionPageFooter\">\n      <ion-button color=\"danger\" shape=\"round\" (click)=\"next()\" >Next <ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\n  </ion-footer>\n  "

/***/ }),

/***/ "./src/app/layout/exerciseselection/exerciseselection.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/exerciseselection/exerciseselection.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#exerciseSelectionPageContent #exerciseHeader {\n  background: #ffffff;\n  padding: 1% 20px;\n  color: #626262 !important;\n  margin-top: 0%; }\n  #exerciseSelectionPageContent #exerciseHeader ion-label {\n    font-size: 1rem; }\n  ion-footer#exerciseSelectionPageFooter {\n  padding: 2% 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2V4ZXJjaXNlc2VsZWN0aW9uL0Q6XFxBcHBEZXZlbG9wbWVudFxcTWFudHJhQXBwXFxtYW50cmF0cmFpbmVyL3NyY1xcYXBwXFxsYXlvdXRcXGV4ZXJjaXNlc2VsZWN0aW9uXFxleGVyY2lzZXNlbGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7RUFOdEI7SUFTbUIsZUFBZSxFQUFBO0VBS2xDO0VBRUksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2V4ZXJjaXNlc2VsZWN0aW9uL2V4ZXJjaXNlc2VsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNleGVyY2lzZVNlbGVjdGlvblBhZ2VDb250ZW50e1xyXG5cclxuICAgICNleGVyY2lzZUhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiAxJSAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjNjI2MjYyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG59XHJcbmlvbi1mb290ZXIjZXhlcmNpc2VTZWxlY3Rpb25QYWdlRm9vdGVye1xyXG4gICAgXHJcbiAgICBwYWRkaW5nOiAyJSAwO1xyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/layout/exerciseselection/exerciseselection.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/exerciseselection/exerciseselection.page.ts ***!
  \********************************************************************/
/*! exports provided: ExerciseselectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExerciseselectionPage", function() { return ExerciseselectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request-handler.service */ "./src/app/services/http-request-handler.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-share.service */ "./src/app/services/data-share.service.ts");






var ExerciseselectionPage = /** @class */ (function () {
    function ExerciseselectionPage(_httpReqHandler, navCtrl, toastController, router, _dataShareService) {
        this._httpReqHandler = _httpReqHandler;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.router = router;
        this._dataShareService = _dataShareService;
        this.exerciseList = [];
        this.isListDataAvailable = false;
        this.selectedbranch = this._dataShareService.getSelectedBranchDatas().branchcode;
    }
    ExerciseselectionPage.prototype.ngOnInit = function () {
        this.getExerciseList();
    };
    ExerciseselectionPage.prototype.getExerciseList = function () {
        var _this = this;
        var response;
        this._httpReqHandler.getExerciseList().then(function (data) {
            response = data;
            if (response.STATUS == 200 && response.STATUS_MSG == "SUCCESS") {
                _this.exerciseList = response.RESULT;
                if (_this.exerciseList.length > 0) {
                    _this.isListDataAvailable = true;
                }
            }
            else {
                _this.presentToastWithOptions('Some Problem.Please try again later...', 'bottom');
            }
        }, function (error) {
            console.log(error);
            console.log("Error on login");
        });
    };
    ExerciseselectionPage.prototype.getSelectedExercise = function (event) {
        this.selectedExercise = event.detail.value;
    };
    ExerciseselectionPage.prototype.next = function () {
        var obj = {
            branchcode: this.selectedbranch,
            exerciseID: this.selectedExercise
        };
        this._dataShareService.setSelectedExerciseDatas(obj);
        // this.router.navigate(['/member-machine-assignment'],{
        //   queryParams: object,
        //   });
        // this.router.navigate(['/tabs']);
        this.router.navigate(['/member-machine-assignment']);
        /*
        this.router.navigate(['/tabs'],{
          queryParams: object,
          });
        */
    };
    ExerciseselectionPage.prototype.presentToastWithOptions = function (msg, pos) {
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
    ExerciseselectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exerciseselection',
            template: __webpack_require__(/*! ./exerciseselection.page.html */ "./src/app/layout/exerciseselection/exerciseselection.page.html"),
            styles: [__webpack_require__(/*! ./exerciseselection.page.scss */ "./src/app/layout/exerciseselection/exerciseselection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__["DataShareService"]])
    ], ExerciseselectionPage);
    return ExerciseselectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=layout-exerciseselection-exerciseselection-module.js.map