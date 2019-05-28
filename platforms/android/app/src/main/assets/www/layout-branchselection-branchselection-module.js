(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-branchselection-branchselection-module"],{

/***/ "./src/app/layout/branchselection/branchselection.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/layout/branchselection/branchselection.module.ts ***!
  \******************************************************************/
/*! exports provided: BranchselectionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchselectionPageModule", function() { return BranchselectionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _branchselection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branchselection.page */ "./src/app/layout/branchselection/branchselection.page.ts");







var routes = [
    {
        path: '',
        component: _branchselection_page__WEBPACK_IMPORTED_MODULE_6__["BranchselectionPage"]
    }
];
var BranchselectionPageModule = /** @class */ (function () {
    function BranchselectionPageModule() {
    }
    BranchselectionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_branchselection_page__WEBPACK_IMPORTED_MODULE_6__["BranchselectionPage"]]
        })
    ], BranchselectionPageModule);
    return BranchselectionPageModule;
}());



/***/ }),

/***/ "./src/app/layout/branchselection/branchselection.page.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/branchselection/branchselection.page.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <!-- <ion-toolbar>\r\n    <ion-title>branchselection</ion-title>\r\n  </ion-toolbar> -->\r\n\r\n\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button text=\"Back\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>\r\n      \r\n    </ion-title>\r\n  </ion-toolbar>\r\n\r\n</ion-header>\r\n\r\n<ion-content no-padding>\r\n  <div id=\"branchselectionPageContent\" >\r\n\r\n\r\n\r\n  <ion-list >\r\n      <ion-list-header id=\"branchHeader\">\r\n          <ion-label>Choose your branch</ion-label>\r\n        </ion-list-header>\r\n  </ion-list>\r\n\r\n\r\n\r\n  <ion-list *ngIf=\"isListDataAvailable\">\r\n    <ion-radio-group>\r\n\r\n      <ion-item *ngFor=\"let branchlist of allBranchList\" (ionSelect)=\"getSelectedBranch($event)\" lines=\"none\"> \r\n        <ion-label>{{branchlist.BRANCH_NAME}}</ion-label>\r\n        <ion-radio slot=\"start\" [value]=\"branchlist.BRANCH_CODE\"></ion-radio>\r\n      </ion-item>\r\n  \r\n   \r\n    </ion-radio-group>\r\n  </ion-list>\r\n\r\n    <!-- Skeleton screen -->\r\n    <div *ngIf=\"!isListDataAvailable\">\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let dummy of ' '.repeat(10).split(''), let x = index\">\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated=\"true\" style=\"width: 90%\"></ion-skeleton-text>\r\n            </h3>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </div>\r\n    \r\n\r\n\r\n\r\n</div>\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-footer text-center id=\"branchselectionPageFooter\">\r\n    <ion-button color=\"danger\" shape=\"round\" (click)=\"next()\" >Next <ion-icon name=\"arrow-forward\"></ion-icon></ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/app/layout/branchselection/branchselection.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/branchselection/branchselection.page.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#branchselectionPageContent #branchHeader {\n  background: #ffffff;\n  padding: 1% 20px;\n  color: #626262 !important;\n  margin-top: 0%; }\n  #branchselectionPageContent #branchHeader ion-label {\n    font-size: 1rem; }\n  ion-footer#branchselectionPageFooter {\n  padding: 2% 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2JyYW5jaHNlbGVjdGlvbi9EOlxcQXBwRGV2ZWxvcG1lbnRcXE1hbnRyYUFwcFxcbWFudHJhdHJhaW5lci9zcmNcXGFwcFxcbGF5b3V0XFxicmFuY2hzZWxlY3Rpb25cXGJyYW5jaHNlbGVjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFHZ0IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsY0FBYyxFQUFBO0VBTjlCO0lBU21CLGVBQWUsRUFBQTtFQUtsQztFQUVRLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9icmFuY2hzZWxlY3Rpb24vYnJhbmNoc2VsZWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi1jb250ZW50I2JyYW5jaHNlbGVjdGlvblBhZ2VDb250ZW50e1xyXG4gICBcclxuLy8gICAgLS1iYWNrZ3JvdW5kLWltYWdlIDogdXJsKCdhc3NldHMvbGF5b3V0L2JyYW5jaF9zZWxfYmcuanBnJykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XHJcbi8vIH1cclxuXHJcbiNicmFuY2hzZWxlY3Rpb25QYWdlQ29udGVudCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgI2JyYW5jaEhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMSUgMjBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjI2MjYyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxufVxyXG5cclxuaW9uLWZvb3RlciNicmFuY2hzZWxlY3Rpb25QYWdlRm9vdGVye1xyXG4gICAgXHJcbiAgICAgICAgcGFkZGluZzogMiUgMDtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/layout/branchselection/branchselection.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/branchselection/branchselection.page.ts ***!
  \****************************************************************/
/*! exports provided: BranchselectionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchselectionPage", function() { return BranchselectionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request-handler.service */ "./src/app/services/http-request-handler.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-share.service */ "./src/app/services/data-share.service.ts");






var BranchselectionPage = /** @class */ (function () {
    function BranchselectionPage(_httpReqHandler, navCtrl, toastController, router, _dataShareService) {
        this._httpReqHandler = _httpReqHandler;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.router = router;
        this._dataShareService = _dataShareService;
        this.allBranchList = [];
        this.selectedBranch = null;
        this.isListDataAvailable = false;
    }
    BranchselectionPage.prototype.ngOnInit = function () {
        this.getBranchList();
    };
    BranchselectionPage.prototype.getBranchList = function () {
        var _this = this;
        var response;
        this._httpReqHandler.getAllBranchList().then(function (data) {
            response = data;
            if (response.STATUS == 200 && response.STATUS_MSG == "SUCCESS") {
                _this.allBranchList = response.RESULT;
                if (_this.allBranchList.length > 0) {
                    _this.isListDataAvailable = true;
                }
            }
            else {
                _this.presentToastWithOptions('Some Problem.Please try again later...', 'bottom');
            }
        }, function (error) {
            console.log(error);
            console.log("Error on branch list");
        });
    };
    BranchselectionPage.prototype.getSelectedBranch = function (event) {
        this.selectedBranch = event.detail.value;
    };
    BranchselectionPage.prototype.next = function () {
        var branchObj = {
            branchcode: this.selectedBranch
        };
        this._dataShareService.setSelectedBranchDatas(branchObj);
        this.router.navigate(['/choose-exercise']);
        // this.router.navigate(['/member-machine-assignment'],{
        //   queryParams: object,
        //   });
        // this.router.navigate(['/tabs']);
        // this.router.navigate(['/member-machine-assignment']);
        /*
        this.router.navigate(['/tabs'],{
          queryParams: object,
          });
        */
    };
    BranchselectionPage.prototype.presentToastWithOptions = function (msg, pos) {
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
    BranchselectionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-branchselection',
            template: __webpack_require__(/*! ./branchselection.page.html */ "./src/app/layout/branchselection/branchselection.page.html"),
            styles: [__webpack_require__(/*! ./branchselection.page.scss */ "./src/app/layout/branchselection/branchselection.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__["DataShareService"]])
    ], BranchselectionPage);
    return BranchselectionPage;
}());



/***/ })

}]);
//# sourceMappingURL=layout-branchselection-branchselection-module.js.map