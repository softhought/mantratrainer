(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["memberemployeeqrlayout-memberemployeeqrlayout-module"],{

/***/ "./src/app/memberemployeeqrlayout/memberemployeeqrlayout.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/memberemployeeqrlayout/memberemployeeqrlayout.module.ts ***!
  \*************************************************************************/
/*! exports provided: MemberemployeeqrlayoutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberemployeeqrlayoutPageModule", function() { return MemberemployeeqrlayoutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _memberemployeeqrlayout_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./memberemployeeqrlayout.page */ "./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.ts");







var routes = [
    {
        path: '',
        component: _memberemployeeqrlayout_page__WEBPACK_IMPORTED_MODULE_6__["MemberemployeeqrlayoutPage"]
    }
];
var MemberemployeeqrlayoutPageModule = /** @class */ (function () {
    function MemberemployeeqrlayoutPageModule() {
    }
    MemberemployeeqrlayoutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_memberemployeeqrlayout_page__WEBPACK_IMPORTED_MODULE_6__["MemberemployeeqrlayoutPage"]]
        })
    ], MemberemployeeqrlayoutPageModule);
    return MemberemployeeqrlayoutPageModule;
}());



/***/ }),

/***/ "./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.html":
/*!*************************************************************************!*\
  !*** ./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding>\r\n  <div id=\"memberemployeeQRlayoutPage\">\r\n      <div id=\"upperMemberQrLayout\">\r\n\r\n        <div class=\"iconwithtitleQRT memberIcon\">\r\n          <ion-icon name=\"people\"></ion-icon>\r\n          <h6 style=\"margin-top: -16px;\">Member</h6>\r\n        </div>\r\n      \r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col text-right>\r\n              <ion-button (click)=\"openQRScanner('MEMBER','IN')\">\r\n                  <ion-icon name=\"arrow-round-back\"></ion-icon> IN&nbsp;\r\n              </ion-button>\r\n          </ion-col>\r\n          <ion-col text-left>\r\n              <ion-button (click)=\"openQRScanner('MEMBER','OUT')\">\r\n                 OUT\r\n                  <ion-icon name=\"arrow-round-forward\"></ion-icon>\r\n              </ion-button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n\r\n\r\n      </div><!-- end of upperMemberQrLayout-->\r\n      <div id=\"middleLayout\">\r\n        <div id=\"memberInstruction\">\r\n          <!-- <p class=\"htmlicon_attd\">&#x261D;</p>\r\n          <p>For Member attendance please choose member IN or OUT </p> -->\r\n        </div>\r\n        <hr class=\"customHR\" />\r\n        <hr>\r\n        <div id=\"employeeInstruction\">\r\n            <!-- <p>For employee attendance please choose employee IN or OUT </p>\r\n            <p class=\"htmlicon_attd\">&#x261F;</p> -->\r\n          </div>\r\n      </div>\r\n\r\n      <div id=\"lowerEmployeeQrLayout\">\r\n          <div class=\"iconwithtitleQRT employeeIcon\">\r\n              <ion-icon name=\"briefcase\"></ion-icon>\r\n              <h6 >Employee</h6>\r\n          </div>\r\n          <ion-grid>\r\n              <ion-row>\r\n                <ion-col text-right>\r\n                    <ion-button (click)=\"openQRScanner('EMPLOYEE','IN')\">\r\n                        <ion-icon name=\"arrow-round-back\"></ion-icon> IN&nbsp;\r\n                    </ion-button>\r\n                </ion-col>\r\n                <ion-col text-left>\r\n                    <ion-button (click)=\"openQRScanner('EMPLOYEE','OUT')\">\r\n                       OUT\r\n                        <ion-icon name=\"arrow-round-forward\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n      </div><!-- end of upperMemberQrLayout-->\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.scss":
/*!*************************************************************************!*\
  !*** ./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#memberemployeeQRlayoutPage {\n  height: 100%;\n  text-align: center;\n  background: #ff6200;\n  --padding: 0px;\n  position: relative;\n  margin: 0; }\n  #memberemployeeQRlayoutPage #upperMemberQrLayout {\n    position: absolute;\n    top: 5%;\n    left: 0;\n    right: 0;\n    margin: auto; }\n  #memberemployeeQRlayoutPage #upperMemberQrLayout ion-button {\n      --border-radius: 50px !important;\n      --background: #FFF;\n      color: #958a8a;\n      letter-spacing: 2px; }\n  #memberemployeeQRlayoutPage #upperMemberQrLayout .memberIcon {\n      border-radius: 17px;\n      padding: 1% 0; }\n  #memberemployeeQRlayoutPage #upperMemberQrLayout .memberIcon ion-icon {\n        color: #fff; }\n  #memberemployeeQRlayoutPage #upperMemberQrLayout .memberIcon h6 {\n        letter-spacing: 1px;\n        color: #fff;\n        font-size: 14px; }\n  #memberemployeeQRlayoutPage #middleLayout {\n    position: absolute;\n    top: 48%;\n    left: 0;\n    right: 0;\n    margin: auto; }\n  #memberemployeeQRlayoutPage #middleLayout #memberInstruction, #memberemployeeQRlayoutPage #middleLayout #employeeInstruction {\n      font-size: 12px;\n      letter-spacing: 1px;\n      width: 90%;\n      margin: 0 auto;\n      color: #551D00; }\n  #memberemployeeQRlayoutPage #middleLayout #memberInstruction p, #memberemployeeQRlayoutPage #middleLayout #employeeInstruction p {\n        margin: 0px; }\n  #memberemployeeQRlayoutPage #middleLayout #memberInstruction .htmlicon_attd, #memberemployeeQRlayoutPage #middleLayout #employeeInstruction .htmlicon_attd {\n        font-size: 4rem; }\n  #memberemployeeQRlayoutPage #middleLayout .customHR {\n      border: 0;\n      height: 1px;\n      background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #bd4900, rgba(0, 0, 0, 0)); }\n  #memberemployeeQRlayoutPage #lowerEmployeeQrLayout {\n    position: absolute;\n    bottom: 5%;\n    left: 0;\n    right: 0;\n    margin: auto; }\n  #memberemployeeQRlayoutPage #lowerEmployeeQrLayout ion-button {\n      --border-radius: 50px !important;\n      --background: #FFF;\n      color: #958a8a;\n      letter-spacing: 2px; }\n  #memberemployeeQRlayoutPage #lowerEmployeeQrLayout .employeeIcon {\n      border-radius: 17px;\n      padding: 1% 0; }\n  #memberemployeeQRlayoutPage #lowerEmployeeQrLayout .employeeIcon ion-icon {\n        color: #fff; }\n  #memberemployeeQRlayoutPage #lowerEmployeeQrLayout .employeeIcon h6 {\n        letter-spacing: 1px;\n        color: #fff;\n        font-size: 14px; }\n  #memberemployeeQRlayoutPage .iconwithtitleQRT {\n    width: 116px;\n    margin: 0 auto;\n    margin-top: 5%; }\n  #memberemployeeQRlayoutPage .iconwithtitleQRT ion-icon {\n      font-size: 3rem;\n      padding: 10% 0; }\n  #memberemployeeQRlayoutPage .iconwithtitleQRT h6 {\n      margin-top: -10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyZW1wbG95ZWVxcmxheW91dC9EOlxcQXBwRGV2ZWxvcG1lbnRcXE1hbnRyYUFwcFxcbWFudHJhdHJhaW5lci9zcmNcXGFwcFxcbWVtYmVyZW1wbG95ZWVxcmxheW91dFxcbWVtYmVyZW1wbG95ZWVxcmxheW91dC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixjQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTtFQU5iO0lBWVEsa0JBQWtCO0lBQ2xCLE9BQU07SUFDTixPQUFNO0lBQ04sUUFBTztJQUNQLFlBQVcsRUFBQTtFQWhCbkI7TUFtQlksZ0NBQWdCO01BQ2hCLGtCQUFhO01BQ2IsY0FBYztNQUNkLG1CQUFtQixFQUFBO0VBdEIvQjtNQTJCWSxtQkFBbUI7TUFNbkIsYUFBYSxFQUFBO0VBakN6QjtRQW9DZ0IsV0FBVyxFQUFBO0VBcEMzQjtRQXVDZ0IsbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCxlQUFlLEVBQUE7RUF6Qy9CO0lBK0NRLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFFBQVE7SUFDUixZQUFZLEVBQUE7RUFuRHBCO01Bc0RZLGVBQWU7TUFDZixtQkFBbUI7TUFDbkIsVUFBVTtNQUNWLGNBQWM7TUFDZCxjQUFjLEVBQUE7RUExRDFCO1FBNkRnQixXQUFXLEVBQUE7RUE3RDNCO1FBZ0VnQixlQUFlLEVBQUE7RUFoRS9CO01Bb0VZLFNBQVM7TUFDVCxXQUFXO01BQ1gsd0ZBQWdHLEVBQUE7RUF0RTVHO0lBK0VPLGtCQUFrQjtJQUNqQixVQUFTO0lBQ1QsT0FBTTtJQUNOLFFBQU87SUFDUCxZQUFXLEVBQUE7RUFuRm5CO01BdUZZLGdDQUFnQjtNQUNoQixrQkFBYTtNQUNiLGNBQWM7TUFDZCxtQkFBbUIsRUFBQTtFQTFGL0I7TUErRlksbUJBQW1CO01BS25CLGFBQWEsRUFBQTtFQXBHekI7UUF1R2dCLFdBQVcsRUFBQTtFQXZHM0I7UUEwR2dCLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsZUFBZSxFQUFBO0VBNUcvQjtJQWtIUSxZQUFZO0lBQ1osY0FBYTtJQUNiLGNBQWMsRUFBQTtFQXBIdEI7TUF1SFksZUFBZTtNQUNmLGNBQWMsRUFBQTtFQXhIMUI7TUEySFksaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tZW1iZXJlbXBsb3llZXFybGF5b3V0L21lbWJlcmVtcGxveWVlcXJsYXlvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21lbWJlcmVtcGxveWVlUVJsYXlvdXRQYWdle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmNjIwMDtcclxuICAgIC0tcGFkZGluZzogMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuXHJcbiAgICAjdXBwZXJNZW1iZXJRckxheW91dHtcclxuICAgICAgLy8gIGhlaWdodDo0MHZoO1xyXG4gICAgICAgIC8vYmFja2dyb3VuZDogcmdiKDI1NSwgOTksIDkpO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6NSU7XHJcbiAgICAgICAgbGVmdDowO1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcblxyXG4gICAgICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAtLWJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTU4YThhO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tZW1iZXJJY29ue1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG5cclxuICAgICAgICAgICAgLy9ib3JkZXI6MXB4IHNvbGlkICNlZWU7XHJcbiAgICAgICAgICAgIC8vYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XHJcblxyXG4gICAgICAgICAvLyAgIGJveC1zaGFkb3c6IC03cHggLTRweCAxOHB4IDFweCAjZDU1MjAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxJSAwO1xyXG5cclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoNntcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAjbWlkZGxlTGF5b3V0e1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDQ4JTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICAgICAgI21lbWJlckluc3RydWN0aW9uLCNlbXBsb3llZUluc3RydWN0aW9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICBjb2xvcjogIzU1MUQwMDtcclxuXHJcbiAgICAgICAgICAgIHB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaHRtbGljb25fYXR0ZHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY3VzdG9tSFJ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgwLCAwLCAwLCAwKSwgcmdiKDE4OSwgNzMsIDApLCByZ2JhKDAsIDAsIDAsIDApKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgI2xvd2VyRW1wbG95ZWVRckxheW91dHtcclxuICAgICAgIC8vIGhlaWdodDo2MHZoO1xyXG4gICAgIC8vICAgYmFja2dyb3VuZDogcmdiKDI1NSwgOTksIDkpO1xyXG4gICAgICAvLyAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTAlO1xyXG4gICAgICAgLy8gYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDUwJTtcclxuICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206NSU7XHJcbiAgICAgICAgbGVmdDowO1xyXG4gICAgICAgIHJpZ2h0OjA7XHJcbiAgICAgICAgbWFyZ2luOmF1dG87XHJcblxyXG5cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgICAgICBjb2xvcjogIzk1OGE4YTtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZW1wbG95ZWVJY29ue1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxN3B4O1xyXG4gICAgICAgICAvLyAgIGJvcmRlcjoxcHggc29saWQgI2VlZTtcclxuICAgICAgICAgLy8gICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcclxuXHJcbiAgICAgICAgLy8gICAgYm94LXNoYWRvdzogLTdweCAtNHB4IDE4cHggMXB4ICNkNTUyMDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDElIDA7XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGg2e1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pY29ud2l0aHRpdGxlUVJUe1xyXG4gICAgICAgIHdpZHRoOiAxMTZweDtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICBcclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMCUgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDZ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.ts":
/*!***********************************************************************!*\
  !*** ./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.ts ***!
  \***********************************************************************/
/*! exports provided: MemberemployeeqrlayoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberemployeeqrlayoutPage", function() { return MemberemployeeqrlayoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/qr-scanner/ngx */ "./node_modules/@ionic-native/qr-scanner/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var MemberemployeeqrlayoutPage = /** @class */ (function () {
    function MemberemployeeqrlayoutPage(qrScanner, platform) {
        var _this = this;
        this.qrScanner = qrScanner;
        this.platform = platform;
        // Dismiss QR When Back button is pressed
        this.platform.backButton.subscribeWithPriority(0, function () {
            document.getElementsByTagName("body")[0].style.opacity = "1";
            _this.qr_scanner.unsubscribe();
        });
    }
    MemberemployeeqrlayoutPage.prototype.ngOnInit = function () {
    };
    MemberemployeeqrlayoutPage.prototype.openQRScanner = function (scanfor, timetag) {
        var _this = this;
        // Optionally request the permission early
        this.qrScanner.prepare()
            .then(function (status) {
            if (status.authorized) {
                // camera permission was granted
                _this.qrScanner.show();
                document.getElementsByTagName("body")[0].style.opacity = "0";
                // start scanning
                _this.qr_scanner = _this.qrScanner.scan().subscribe(function (text) {
                    document.getElementsByTagName("body")[0].style.opacity = "1";
                    //this.qrScanner.hide(); // hide camera preview
                    _this.qr_scanner.unsubscribe(); // stop scanning
                    console.log('Scanned something', text);
                    alert("Scanned data " + text);
                });
            }
            else if (status.denied) {
                // camera permission was permanently denied
                // you must use QRScanner.openSettings() method to guide the user to the settings page
                // then they can grant the permission from there
            }
            else {
                // permission was denied, but not permanently. You can ask for permission again at a later time.
            }
        })
            .catch(function (e) { return console.log('Error is', e); });
    };
    MemberemployeeqrlayoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-memberemployeeqrlayout',
            template: __webpack_require__(/*! ./memberemployeeqrlayout.page.html */ "./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.html"),
            styles: [__webpack_require__(/*! ./memberemployeeqrlayout.page.scss */ "./src/app/memberemployeeqrlayout/memberemployeeqrlayout.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_qr_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["QRScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"]])
    ], MemberemployeeqrlayoutPage);
    return MemberemployeeqrlayoutPage;
}());



/***/ })

}]);
//# sourceMappingURL=memberemployeeqrlayout-memberemployeeqrlayout-module.js.map