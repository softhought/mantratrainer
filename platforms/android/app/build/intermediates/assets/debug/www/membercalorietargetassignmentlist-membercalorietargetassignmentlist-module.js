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
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
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

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-toggle>\r\n        <ion-button>\r\n            <ion-icon name=\"menu\"></ion-icon>\r\n            <!-- <ion-img src=\"assets/layout/menu.svg\"></ion-img> -->\r\n        </ion-button>\r\n      </ion-menu-toggle>\r\n    </ion-buttons>\r\n</ion-toolbar>\r\n</ion-header>\r\n\r\n\r\n\r\n<ion-content no-padding>\r\n    <div id=\"calorieAssingmentPage\">\r\n\r\n    <div *ngIf=\"isDataAvailable\">\r\n    <ion-card [@slideInOut] *ngFor=\"let memberlist of weeklyNotAssignedTargetsMemberList ; let x = index\" style=\"background:linear-gradient(rgba(255,49,12, 0.8), rgba(255,49,12,0.90)), url('https://image.freepik.com/free-vector/sport_48369-7051.jpg');  background-size: cover;\">\r\n        <form [formGroup]=\"calorieAssingmentFormGroup\" \r\n        (ngSubmit)=\"submitForm(calorieAssingmentFormGroup.value,memberlist,x)\" class=\"text-left note\" id=\"f_{{x}}\">\r\n        <ion-card-content>\r\n          <ion-row >\r\n            <ion-col size=\"3\">\r\n              <img src=\"https://www.mantrahealthzone.co.in/images/team_mantra/793940_234_5271avirup%20chowdhury.jpg\" />\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <h4>{{memberlist.MEMBERSHIP_NO}}</h4>\r\n              <h5>{{memberlist.CUS_NAME}}</h5>\r\n              <p>{{memberlist.CUS_BRANCH}},{{memberlist.CUS_CARD}},{{memberlist.CUS_SEX}}</p>\r\n              <ion-item lines=\"none\">\r\n                  <ion-input type=\"text\" formControlName=\"calorieValue\" placeholder=\"Calorie Target\" ></ion-input>\r\n\r\n                  <ion-button type=\"submit\" id=\"calorieTargetSendBtn_{{x}}\">\r\n                      <ion-icon name=\"send\"></ion-icon>\r\n                  </ion-button>\r\n\r\n                  <ion-button type=\"button\" id=\"calorieTargetLoaderBtn_{{x}}\" style=\"display:none;\">\r\n                    <ion-spinner name=\"bubbles\"></ion-spinner>\r\n                  </ion-button>\r\n              </ion-item>\r\n\r\n              \r\n            </ion-col>\r\n\r\n          </ion-row>\r\n       \r\n        </ion-card-content>\r\n      </form>\r\n      </ion-card>\r\n    </div>\r\n\r\n\r\n\r\n   \r\n      <!-- SKELTON lOADER -->\r\n      <div *ngIf=\"!isDataAvailable\">\r\n      <ion-card  *ngFor=\"let dummy of ' '.repeat(10).split(''), let x = index\" >\r\n        <ion-card-content>\r\n          <ion-row >\r\n            <ion-col size=\"3\">\r\n              <ion-skeleton-text animated class=\"text-shell\"></ion-skeleton-text>\r\n            </ion-col>\r\n            <ion-col size=\"9\">\r\n              <h4><ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 60%\"></ion-skeleton-text></h4>\r\n              <h5><ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 75%\"></ion-skeleton-text></h5>\r\n              <p>   <ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 20%\"></ion-skeleton-text>,   <ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 20%\"></ion-skeleton-text>,<ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 30%\"></ion-skeleton-text></p>\r\n\r\n              <ion-item lines=\"none\">\r\n                <ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 80%\"></ion-skeleton-text>\r\n                <ion-skeleton-text animated=\"true\" class=\"text-shell gradient-animation\" style=\"width: 10%\"></ion-skeleton-text>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card-content>\r\n     </ion-card>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading more ...\">\r\n      </ion-infinite-scroll-content>\r\n   </ion-infinite-scroll>\r\n\r\n\r\n</ion-content>\r\n"

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
/* harmony import */ var src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request-handler.service */ "./src/app/services/http-request-handler.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");






var MembercalorietargetassignmentlistPage = /** @class */ (function () {
    function MembercalorietargetassignmentlistPage(_httpRequestHandlerService, toastController, fb) {
        this._httpRequestHandlerService = _httpRequestHandlerService;
        this.toastController = toastController;
        this.weeklyNotAssignedTargetsMemberList = [];
        this.page = 1;
        this.perPage = 0;
        this.totalData = 0;
        this.totalPage = 0;
        this.isDataAvailable = false;
        this.calorieAssingmentFormGroup = fb.group({
            'calorieValue': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])],
        });
    }
    MembercalorietargetassignmentlistPage.prototype.ngOnInit = function () {
        this.getWeeklyNotAssignedTargetsMemberList();
    };
    MembercalorietargetassignmentlistPage.prototype.getWeeklyNotAssignedTargetsMemberList = function () {
        var _this = this;
        var response;
        this._httpRequestHandlerService.getWeeklyNotAssignedTargetsMemberList("CALORIE", this.page).then(function (data) {
            response = data;
            if (response.STATUS == 200 && response.STATUS_MSG == "SUCCESS") {
                var weeklyNotAssignedTargetsMember = response.RESULT;
                _this.weeklyNotAssignedTargetsMemberList = response.RESULT;
                if (_this.weeklyNotAssignedTargetsMemberList.length > 0) {
                    _this.isDataAvailable = true;
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
    MembercalorietargetassignmentlistPage.prototype.submitForm = function (value, memberObj, srl) {
        var _this = this;
        console.log(value);
        console.log(memberObj);
        document.querySelector('#calorieTargetSendBtn_' + srl).style.display = 'none';
        document.querySelector('#calorieTargetLoaderBtn_' + srl).style.display = 'block';
        var formData = {
            'calorie_target_value': value,
            'membership_no': memberObj.MEMBERSHIP_NO,
            'member_id': memberObj.CUS_ID,
            'member_card': memberObj.CUS_CARD,
            'member_branch': memberObj.CUS_BRANCH
        };
        var response;
        this._httpRequestHandlerService.assignMemberCalorieTarget(formData).then(function (data) {
            if (data.STATUS == 200 && data.STATUS_MSG == "SUCCESS") {
                response = data.RESULT;
                // this.router.navigate(['/member-machine-assignment']);
                document.querySelector('#calorieTargetSendBtn_' + srl).style.display = 'block';
                document.querySelector('#calorieTargetLoaderBtn_' + srl).style.display = 'none';
                _this.weeklyNotAssignedTargetsMemberList.splice(srl, 1);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MembercalorietargetassignmentlistPage.prototype.loadData = function (event) {
        var _this = this;
        this.isDataAvailable = true;
        this.page = this.page + 1;
        setTimeout(function () {
            var response;
            _this._httpRequestHandlerService.getWeeklyNotAssignedTargetsMemberList("CALORIE", _this.page).then(function (data) {
                response = data;
                var weeklyNotAssignedTargetsMember = response.RESULT;
                var count = Object.keys(weeklyNotAssignedTargetsMember).length;
                for (var i = 0; i < count; i++) {
                    _this.weeklyNotAssignedTargetsMemberList.push(response.RESULT[i]);
                }
                if (count > 0) {
                    _this.isDataAvailable = true;
                }
            }, function (error) {
                console.log(error);
                console.log("Error on fetching ");
            });
            event.target.complete();
        }, 1000);
    };
    MembercalorietargetassignmentlistPage.prototype.presentToastWithOptions = function (msg, pos) {
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
    MembercalorietargetassignmentlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-membercalorietargetassignmentlist',
            template: __webpack_require__(/*! ./membercalorietargetassignmentlist.page.html */ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('slideInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':enter', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-100%)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(0%)' }))
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])(':leave', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('200ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ transform: 'translateY(-100%)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./membercalorietargetassignmentlist.page.scss */ "./src/app/layout/membercalorietargetassignmentlist/membercalorietargetassignmentlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestHandlerService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], MembercalorietargetassignmentlistPage);
    return MembercalorietargetassignmentlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=membercalorietargetassignmentlist-membercalorietargetassignmentlist-module.js.map