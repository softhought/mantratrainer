(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-member_detail_assingment_layout-memberassignment-profile-memberassignment-profile-module"],{

/***/ "./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.module.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.module.ts ***!
  \********************************************************************************************************************/
/*! exports provided: MemberassignmentProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberassignmentProfilePageModule", function() { return MemberassignmentProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _memberassignment_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memberassignment-profile.page */ "./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.ts");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");








var routes = [
    {
        path: '',
        component: _memberassignment_profile_page__WEBPACK_IMPORTED_MODULE_6__["MemberassignmentProfilePage"]
    }
];
var MemberassignmentProfilePageModule = /** @class */ (function () {
    function MemberassignmentProfilePageModule() {
    }
    MemberassignmentProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_memberassignment_profile_page__WEBPACK_IMPORTED_MODULE_6__["MemberassignmentProfilePage"]]
        })
    ], MemberassignmentProfilePageModule);
    return MemberassignmentProfilePageModule;
}());



/***/ }),

/***/ "./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.html":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button text=\"Back\"></ion-back-button>\n    </ion-buttons>\n    <ion-title></ion-title>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content no-padding >\n\n<div id=\"memberAssignmentProfilePage\">\n\n\n  <ion-grid id=\"memberProfileBlock\" style=\"background:linear-gradient(rgba(255,49,12, 0.9), rgba(255,49,12,0.9)), url('https://image.freepik.com/free-vector/wireframe-background_23-2148051517.jpg');  background-size: cover;\">\n\n    <ion-row id=\"profileImg\">\n      <ion-col>\n          <!-- <ion-icon name=\"create\"></ion-icon> -->\n          <img src=\"https://www.mantrahealthzone.co.in/images/team_mantra/793940_234_5271avirup%20chowdhury.jpg\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row id=\"memberDesc\">\n      <ion-col>\n          <ion-row>\n            <ion-col id=\"membername\">{{memberName}}</ion-col>\n          </ion-row>  \n\n          <ion-row>\n              <ion-col>\n                  <ion-icon name=\"phone-portrait\"></ion-icon> {{memberMobile}}  <ion-icon name=\"person\"></ion-icon> {{membershipNO}}\n              </ion-col>\n          </ion-row>  \n\n          <!-- <ion-row>  \n              <ion-col>\n                  <ion-icon name=\"person\"></ion-icon> MHCMGRC00000159\n              </ion-col>\n          </ion-row>    -->\n\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row id=\"memberHighlightDesc\">\n      <ion-col>\n          <ion-chip>\n            \n              <ion-icon name=\"male\"></ion-icon>\n              <ion-label *ngIf=\" memberGender == 'M' \">Male</ion-label>\n              <ion-label *ngIf=\" memberGender == 'F' \">Female</ion-label>\n             \n            </ion-chip>\n      </ion-col>\n      <ion-col>\n          <ion-chip>\n              <ion-icon name=\"wallet\"></ion-icon>\n              <ion-label>{{memberPackageCode}}</ion-label>\n             \n            </ion-chip>\n      </ion-col>\n      <ion-col>\n          <ion-chip>\n              <ion-icon name=\"logo-steam\"></ion-icon>\n              <ion-label>{{selectedBranch}}</ion-label>\n             \n            </ion-chip>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <!-- Machine Assignment Block Start formControlName=\"vehicleCtrl\" \n  <ion-grid id=\"memberMachineAssignmentBlock\">\n\n\n    <ion-row>\n      <ion-col>\n        <ion-card>\n          <ion-item>\n     \n            <ion-label>Cardio Exercise</ion-label>\n           \n          </ion-item>\n        \n          <ion-card-content>\n           <ion-item class=\"customeSearchable\">\n              <ion-label>Choose Machine</ion-label>\n              <ionic-selectable\n                item-content\n                itemValueField=\"machine_id\"\n                itemTextField=\"machine_name\"\n                [items]=\"machineFilteredList\"\n                [canSearch]=\"true\"\n                [canClear]=\"true\"\n                [shouldFocusSearchbar] = \"true\"\n                closeButtonSlot=\"end\"\n                closeButtonText=\"Close\"\n                clearButtonText=\"Reset\"\n                searchPlaceholder=\"Search Machine\"\n                (onChange)=\"onMachineChange($event)\">\n\n               \n\n              </ionic-selectable>\n            </ion-item>\n\n\n            <ion-item>\n              <ion-button fill=\"outline\" slot=\"end\">Assign Now</ion-button>\n            </ion-item>\n          </ion-card-content>\n        </ion-card>\n        \n      </ion-col>\n    </ion-row>\n\n     \n      \n  </ion-grid>\nMachine Assignment Block End -->\n\n\n\n<!-- Card Block -->\n<div id=\"machineassignmentBlock\">\n<ion-card style=\"background: linear-gradient(rgba(255, 255, 255, 0.9), rgba(243, 243, 243, 0.9)), url('assets/register/register3.svg');  background-size: cover;\">\n       \n      \n  <ion-card-content>\n      <ion-slides pager=\"false\" #machineassignmentSlider>\n       \n          <ion-slide>\n           \n            \n                <!-- <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                        <h4>1. Verify  Mobile</h4>\n                    </ion-col>\n                    <ion-col>\n                        <h4>1 of 3</h4>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row class=\"inputRows\">\n                    <ion-col>\n                        <ion-item no-lines>\n                            <ion-input type=\"number\" clearInput placeholder=\"Enter registered mobile no\"  ></ion-input> \n                        </ion-item>\n                    </ion-col>\n                  </ion-row>\n\n                  <ion-row>\n                      <ion-col>\n                        <ion-button  >Send OTP <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\n                        \n                      </ion-col>\n                  </ion-row>\n                </ion-grid>  -->\n\n                <form [formGroup]=\"assigneWithStartExerciseForm\" novalidate >\n                  <ion-list id=\"machineassigntoMember\">\n\n                    <ion-item lines=\"none\">\n                        <!-- <ion-avatar slot=\"start\">\n                            <img src=\"assets/layout/dumbbell.png\">\n                        </ion-avatar> -->\n                        <ion-label>{{selectedExeName}}</ion-label>\n                        <input type=\"hidden\" formControlName=\"exercisehdnId\" />\n                        <input type=\"hidden\" formControlName=\"hdnBranchCd\" />\n                    </ion-item>\n\n                    <ion-item class=\"customeSearchable\" lines=\"none\">\n\n                        <!-- <ion-avatar slot=\"start\">\n                          <img src=\"assets/layout/treadmill.png\">\n                        </ion-avatar> -->\n                      \n                      <ion-label>Choose Machine</ion-label>\n                      <ionic-selectable\n                        item-content\n                        itemValueField=\"machine_id\"\n                        itemTextField=\"machine_name\"\n                        [items]=\"machineFilteredList\"\n                        [canSearch]=\"true\"\n                        [canClear]=\"true\"\n                        [shouldFocusSearchbar] = \"true\"\n                        closeButtonSlot=\"end\"\n                        closeButtonText=\"Close\"\n                        clearButtonText=\"Reset\"\n                        searchPlaceholder=\"Search Machine\"\n                        formControlName=\"chooseMachine\"\n                        (onChange)=\"onMachineChange($event)\">\n        \n                        <!-- Will use later <ng-template ionicSelectableItemEndTemplate let-machine=\"item\" let-isMachineSelected=\"isItemSelected\">\n                          <img class=\"country-flag\" src=\"https://www.mantrahealthzone.co.in/images/team_mantra/793940_234_5271avirup%20chowdhury.jpg\" />\n                        </ng-template> -->\n        \n                      </ionic-selectable>\n                    </ion-item> \n\n                    <ion-item lines=\"none\" class=\"buttonitem\">\n                        <ion-button slot=\"end\" (click)=\"assignedMachineToMember()\">Assign Now <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\n                    </ion-item>\n\n                  </ion-list>\n                </form>\n\n              \n          </ion-slide>\n       \n\n      \n          <ion-slide>\n             \n            <form [formGroup]=\"stopAssignedMemberExerciseForm\" novalidate >\n              <ion-list id=\"memberCalorieBlock\">\n                \n\n                <div class=\"borderLineItem\">\n                  <ion-item lines=\"none\">\n                      <input type=\"hidden\" formControlName=\"assignedId\" />\n                    <ion-input placeholder=\"Enter Calorie\" clearInput formControlName=\"calorieGiven\" ></ion-input>\n                  </ion-item>\n                </div>\n\n                <ion-item lines=\"none\">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col style=\"background: #00a84f;\">\n                        <p style=\"text-align: center;\" *ngIf=\"!isHourDataAvailable\"><ion-spinner name=\"circles\" style=\"color:#fff;\"></ion-spinner></p>\n                        <p class=\"time_count\" *ngIf=\"isHourDataAvailable\">{{hrText}}</p>\n                        <p class=\"time_txt\">Hour</p>\n                      </ion-col>\n                      <ion-col style=\"background: #0e8044;\">\n                        <p style=\"text-align: center;\" *ngIf=\"!isMinDataAvailable\"><ion-spinner name=\"circles\" style=\"color:#fff;\"></ion-spinner></p>\n                        <p class=\"time_count\" *ngIf=\"isMinDataAvailable\">{{minText}}</p>\n                        <p class=\"time_txt\">Min</p>\n                      </ion-col>\n                      <ion-col style=\"background: #00a84f;\">\n                        <p style=\"text-align: center;\"  *ngIf=\"!isSecDataAvailable\"><ion-spinner name=\"circles\" style=\"color:#fff;\"></ion-spinner></p>\n                        <p class=\"time_count\"  *ngIf=\"isSecDataAvailable\">{{secText}}</p>\n                        <p class=\"time_txt\">Sec</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n                </ion-item>\n\n                <ion-item lines=\"none\">\n                  <ion-button slot=\"end\" (click)=\"stopExerciseProcess()\">Stop Now <ion-icon name=\"arrow-round-forward\"></ion-icon></ion-button>\n                </ion-item>\n\n              </ion-list> \n            </form>\n              \n          </ion-slide>\n       \n\n       \n        \n    </ion-slides>\n  \n\n\n  </ion-card-content>\n</ion-card>\n</div> <!-- Member Assignment Block -->\n\n\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.scss":
/*!********************************************************************************************************************!*\
  !*** ./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.scss ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#memberAssignmentProfilePage {\n  background: transparent;\n  height: 100%;\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }\n  #memberAssignmentProfilePage #memberProfileBlock {\n    max-height: 50%; }\n  #memberAssignmentProfilePage #memberProfileBlock #profileImg img {\n      width: 120px;\n      height: 120px;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n      border-radius: 73px;\n      border: 7px solid #F02608;\n      box-shadow: 0px 13px 54px 1px #DB1700;\n      margin-top: 5%; }\n  #memberAssignmentProfilePage #memberProfileBlock #memberDesc {\n      color: #FFF;\n      font-size: 0.8rem;\n      text-align: center; }\n  #memberAssignmentProfilePage #memberProfileBlock #memberDesc #membername {\n        font-size: 1.2rem;\n        font-weight: 500;\n        text-transform: uppercase; }\n  #memberAssignmentProfilePage #memberProfileBlock #memberHighlightDesc {\n      text-align: center;\n      color: #FFF; }\n  #memberAssignmentProfilePage #memberProfileBlock #memberHighlightDesc ion-chip {\n        color: #fff;\n        --background: transparent;\n        font-weight: 700;\n        border: 1px solid #ED4E34; }\n  #memberAssignmentProfilePage #memberProfileBlock #memberHighlightDesc ion-chip ion-icon {\n          color: #FFF; }\n  #memberAssignmentProfilePage #machineassignmentBlock form {\n    width: 100%; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card ion-list {\n    width: 100%;\n    padding: 0px;\n    background: transparent; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card ion-list ion-item {\n      --background: transparent;\n      border: 1px solid #e9e9e9;\n      margin: 5px 0px;\n      border-radius: 8px; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card ion-list ion-item ion-label {\n        font-size: 0.8rem;\n        letter-spacing: 2px;\n        font-weight: 600; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card ion-list ion-item .item-native {\n        --background: transparent !important; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #machineassigntoMember .buttonitem {\n    border: 0px; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #machineassigntoMember ion-button {\n    --background: #e93115;\n    min-height: 36px;\n    font-size: 0.7rem;\n    letter-spacing: 2px; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #memberCalorieBlock ion-item {\n    border: 0px; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #memberCalorieBlock .borderLineItem ion-item {\n    --background: transparent;\n    border: 1px solid #e9e9e9;\n    margin: 5px 0px;\n    border-radius: 8px; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #memberCalorieBlock ion-button {\n    --background: #0e8044;\n    min-height: 36px;\n    font-size: 0.7rem;\n    letter-spacing: 2px; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #memberCalorieBlock ion-row {\n    text-align: center; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #memberCalorieBlock ion-row ion-col {\n      border-radius: 0px;\n      color: #FFF;\n      font-weight: 700;\n      font-size: 1.5rem;\n      margin: 5px -5px; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #memberCalorieBlock ion-row ion-col .time_count {\n        font-size: 1em;\n        font-weight: 700; }\n  #memberAssignmentProfilePage #machineassignmentBlock ion-card #memberCalorieBlock ion-row ion-col .time_txt {\n        font-size: 0.8rem;\n        letter-spacing: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L21lbWJlcl9kZXRhaWxfYXNzaW5nbWVudF9sYXlvdXQvbWVtYmVyYXNzaWdubWVudC1wcm9maWxlL0Q6XFxBcHBEZXZlbG9wbWVudFxcTWFudHJhQXBwXFxtYW50cmF0cmFpbmVyL3NyY1xcYXBwXFxsYXlvdXRcXG1lbWJlcl9kZXRhaWxfYXNzaW5nbWVudF9sYXlvdXRcXG1lbWJlcmFzc2lnbm1lbnQtcHJvZmlsZVxcbWVtYmVyYXNzaWdubWVudC1wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osd0lBQXdJLEVBQUE7RUFINUk7SUFNTyxlQUFjLEVBQUE7RUFOckI7TUFVWSxZQUFZO01BQ1osYUFBYTtNQUNiLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQix5QkFBeUI7TUFDekIscUNBQXFDO01BQ3JDLGNBQWMsRUFBQTtFQWxCMUI7TUF1QlcsV0FBVTtNQUNWLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtFQXpCN0I7UUE0QmUsaUJBQWlCO1FBQ2pCLGdCQUFlO1FBQ2YseUJBQXlCLEVBQUE7RUE5QnhDO01Ba0NXLGtCQUFrQjtNQUNsQixXQUFVLEVBQUE7RUFuQ3JCO1FBc0NvQixXQUFXO1FBQ1gseUJBQWE7UUFDYixnQkFBZ0I7UUFDaEIseUJBQXlCLEVBQUE7RUF6QzdDO1VBNENvQixXQUFXLEVBQUE7RUE1Qy9CO0lBc0VZLFdBQVUsRUFBQTtFQXRFdEI7SUEyRWdCLFdBQVU7SUFDVixZQUFXO0lBRVgsdUJBQXVCLEVBQUE7RUE5RXZDO01BaUZvQix5QkFBYTtNQUNiLHlCQUF5QjtNQUN6QixlQUFlO01BQ2Ysa0JBQWtCLEVBQUE7RUFwRnRDO1FBdUZ3QixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLGdCQUFnQixFQUFBO0VBekZ4QztRQTZGd0Isb0NBQWEsRUFBQTtFQTdGckM7SUFzR29CLFdBQVUsRUFBQTtFQXRHOUI7SUF5R29CLHFCQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFQTVHdkM7SUFtSG9CLFdBQVUsRUFBQTtFQW5IOUI7SUF3SHdCLHlCQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0IsRUFBQTtFQTNIMUM7SUFnSW9CLHFCQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUIsRUFBQTtFQW5JdkM7SUF1SW9CLGtCQUFpQixFQUFBO0VBdklyQztNQTBJd0Isa0JBQWtCO01BRWxCLFdBQVc7TUFDWCxnQkFBZ0I7TUFDaEIsaUJBQWlCO01BQ2pCLGdCQUFnQixFQUFBO0VBL0l4QztRQWtKNEIsY0FBYztRQUNkLGdCQUFnQixFQUFBO0VBbko1QztRQXVKNEIsaUJBQWlCO1FBQ2pCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L21lbWJlcl9kZXRhaWxfYXNzaW5nbWVudF9sYXlvdXQvbWVtYmVyYXNzaWdubWVudC1wcm9maWxlL21lbWJlcmFzc2lnbm1lbnQtcHJvZmlsZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVtYmVyQXNzaWdubWVudFByb2ZpbGVQYWdle1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCAnU2Vnb2UgVUknLCBSb2JvdG8sIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsICdPcGVuIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBzYW5zLXNlcmlmO1xyXG5cclxuICAgICNtZW1iZXJQcm9maWxlQmxvY2t7XHJcbiAgICAgICBtYXgtaGVpZ2h0OjUwJTtcclxuXHJcbiAgICAgICAjcHJvZmlsZUltZ3tcclxuICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3M3B4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDdweCBzb2xpZCAjRjAyNjA4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMTNweCA1NHB4IDFweCAjREIxNzAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgICB9XHJcbiAgICAgICB9XHJcblxyXG4gICAgICAgI21lbWJlckRlc2N7XHJcbiAgICAgICAgICAgY29sb3I6I0ZGRjtcclxuICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICNtZW1iZXJuYW1le1xyXG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgIH1cclxuICAgICAgICNtZW1iZXJIaWdobGlnaHREZXNje1xyXG4gICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICBjb2xvcjojRkZGO1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1jaGlwe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUQ0RTM0O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvLyAjbWVtYmVyTWFjaGluZUFzc2lnbm1lbnRCbG9jayB7XHJcbiAgICAvLyAgICAgLmN1c3RvbWVTZWFyY2hhYmxlIHtcclxuICAgIC8vICAgICAgICAgaW9uLWxhYmVsIHtcclxuICAgIC8vICAgICAgICAgICAgIGZvbnQtc2l6ZTowLjhyZW07XHJcbiAgICAvLyAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgLy8gICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgIC8vICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICAjbWFjaGluZWFzc2lnbm1lbnRCbG9jayB7XHJcblxyXG4gICAgICAgIGZvcm17XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24tY2FyZCB7XHJcbiAgICAgICAgICAgIGlvbi1saXN0IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjBweDtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZTllOTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLml0ZW0tbmF0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAjbWFjaGluZWFzc2lnbnRvTWVtYmVyIHtcclxuICAgICAgICAgICAgICAgIC5idXR0b25pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjowcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2U5MzExNTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICNtZW1iZXJDYWxvcmllQmxvY2t7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjowcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm9yZGVyTGluZUl0ZW17XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllOWU5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgICAgICAtLWJhY2tncm91bmQ6ICMwZTgwNDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlvbi1yb3d7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9ib3gtc2hhZG93OiAtNjRweCAtMjNweCA2OXB4IDBweCAjMzIzMjMyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZDogI2U5MzAxMztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDVweCAtNXB4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRpbWVfY291bnR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aW1lX3R4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.ts ***!
  \******************************************************************************************************************/
/*! exports provided: MemberassignmentProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberassignmentProfilePage", function() { return MemberassignmentProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/http-request-handler.service */ "./src/app/services/http-request-handler.service.ts");
/* harmony import */ var src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data-share.service */ "./src/app/services/data-share.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var MemberassignmentProfilePage = /** @class */ (function () {
    function MemberassignmentProfilePage(_httpRequestHandlerService, _dataShareService, router) {
        this._httpRequestHandlerService = _httpRequestHandlerService;
        this._dataShareService = _dataShareService;
        this.router = router;
        this.machineFilteredList = [];
        this.machineList = [];
        this.isHourDataAvailable = false;
        this.isMinDataAvailable = false;
        this.isSecDataAvailable = false;
        this.memberAssignedID = 0;
        this.membershipNO = "";
        this.memberName = "";
        this.memberGender = "";
        this.memberPackageCode = "";
        this.selectedBranch = this._dataShareService.getSelectedExerciseDatas().branchcode;
        this.selectedExercise = this._dataShareService.getSelectedExerciseDatas().exerciseID;
        this.selectedMemberObj = this._dataShareService.getSelectedMemberDatas();
        this.diffHours = this._dataShareService.getSelectedMemberDatas().diffHour;
        this.diffMinutes = this._dataShareService.getSelectedMemberDatas().diffMinute;
        this.diffSecs = this._dataShareService.getSelectedMemberDatas().diffSec;
        this.memberAssignedID = this._dataShareService.getSelectedMemberDatas().assignedID;
        this.membershipNO = this._dataShareService.getSelectedMemberDatas().MEMBERSHIP_NO;
        this.memberName = this._dataShareService.getSelectedMemberDatas().CUS_NAME;
        this.memberMobile = this._dataShareService.getSelectedMemberDatas().mobileNO;
        this.memberGender = this._dataShareService.getSelectedMemberDatas().gender;
        this.memberPackageCode = this._dataShareService.getSelectedMemberDatas().packageCode;
        // console.log(this.selectedMemberObj);
        this.assigneWithStartExerciseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            exercisehdnId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedExercise, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            hdnBranchCd: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedBranch, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            chooseMachine: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.stopAssignedMemberExerciseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            assignedId: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.memberAssignedID, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            calorieGiven: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    MemberassignmentProfilePage.prototype.ngOnInit = function () {
        this.machineassignmentSlider.lockSwipes(false);
        // console.log("Selected Member Data");
        // console.log(this.selectedMemberObj);
        // console.log("/Selected Member Data");
        this.getExerciseById(this.selectedExercise);
        this.getNonAssignedMachineList(this.selectedBranch, this.selectedExercise);
        if (this.memberAssignedID > 0) {
            this.getAssignedMemberDetailByID(this.memberAssignedID);
            this.machineassignmentSlider.slideNext(200);
            this.machineassignmentSlider.lockSwipes(true);
        }
        else {
            this.machineassignmentSlider.lockSwipes(true);
        }
    };
    MemberassignmentProfilePage.prototype.onMachineChange = function (event) {
        console.log(event);
    };
    MemberassignmentProfilePage.prototype.getAssignedMemberDetailByID = function (assignedID) {
        var _this = this;
        var response;
        this._httpRequestHandlerService.getAssignedMemberDetailByID(assignedID).then(function (data) {
            if (data.STATUS == 200 && data.STATUS_MSG == "SUCCESS") {
                response = data.RESULT;
                _this.showTimer(response.diffHour, response.diffMinute, response.diffSec);
                console.log("Assigned ID IS" + response.assignedID);
            }
            else {
                response = data.RESULT;
                console.log("Assigned ID ** " + response.assignedID);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MemberassignmentProfilePage.prototype.getExerciseById = function (selectedexercise) {
        var _this = this;
        var response;
        this._httpRequestHandlerService.getExerciseById(selectedexercise).then(function (data) {
            response = data.RESULT;
            _this.selectedExeName = response.exercise_name;
            console.log("Exercise name = " + _this.selectedExeName);
        }, function (error) {
            console.log(error);
        });
    };
    MemberassignmentProfilePage.prototype.getNonAssignedMachineList = function (branch, selectedexercise) {
        var _this = this;
        this.machineFilteredList = [];
        this._httpRequestHandlerService.getNonAssignedMachineList(branch, selectedexercise).then(function (data) {
            _this.machineList = data.RESULT;
            var nonassignedMachineCount = Object.keys(_this.machineList).length;
            var machineObj;
            for (var i = 0; i < nonassignedMachineCount; i++) {
                machineObj = {
                    "exercise_machine_mapped_id": _this.machineList[i].exercise_machine_mapped_id,
                    "machine_id": _this.machineList[i].machine_id,
                    "machine_name": _this.machineList[i].machine_name,
                    "machine_code": _this.machineList[i].machine_code
                };
                _this.machineFilteredList.push(machineObj);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MemberassignmentProfilePage.prototype.assignedMachineToMember = function () {
        var _this = this;
        console.log(this.assigneWithStartExerciseForm.value);
        var response;
        this._httpRequestHandlerService.assignExerciseToMember(this.assigneWithStartExerciseForm.value, this.selectedMemberObj).then(function (data) {
            if (data.STATUS == 200 && data.STATUS_MSG == "SUCCESS") {
                response = data.RESULT;
                _this.router.navigate(['/member-machine-assignment']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MemberassignmentProfilePage.prototype.stopExerciseProcess = function () {
        var _this = this;
        console.log(this.stopAssignedMemberExerciseForm.value);
        var response;
        this._httpRequestHandlerService.stopExerciseProcess(this.stopAssignedMemberExerciseForm.value).then(function (data) {
            if (data.STATUS == 200 && data.STATUS_MSG == "SUCCESS") {
                _this.router.navigate(['/member-machine-assignment']);
            }
        }, function (error) {
            console.log(error);
        });
    };
    MemberassignmentProfilePage.prototype.showTimer = function (Hour, Minute, Sec) {
        var _this = this;
        var dynamicCountIntervel;
        var secondCount = parseInt(Sec);
        var minute = parseInt(Minute);
        var hour = parseInt(Hour);
        dynamicCountIntervel = setInterval(function () {
            secondCount++;
            if (secondCount == 60) {
                secondCount = 0;
                minute = minute + 1;
            }
            if (minute == 60) {
                minute = 0;
                hour = hour + 1;
            }
            //  this.secText
            _this.secText = _this.getCounterPrefix(secondCount);
            _this.minText = _this.getCounterPrefix(minute);
            _this.hrText = _this.getCounterPrefix(hour);
            _this.isHourDataAvailable = true;
            _this.isMinDataAvailable = true;
            _this.isSecDataAvailable = true;
        }, 1000);
    };
    MemberassignmentProfilePage.prototype.getCounterPrefix = function (val) {
        if (val <= 9) {
            return "0" + val;
        }
        return val;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('machineassignmentSlider'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MemberassignmentProfilePage.prototype, "machineassignmentSlider", void 0);
    MemberassignmentProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-memberassignment-profile',
            template: __webpack_require__(/*! ./memberassignment-profile.page.html */ "./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.html"),
            styles: [__webpack_require__(/*! ./memberassignment-profile.page.scss */ "./src/app/layout/member_detail_assingment_layout/memberassignment-profile/memberassignment-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_http_request_handler_service__WEBPACK_IMPORTED_MODULE_2__["HttpRequestHandlerService"], src_app_services_data_share_service__WEBPACK_IMPORTED_MODULE_3__["DataShareService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], MemberassignmentProfilePage);
    return MemberassignmentProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=layout-member_detail_assingment_layout-memberassignment-profile-memberassignment-profile-module.js.map