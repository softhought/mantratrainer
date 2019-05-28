(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["nonassignedmembertab-nonassignedmembertab-module"],{

/***/ "./src/app/layout/nonassignedmembertab/nonassignedmembertab.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/layout/nonassignedmembertab/nonassignedmembertab.module.ts ***!
  \****************************************************************************/
/*! exports provided: NonassignedmembertabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonassignedmembertabPageModule", function() { return NonassignedmembertabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _nonassignedmembertab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nonassignedmembertab.page */ "./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.ts");







var routes = [
    {
        path: '',
        component: _nonassignedmembertab_page__WEBPACK_IMPORTED_MODULE_6__["NonassignedmembertabPage"]
    }
];
var NonassignedmembertabPageModule = /** @class */ (function () {
    function NonassignedmembertabPageModule() {
    }
    NonassignedmembertabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_nonassignedmembertab_page__WEBPACK_IMPORTED_MODULE_6__["NonassignedmembertabPage"]]
        })
    ], NonassignedmembertabPageModule);
    return NonassignedmembertabPageModule;
}());



/***/ }),

/***/ "./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>nonassignedmembertab</ion-title>\r\n  </ion-toolbar>1\r\n</ion-header> -->\r\n\r\n<ion-content no-padding>\r\n\r\n    <ion-list *ngIf=\"isListDataAvailable\">\r\n          <ion-item *ngFor=\"let member of todaysMemberList ; let i=index\" (click)=\"goToMemberAssignment(member)\">\r\n            <ion-avatar slot=\"start\">\r\n              <img src=\"https://www.mantrahealthzone.co.in/images/team_mantra/793940_234_5271avirup%20chowdhury.jpg\">\r\n            </ion-avatar>\r\n            <ion-label>\r\n              <!-- <p>{{i+1}}</p> -->\r\n              <p>{{member.MEMBERSHIP_NO}}</p>\r\n              <p>{{member.CUS_NAME}}</p>\r\n            \r\n          \r\n            </ion-label>\r\n            <ion-icon name=\"add-circle\" slot=\"end\" style=\"color: #f84d39;\"></ion-icon>\r\n          </ion-item>\r\n    </ion-list>\r\n\r\n\r\n\r\n\r\n\r\n    <!-- Skeleton screen -->\r\n\r\n  <!-- Skeleton screen -->\r\n  <div *ngIf=\"!isListDataAvailable\">\r\n\r\n\r\n    <ion-list>\r\n   \r\n      <ion-item *ngFor=\"let dummy of ' '.repeat(10).split(''), let x = index\">\r\n        <ion-avatar slot=\"start\">\r\n          <ion-skeleton-text animated></ion-skeleton-text>\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>\r\n            <ion-skeleton-text animated=\"true\" style=\"width: 90%\"></ion-skeleton-text>\r\n          </h3>\r\n          <p>\r\n            <ion-skeleton-text animated=\"true\" style=\"width: 70%\"></ion-skeleton-text>\r\n          </p>\r\n          <p>\r\n            <ion-skeleton-text animated=\"true\" style=\"width: 30%\"></ion-skeleton-text>\r\n          </p>\r\n        </ion-label>\r\n      </ion-item>\r\n     \r\n      \r\n    </ion-list>\r\n  </div>\r\n  \r\n  \r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n        <ion-infinite-scroll-content\r\n          loadingSpinner=\"bubbles\"\r\n          loadingText=\"Loading more ...\">\r\n        </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n\r\n\r\n\r\n\r\n\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9ub25hc3NpZ25lZG1lbWJlcnRhYi9ub25hc3NpZ25lZG1lbWJlcnRhYi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.ts ***!
  \**************************************************************************/
/*! exports provided: NonassignedmembertabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonassignedmembertabPage", function() { return NonassignedmembertabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request-handler.service */ "./src/app/services/http-request-handler.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-share.service */ "./src/app/services/data-share.service.ts");






var NonassignedmembertabPage = /** @class */ (function () {
    function NonassignedmembertabPage(_httpReqHandler, navCtrl, toastController, router, _dataShareService) {
        this._httpReqHandler = _httpReqHandler;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.router = router;
        this._dataShareService = _dataShareService;
        this.page = 1;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
        this.todaysMemberList = [];
        this.serviceData = "";
        this.isListDataAvailable = false;
        this.serviceData = this._dataShareService.getSelectedExerciseDatas();
        console.log(this.serviceData);
        this.selectedBranch = this._dataShareService.getSelectedExerciseDatas().branchcode;
        console.log(this.selectedBranch);
    }
    NonassignedmembertabPage.prototype.ngOnInit = function () {
        this.getTodaysMemberList();
    };
    NonassignedmembertabPage.prototype.ionViewWillEnter = function () {
        this.getTodaysMemberList();
    };
    NonassignedmembertabPage.prototype.getTodaysMemberList = function () {
        var _this = this;
        var response;
        this._httpReqHandler.getTodaysMemberList(this.selectedBranch, this.page).then(function (data) {
            response = data;
            if (response.STATUS == 200 && response.STATUS_MSG == "SUCCESS") {
                _this.todaysMemberList = response.RESULT;
                if (_this.todaysMemberList.length > 0) {
                    _this.isListDataAvailable = true;
                }
                console.log("todaysMemberList List");
                console.log(_this.todaysMemberList);
                console.log("todaysMemberList List End");
            }
            else {
                _this.presentToastWithOptions('Some Problem.Please try again later...', 'bottom');
            }
        }, function (error) {
            console.log(error);
            console.log("Error on login");
        });
    };
    NonassignedmembertabPage.prototype.loadData = function (event) {
        var _this = this;
        this.page = this.page + 1;
        this.isListDataAvailable = false;
        setTimeout(function () {
            var response;
            _this._httpReqHandler.getTodaysMemberList(_this.selectedBranch, _this.page).then(function (data) {
                response = data;
                console.log(response.RESULT);
                console.log("Length is " + response.RESULT.length);
                //this.todaysMemberList.push(response.RESULT[0]);
                for (var i = 0; i < response.RESULT.length; i++) {
                    _this.todaysMemberList.push(response.RESULT[i]);
                }
                if (response.RESULT.length > 0) {
                    _this.isListDataAvailable = true;
                }
            }, function (error) {
                console.log(error);
                console.log("Error on fetching ");
            });
            event.target.complete();
        }, 1000);
    };
    NonassignedmembertabPage.prototype.goToMemberAssignment = function (member) {
        this._dataShareService.setSelectedMemberDatas(member);
        this.router.navigate(['/memberassignment-profile']);
    };
    NonassignedmembertabPage.prototype.presentToastWithOptions = function (msg, pos) {
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
    NonassignedmembertabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nonassignedmembertab',
            template: __webpack_require__(/*! ./nonassignedmembertab.page.html */ "./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.html"),
            styles: [__webpack_require__(/*! ./nonassignedmembertab.page.scss */ "./src/app/layout/nonassignedmembertab/nonassignedmembertab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__["DataShareService"]])
    ], NonassignedmembertabPage);
    return NonassignedmembertabPage;
}());



/***/ })

}]);
//# sourceMappingURL=nonassignedmembertab-nonassignedmembertab-module.js.map