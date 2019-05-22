(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assignedmembertab-assignedmembertab-module"],{

/***/ "./src/app/layout/assignedmembertab/assignedmembertab.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/layout/assignedmembertab/assignedmembertab.module.ts ***!
  \**********************************************************************/
/*! exports provided: AssignedmembertabPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedmembertabPageModule", function() { return AssignedmembertabPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _assignedmembertab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assignedmembertab.page */ "./src/app/layout/assignedmembertab/assignedmembertab.page.ts");







var routes = [
    {
        path: '',
        component: _assignedmembertab_page__WEBPACK_IMPORTED_MODULE_6__["AssignedmembertabPage"]
    }
];
var AssignedmembertabPageModule = /** @class */ (function () {
    function AssignedmembertabPageModule() {
    }
    AssignedmembertabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_assignedmembertab_page__WEBPACK_IMPORTED_MODULE_6__["AssignedmembertabPage"]]
        })
    ], AssignedmembertabPageModule);
    return AssignedmembertabPageModule;
}());



/***/ }),

/***/ "./src/app/layout/assignedmembertab/assignedmembertab.page.html":
/*!**********************************************************************!*\
  !*** ./src/app/layout/assignedmembertab/assignedmembertab.page.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>assignedmembertab</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content no-padding id=\"assignedMemberTabPage\">\n\n  <ion-list  *ngIf=\"isListDataAvailable\">\n        <ion-item *ngFor=\"let member of todaysAssignedMemberList ; let i=index\" (click)=\"goToMemberAssignment(member)\">\n          <ion-avatar slot=\"start\">\n            <img src=\"https://www.mantrahealthzone.co.in/images/team_mantra/793940_234_5271avirup%20chowdhury.jpg\">\n          </ion-avatar>\n          <ion-label>\n            <!-- <p>{{i+1}}</p> -->\n            \n            <p><ion-icon name=\"card\"></ion-icon> {{member.MEMBERSHIP_NO}}</p>\n            <p><ion-icon name=\"person\"></ion-icon> {{member.CUS_NAME}}</p>\n\n            <!-- <p>{{member.timer}} {{hourText}} {{minText}} {{secText}}</p> -->\n           <p><ion-icon name=\"timer\"></ion-icon>&nbsp;\n            <span class=\"hourTxt\" id=\"timerDisplayHr_{{i}}\"></span>\n            <span  id=\"timerDisplayHrDot_{{i}}\">:</span>\n            <span class=\"minTxt\" id=\"timerDisplayMin_{{i}}\"></span>\n            <span  id=\"timerDisplayMinDot_{{i}}\">:</span>\n            <span class=\"rTxt\" id=\"timerDisplaySec_{{i}}\"></span>\n          </p>\n           <!-- <p id=\"timerDisplay\"></p> -->\n          </ion-label>\n          <ion-icon name=\"square\" slot=\"end\" class=\"stopicon\"></ion-icon>\n        </ion-item>\n\n    \n\n  </ion-list>\n\n\n\n  <!-- Skeleton screen -->\n<div *ngIf=\"!isListDataAvailable\">\n\n\n  <ion-list>\n \n    <ion-item *ngFor=\"let dummy of ' '.repeat(10).split(''), let x = index\">\n      <ion-avatar slot=\"start\">\n        <ion-skeleton-text animated class=\"text-shell\"></ion-skeleton-text>\n      </ion-avatar>\n      <ion-label>\n        <h3>\n          <ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 90%\"></ion-skeleton-text>\n        </h3>\n        <p>\n          <ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 70%\"></ion-skeleton-text>\n        </p>\n        <p>\n          <ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 30%\"></ion-skeleton-text>\n        </p>\n      </ion-label>\n    </ion-item>\n\n    \n  </ion-list>\n</div>\n\n\n\n\n\n\n\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n      <ion-infinite-scroll-content\n        loadingSpinner=\"bubbles\"\n        loadingText=\"Loading more ...\">\n      </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n\n\n\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/layout/assignedmembertab/assignedmembertab.page.scss":
/*!**********************************************************************!*\
  !*** ./src/app/layout/assignedmembertab/assignedmembertab.page.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#assignedMemberTabPage .stopicon {\n  background: #f03415;\n  color: #FFAEA1;\n  border-radius: 5px;\n  padding: 2px;\n  border: 0;\n  font-size: 0.95rem; }\n\n#assignedMemberTabPage .custom-skeleton ion-skeleton-text {\n  line-height: 13px; }\n\n#assignedMemberTabPage .custom-skeleton ion-skeleton-text:last-child {\n  margin-bottom: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Fzc2lnbmVkbWVtYmVydGFiL0Q6XFxBcHBEZXZlbG9wbWVudFxcTWFudHJhQXBwXFxtYW50cmF0cmFpbmVyL3NyY1xcYXBwXFxsYXlvdXRcXGFzc2lnbmVkbWVtYmVydGFiXFxhc3NpZ25lZG1lbWJlcnRhYi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHUSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULGtCQUFrQixFQUFBOztBQVIxQjtFQVlRLGlCQUFpQixFQUFBOztBQVp6QjtFQWdCUSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hc3NpZ25lZG1lbWJlcnRhYi9hc3NpZ25lZG1lbWJlcnRhYi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjYXNzaWduZWRNZW1iZXJUYWJQYWdle1xyXG5cclxuICAgIC5zdG9waWNvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZjAzNDE1O1xyXG4gICAgICAgIGNvbG9yOiAjRkZBRUExO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmN1c3RvbS1za2VsZXRvbiBpb24tc2tlbGV0b24tdGV4dCB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEzcHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC5jdXN0b20tc2tlbGV0b24gaW9uLXNrZWxldG9uLXRleHQ6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB9XHJcblxyXG5cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/assignedmembertab/assignedmembertab.page.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/assignedmembertab/assignedmembertab.page.ts ***!
  \********************************************************************/
/*! exports provided: AssignedmembertabPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignedmembertabPage", function() { return AssignedmembertabPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request-handler.service */ "./src/app/services/http-request-handler.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data-share.service */ "./src/app/services/data-share.service.ts");






var AssignedmembertabPage = /** @class */ (function () {
    function AssignedmembertabPage(_httpReqHandler, navCtrl, toastController, router, _dataShareService) {
        this._httpReqHandler = _httpReqHandler;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.router = router;
        this._dataShareService = _dataShareService;
        this.page = 1;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
        this.serviceData = "";
        this.todaysAssignedMemberList = [];
        this.countdownArry = [0];
        this.timerCountDown = [];
        this.dynamicIntervalName = [];
        this.setIntervalIDs = [];
        this.totalNoOfIntervels = 0;
        this.isListDataAvailable = false;
        this.noOfRecords = 0;
        this.serviceData = this._dataShareService.getSelectedExerciseDatas();
        console.log(this.serviceData);
        this.selectedBranch = this._dataShareService.getSelectedExerciseDatas().branchcode;
        console.log(this.selectedBranch);
    }
    /*
    ngOnInit() {
      this.getTodaysAssignedMemberList();
    }
    */
    AssignedmembertabPage.prototype.ngOnDestroy = function () {
        console.log("ON DESTROY");
        this.removeAllIntervels();
    };
    AssignedmembertabPage.prototype.ngOnInit = function () {
        console.log("View Assign Enter");
    };
    AssignedmembertabPage.prototype.ionViewWillLeave = function () {
        this.removeAllIntervels();
    };
    AssignedmembertabPage.prototype.ionViewWillEnter = function () {
        // this.removeAllIntervels();
        var _this = this;
        var response;
        this._httpReqHandler.getTodaysAssignedMemberList(this.selectedBranch, this.page).then(function (data) {
            response = data;
            if (response.STATUS == 200 && response.STATUS_MSG == "SUCCESS") {
                var assignedMemberList = response.RESULT;
                //this.todaysAssignedMemberList = response.RESULT;
                console.log("todaysMemberList List");
                console.log(_this.todaysAssignedMemberList);
                console.log("todaysMemberList List End");
                var nonassignedMemberCount = Object.keys(assignedMemberList).length;
                var nonAssignedMemberObj = void 0;
                var coundownObj = void 0;
                for (var i = 0; i < nonassignedMemberCount; i++) {
                    // clearInterval(this.noOfRecords);
                    // (document.querySelector('#timerDisplay_'+i) as HTMLElement).innerText = "";
                    _this.showTimer(assignedMemberList[i].diffHour, assignedMemberList[i].diffMinute, assignedMemberList[i].diffSec, _this.noOfRecords, _this.noOfRecords);
                    /*
                    nonAssignedMemberObj = {
                       "MEMBERSHIP_NO" : assignedMemberList[i].MEMBERSHIP_NO,
                       "CUS_NAME" :  assignedMemberList[i].CUS_NAME,
                       "assignedID" : assignedMemberList[i].assignedID,
                       "startTime" : assignedMemberList[i].startTime,
                       "startHr" : assignedMemberList[i].startHr,
                       "startMin" : assignedMemberList[i].startMin,
                       "startSec" : assignedMemberList[i].startSec,
                       "diffHour" : assignedMemberList[i].diffHour,
                       "diffMinute" : assignedMemberList[i].diffMinute,
                       "diffSec" : assignedMemberList[i].diffSec,
                       "time_diff" : assignedMemberList[i].time_diff,
                       // "timer" :  this.showTimer(assignedMemberList[i].diffHour,assignedMemberList[i].diffMinute,assignedMemberList[i].diffSec,"dynamicIntervalTimer"+i,i),
                      
                     }
                     */
                    //this.todaysAssignedMemberList.push(nonAssignedMemberObj);
                    _this.noOfRecords = _this.noOfRecords + 1;
                }
                _this.todaysAssignedMemberList = response.RESULT;
                if (_this.todaysAssignedMemberList.length > 0) {
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
    // routerOnDeactivate(){
    //   this.removeAllIntervels();
    // }
    AssignedmembertabPage.prototype.loadData = function (event) {
        var _this = this;
        this.isListDataAvailable = false;
        this.page = this.page + 1;
        setTimeout(function () {
            var response;
            _this._httpReqHandler.getTodaysAssignedMemberList(_this.selectedBranch, _this.page).then(function (data) {
                response = data;
                var assignedMemberList = response.RESULT;
                var nonassignedMemberCount = Object.keys(assignedMemberList).length;
                for (var i = 0; i < nonassignedMemberCount; i++) {
                    //  clearInterval(this.noOfRecords)
                    _this.showTimer(assignedMemberList[i].diffHour, assignedMemberList[i].diffMinute, assignedMemberList[i].diffSec, _this.noOfRecords, _this.noOfRecords);
                    _this.todaysAssignedMemberList.push(response.RESULT[i]);
                    _this.noOfRecords = _this.noOfRecords + 1;
                }
                if (nonassignedMemberCount > 0) {
                    _this.isListDataAvailable = true;
                }
            }, function (error) {
                console.log(error);
                console.log("Error on fetching ");
            });
            event.target.complete();
        }, 1000);
    };
    // ionViewWillLeave(){
    //   console.log("View Leave");
    //   this.removeAllIntervels();
    // }
    AssignedmembertabPage.prototype.goToMemberAssignment = function (member) {
        this._dataShareService.setSelectedMemberDatas(member);
        this.router.navigate(['/memberassignment-profile']);
    };
    AssignedmembertabPage.prototype.showTimer = function (Hour, Minute, Sec, dynamicinterval, i) {
        var _this = this;
        //(document.querySelector('#timerDisplay_'+i) as HTMLElement).innerText ="";
        // let dynamicCountIntervel = ;
        var time;
        var secondCount = 0;
        var minute = 0;
        var hour = 0;
        secondCount = parseInt(Sec);
        minute = parseInt(Minute);
        hour = parseInt(Hour);
        this.setIntervalIDs.push(dynamicinterval);
        this.dynamicIntervalName['i' + i] = setInterval(function () {
            secondCount++;
            if (secondCount == 60) {
                secondCount = 0;
                minute = minute + 1;
            }
            if (minute == 60) {
                minute = 0;
                hour = hour + 1;
            }
            document.querySelector('#timerDisplayHr_' + i).innerText = _this.getCounterPrefix(hour);
            document.querySelector('#timerDisplayMin_' + i).innerText = _this.getCounterPrefix(minute);
            document.querySelector('#timerDisplaySec_' + i).innerText = _this.getCounterPrefix(secondCount);
            //(document.querySelector('#timerDisplay') as HTMLElement).innerText = this.getCounterPrefix(hour) + ":" + this.getCounterPrefix(minute) + ":" + this.getCounterPrefix(secondCount);
        }, 1000);
        this.totalNoOfIntervels = this.totalNoOfIntervels + 1;
    };
    AssignedmembertabPage.prototype.getCounterPrefix = function (val) {
        if (val <= 9) {
            return "0" + val;
        }
        return val;
    };
    AssignedmembertabPage.prototype.removeAllIntervels = function () {
        console.log(this.totalNoOfIntervels);
        //let countValue = this.dynamicIntervalName;
        //console.log("Length is abcderf "+countValue);
        for (var m = 0; m < this.totalNoOfIntervels; m++) {
            console.log("clear Intervels no is " + this.setIntervalIDs[m]);
            clearInterval(this.dynamicIntervalName['i' + m]);
        }
        this.noOfRecords = 0;
        this.page = 1;
    };
    AssignedmembertabPage.prototype.presentToastWithOptions = function (msg, pos) {
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
    AssignedmembertabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-assignedmembertab',
            template: __webpack_require__(/*! ./assignedmembertab.page.html */ "./src/app/layout/assignedmembertab/assignedmembertab.page.html"),
            styles: [__webpack_require__(/*! ./assignedmembertab.page.scss */ "./src/app/layout/assignedmembertab/assignedmembertab.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_5__["DataShareService"]])
    ], AssignedmembertabPage);
    return AssignedmembertabPage;
}());



/***/ })

}]);
//# sourceMappingURL=assignedmembertab-assignedmembertab-module.js.map