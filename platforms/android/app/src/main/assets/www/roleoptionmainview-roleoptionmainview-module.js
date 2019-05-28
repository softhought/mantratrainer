(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roleoptionmainview-roleoptionmainview-module"],{

/***/ "./src/app/roleoptionmainview/roleoptionmainview.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/roleoptionmainview/roleoptionmainview.module.ts ***!
  \*****************************************************************/
/*! exports provided: RoleoptionmainviewPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleoptionmainviewPageModule", function() { return RoleoptionmainviewPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _roleoptionmainview_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roleoptionmainview.page */ "./src/app/roleoptionmainview/roleoptionmainview.page.ts");







var routes = [
    {
        path: '',
        component: _roleoptionmainview_page__WEBPACK_IMPORTED_MODULE_6__["RoleoptionmainviewPage"]
    }
];
var RoleoptionmainviewPageModule = /** @class */ (function () {
    function RoleoptionmainviewPageModule() {
    }
    RoleoptionmainviewPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_roleoptionmainview_page__WEBPACK_IMPORTED_MODULE_6__["RoleoptionmainviewPage"]]
        })
    ], RoleoptionmainviewPageModule);
    return RoleoptionmainviewPageModule;
}());



/***/ }),

/***/ "./src/app/roleoptionmainview/roleoptionmainview.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/roleoptionmainview/roleoptionmainview.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content no-padding id=\"roleoptionmainviewPage\">\n\n<div id=\"roleopt_upperLayout\">\n    <ion-img src=\"assets/mantra_logo.png\"></ion-img>\n    <h3>Mantra</h3>\n    <p>LIFE STYLE HEALTH CLUB</p>\n</div>\n\n\n<div id=\"roleopt_loweLayout\">\n    <ion-grid>\n\n        <ion-row text-center>\n          <ion-col>\n            <div>\n                <ion-card id=\"card1\" (click)=\"redirectToUrl('EMPLOYEE')\">\n                    <ion-card-header>\n                        <ion-card-subtitle><ion-icon name=\"people\"></ion-icon></ion-card-subtitle>\n                        <ion-card-title>Employee</ion-card-title>\n                    </ion-card-header>\n                    <ion-card-content>\n                              <!-- Go through QR attendance -->\n                    </ion-card-content>\n                </ion-card>\n            </div>\n          </ion-col>\n          <ion-col>\n                <div>\n                    <ion-card id=\"card2\" (click)=\"redirectToUrl('TRAINER')\">\n                            <ion-card-header>\n                                <ion-card-subtitle><ion-icon name=\"bicycle\"></ion-icon></ion-card-subtitle>\n                                <ion-card-title>Trainer</ion-card-title>\n                            </ion-card-header>\n                                  \n                            <ion-card-content>\n                                    <!-- View and assign members activity -->\n                            </ion-card-content>\n                    </ion-card>\n                </div>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row text-center>\n                <ion-col>\n                    <div>\n                      <ion-card id=\"card3\" (click)=\"redirectToUrl('QR')\">\n                          <ion-card-header>\n                            <ion-card-subtitle><ion-icon name=\"qr-scanner\"></ion-icon></ion-card-subtitle>\n                            <ion-card-title>QR Scan</ion-card-title>\n                          </ion-card-header>\n                          <ion-card-content>\n                                <!-- Scanner for attendance -->\n                          </ion-card-content>\n                      </ion-card>\n                    </div>\n                </ion-col>\n                <ion-col>\n                        <div>\n                            <ion-card id=\"card4\" (click)=\"redirectToUrl('HELP')\">\n                                  <ion-card-header>\n                                      <ion-card-subtitle><ion-icon name=\"help\"></ion-icon></ion-card-subtitle>\n                                      <ion-card-title>Help</ion-card-title>\n                                  </ion-card-header>\n                                  <ion-card-content>\n                                         <!-- Want to know how it works   -->\n                                  </ion-card-content>\n                            </ion-card>\n                        </div>\n                </ion-col>\n        </ion-row>\n       \n      </ion-grid>\n</div>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/roleoptionmainview/roleoptionmainview.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/roleoptionmainview/roleoptionmainview.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#roleoptionmainviewPage {\n  --background: rgb(255, 99, 9); }\n  #roleoptionmainviewPage #roleopt_upperLayout {\n    height: 50vh;\n    background: #FFF;\n    border-bottom-left-radius: 369px;\n    border-bottom-right-radius: 0px;\n    box-shadow: 4px -5px 26px 0px #371400;\n    text-align: center;\n    padding-top: 6%;\n    padding-left: 9%; }\n  #roleoptionmainviewPage #roleopt_upperLayout ion-img {\n      width: 80px;\n      margin-left: auto;\n      margin-right: auto;\n      display: block; }\n  #roleoptionmainviewPage #roleopt_upperLayout h3 {\n      font-size: 4em;\n      text-transform: uppercase;\n      font-weight: 700;\n      color: #F2652D;\n      margin-top: -5px;\n      text-shadow: 8px 3px 7px #DEDEDE; }\n  #roleoptionmainviewPage #roleopt_upperLayout p {\n      letter-spacing: 3px;\n      margin-top: -23px; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid {\n    padding-top: 10%;\n    width: 80%;\n    margin: 0 auto; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid ion-col {\n      padding: 0; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid ion-card {\n      border-radius: 0px;\n      border: 1px solid #f05b05;\n      box-shadow: 0px 0px 0px 0px #323233; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid ion-card ion-card-title {\n        margin: -8px 0;\n        color: #FFF;\n        letter-spacing: 2px;\n        text-transform: uppercase;\n        font-size: 0.7rem; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid ion-card ion-icon {\n        font-size: 3rem;\n        color: #eeeae9; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid #card1 {\n      border-bottom-right-radius: 26px; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid #card2 {\n      border-bottom-left-radius: 26px; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid #card3 {\n      border-top-right-radius: 26px; }\n  #roleoptionmainviewPage #roleopt_loweLayout ion-grid #card4 {\n      border-top-left-radius: 26px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9sZW9wdGlvbm1haW52aWV3L0Q6XFxBcHBEZXZlbG9wbWVudFxcTWFudHJhQXBwXFxtYW50cmF0cmFpbmVyL3NyY1xcYXBwXFxyb2xlb3B0aW9ubWFpbnZpZXdcXHJvbGVvcHRpb25tYWludmlldy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw2QkFBYSxFQUFBO0VBRGpCO0lBSVEsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQ0FBZ0M7SUFDaEMsK0JBQStCO0lBQy9CLHFDQUFxQztJQUNyQyxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQixFQUFBO0VBWHhCO01BY1ksV0FBVTtNQUNWLGlCQUFnQjtNQUNoQixrQkFBaUI7TUFDakIsY0FBYSxFQUFBO0VBakJ6QjtNQXNCWSxjQUFjO01BQ2QseUJBQXlCO01BQ3pCLGdCQUFnQjtNQUVoQixjQUFjO01BQ2QsZ0JBQWdCO01BQ2hCLGdDQUFnQyxFQUFBO0VBNUI1QztNQStCWSxtQkFBbUI7TUFDbkIsaUJBQWlCLEVBQUE7RUFoQzdCO0lBdUNZLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsY0FBYyxFQUFBO0VBekMxQjtNQTRDZ0IsVUFBUyxFQUFBO0VBNUN6QjtNQWlEZ0Isa0JBQWtCO01BQ2xCLHlCQUF5QjtNQUN6QixtQ0FBbUMsRUFBQTtFQW5EbkQ7UUFxRG9CLGNBQWM7UUFDZCxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixpQkFBaUIsRUFBQTtFQXpEckM7UUE2RG9CLGVBQWU7UUFDZixjQUFjLEVBQUE7RUE5RGxDO01BbUVnQixnQ0FBZ0MsRUFBQTtFQW5FaEQ7TUFzRWdCLCtCQUErQixFQUFBO0VBdEUvQztNQXlFZ0IsNkJBQTZCLEVBQUE7RUF6RTdDO01BNEVnQiw0QkFBNEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JvbGVvcHRpb25tYWludmlldy9yb2xlb3B0aW9ubWFpbnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JvbGVvcHRpb25tYWludmlld1BhZ2Uge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiByZ2IoMjU1LCA5OSwgOSk7XHJcblxyXG4gICAgI3JvbGVvcHRfdXBwZXJMYXlvdXR7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzY5cHg7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcclxuICAgICAgICBib3gtc2hhZG93OiA0cHggLTVweCAyNnB4IDBweCAjMzcxNDAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNiU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA5JTtcclxuXHJcbiAgICAgICAgaW9uLWltZ3tcclxuICAgICAgICAgICAgd2lkdGg6ODBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OmF1dG87XHJcbiAgICAgICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiA0ZW07XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAvLyAgY29sb3I6ICNmZjMxMGM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjRjI2NTJEO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogOHB4IDNweCA3cHggI0RFREVERTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAjcm9sZW9wdF9sb3dlTGF5b3V0e1xyXG4gICAgICAgIGlvbi1ncmlkIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcblxyXG4gICAgICAgICAgICBpb24tY29se1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tY2FyZHtcclxuICAgICAgICAgICAgICAgLy8gbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjA1YjA1O1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMHB4ICMzMjMyMzM7XHJcbiAgICAgICAgICAgICAgICBpb24tY2FyZC10aXRsZXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC04cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjdyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZWVlYWU5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAjY2FyZDF7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjY2FyZDJ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNnB4OyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjY2FyZDN7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjZweDsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI2NhcmQ0e1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjZweDsgXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59ICJdfQ== */"

/***/ }),

/***/ "./src/app/roleoptionmainview/roleoptionmainview.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/roleoptionmainview/roleoptionmainview.page.ts ***!
  \***************************************************************/
/*! exports provided: RoleoptionmainviewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleoptionmainviewPage", function() { return RoleoptionmainviewPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




var RoleoptionmainviewPage = /** @class */ (function () {
    function RoleoptionmainviewPage(navCtrl, router) {
        this.navCtrl = navCtrl;
        this.router = router;
    }
    RoleoptionmainviewPage.prototype.ngOnInit = function () {
    };
    RoleoptionmainviewPage.prototype.redirectToUrl = function (tag) {
        if (tag == "QR") {
            this.router.navigateByUrl('choosecategory');
            // this.navCtrl.navigateRoot("choosecategory");
        }
        else if (tag == "EMPLOYEE") {
            this.router.navigateByUrl('employeeqrgeneration');
        }
        else if (tag == "TRAINER") {
            this.router.navigateByUrl('register');
        }
        else {
            // For Help
        }
    };
    RoleoptionmainviewPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roleoptionmainview',
            template: __webpack_require__(/*! ./roleoptionmainview.page.html */ "./src/app/roleoptionmainview/roleoptionmainview.page.html"),
            styles: [__webpack_require__(/*! ./roleoptionmainview.page.scss */ "./src/app/roleoptionmainview/roleoptionmainview.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RoleoptionmainviewPage);
    return RoleoptionmainviewPage;
}());



/***/ })

}]);
//# sourceMappingURL=roleoptionmainview-roleoptionmainview-module.js.map