webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-content\">\r\n    <header>\r\n        <app-navbar [show]=\"showNavbar\" [logined]=\"isLogined\" [fullName]=\"fullName\" [username]=\"username\"></app-navbar>\r\n    </header>\r\n    <router-outlet></router-outlet>\r\n    <footer *ngIf=\"showFooter\">\r\n        <div class=\"container\">\r\n            <p>Copyright &copy; Thau Nguyen - Ripple</p>\r\n        </div>\r\n    </footer>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.title = 'app works!';
        this.showNavbar = true;
        this.isLogined = false;
        this.fullName = '';
        this.username = '';
        this.showFooter = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var self = this;
        self.router.events
            .subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                self.showNavbar = true;
                self.showFooter = true;
                if (event.url === '/login' || event.url === '/sign-up') {
                    self.showNavbar = false;
                    self.showFooter = false;
                }
                else if (localStorage.getItem('currentUser')) {
                    var currentUser = self.loginService.getCurrentUser();
                    self.isLogined = true;
                    self.fullName = currentUser.fullName;
                    self.username = currentUser.username;
                }
            }
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__list_list_component__ = __webpack_require__("../../../../../src/app/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__shared_httpConnector__ = __webpack_require__("../../../../../src/app/shared/httpConnector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_home_page_service__ = __webpack_require__("../../../../../src/app/shared/home-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_user_page_service__ = __webpack_require__("../../../../../src/app/shared/user-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_sign_up_service__ = __webpack_require__("../../../../../src/app/shared/sign-up.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_new_story_service__ = __webpack_require__("../../../../../src/app/shared/new-story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__shared_view_story_service__ = __webpack_require__("../../../../../src/app/shared/view-story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_page_user_page_component__ = __webpack_require__("../../../../../src/app/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__learn_more_learn_more_component__ = __webpack_require__("../../../../../src/app/learn-more/learn-more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__simple_tiny_simple_tiny_component__ = __webpack_require__("../../../../../src/app/simple-tiny/simple-tiny.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__new_story_new_story_component__ = __webpack_require__("../../../../../src/app/new-story/new-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__story_list_story_list_component__ = __webpack_require__("../../../../../src/app/story-list/story-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__view_story_view_story_component__ = __webpack_require__("../../../../../src/app/view-story/view-story.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_8__sign_up_sign_up_component__["a" /* SignUpComponent */],
            __WEBPACK_IMPORTED_MODULE_9__list_list_component__["a" /* ListComponent */],
            __WEBPACK_IMPORTED_MODULE_18__user_page_user_page_component__["a" /* UserPageComponent */],
            __WEBPACK_IMPORTED_MODULE_19__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_20__learn_more_learn_more_component__["a" /* LearnMoreComponent */],
            __WEBPACK_IMPORTED_MODULE_21__simple_tiny_simple_tiny_component__["a" /* SimpleTinyComponent */],
            __WEBPACK_IMPORTED_MODULE_22__new_story_new_story_component__["a" /* NewStoryComponent */],
            __WEBPACK_IMPORTED_MODULE_23__story_list_story_list_component__["a" /* StoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_24__view_story_view_story_component__["a" /* ViewStoryComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* AppRoutes */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__shared_httpConnector__["a" /* HttpConnector */],
            __WEBPACK_IMPORTED_MODULE_11__shared_home_page_service__["a" /* HomePageService */],
            __WEBPACK_IMPORTED_MODULE_12__shared_user_page_service__["a" /* UserPageService */],
            __WEBPACK_IMPORTED_MODULE_13__shared_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_14__shared_sign_up_service__["a" /* SignupService */],
            __WEBPACK_IMPORTED_MODULE_15__shared_auth_guard_service__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_16__shared_new_story_service__["a" /* NewStoryService */],
            __WEBPACK_IMPORTED_MODULE_17__shared_view_story_service__["a" /* ViewStoryService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__ = __webpack_require__("../../../../../src/app/home-page/home-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_page_user_page_component__ = __webpack_require__("../../../../../src/app/user-page/user-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up_component__ = __webpack_require__("../../../../../src/app/sign-up/sign-up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_auth_guard_service__ = __webpack_require__("../../../../../src/app/shared/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__learn_more_learn_more_component__ = __webpack_require__("../../../../../src/app/learn-more/learn-more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_story_new_story_component__ = __webpack_require__("../../../../../src/app/new-story/new-story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_story_view_story_component__ = __webpack_require__("../../../../../src/app/view-story/view-story.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'user/:username', component: __WEBPACK_IMPORTED_MODULE_4__user_page_user_page_component__["a" /* UserPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__shared_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_5__sign_up_sign_up_component__["a" /* SignUpComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_login_component__["a" /* LoginComponent */] },
    { path: 'learn-more', component: __WEBPACK_IMPORTED_MODULE_7__learn_more_learn_more_component__["a" /* LearnMoreComponent */] },
    { path: 'new-story', component: __WEBPACK_IMPORTED_MODULE_8__new_story_new_story_component__["a" /* NewStoryComponent */] },
    { path: 'view-story/:story-id', component: __WEBPACK_IMPORTED_MODULE_9__view_story_view_story_component__["a" /* ViewStoryComponent */] }
];
var AppRoutes = (function () {
    function AppRoutes() {
    }
    return AppRoutes;
}());
AppRoutes = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: false })],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]]
    })
], AppRoutes);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 20px;\r\n}\r\n\r\n.btn-create, .form-create {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.img-intro {\r\n    height: 300px;\r\n    margin-top: 10px;\r\n    \r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/homepage.jpg") + ");\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n}\r\n\r\n.divider {\r\n    margin: 30px 0;\r\n    height: 1px;\r\n}\r\n\r\n.header {\r\n    border-bottom: 1px solid rgba(0,0,0,.15)!important;\r\n    padding-bottom: 18px;\r\n}\r\n\r\n.title { \r\n    padding-bottom: 20px;\r\n    border-bottom: 1px solid rgba(0,0,0,.54);\r\n    font-size: 22px;\r\n    font-size: 500;\r\n}\r\n\r\n.text {\r\n    margin-top: 20px;\r\n}\r\n\r\n.more-info {\r\n    margin-top: 70px;\r\n}\r\n\r\n.story-list {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\">\r\n      <h2>As you live your days, so you LIVE YOUR LIFE</h2>\r\n      <p>The only reason we've made the transformation from there to here is that, somewhere along the way, we've had the good\r\n        fortune of being exposed to the slight edge.\r\n      </p>\r\n      <p>\r\n        The transformation from beach bum to millionaire did not happen overnight. It was a long, slow, at times painful roller-coaster\r\n        process.\r\n      </p>\r\n      <p>\r\n        <b>We create a powerful tool that you follow your DREAM and bring it come TRUE.</b>\r\n      </p>\r\n      <a class=\"btn btn-primary\" href=\"sign-up\">Get started</a>\r\n      <a class=\"btn btn-outline-secondary\" href=\"learn-more\">Learn more</a>\r\n    </div>\r\n    <div class=\"col-md-6 img-intro\">\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"story-list row\">\r\n    <div class=\"col-md-4\" *ngFor=\"let story of storyList\">\r\n      <div class=\"story-card\">\r\n        <img class=\"story-image\" />\r\n        <div class=\"story-wrapper\">\r\n          <h5 class=\"story-title\" (click)=\"viewStory(story)\">{{story.title}}</h5>\r\n          <div class=\"story-content\" [innerHTML]=\"story.content\"></div>\r\n          <div class=\"user-story\">\r\n            <img class=\"user-image\" [src]=\"story.userImg\" />\r\n            <div class=\"story-info\">\r\n              <p class=\"text-primary\">{{story.fullName}}</p>\r\n              <span class=\"text-secondary\">{{story.dateDisplay}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"more-info\">\r\n    <div class=\"header\">\r\n      <span class=\"title\">\r\n        <a>We have to stop procrastinating</a>\r\n      </span>\r\n    </div>\r\n    <p class=\"text\">\r\n      And it's all because of what I've learned about beating FEAR, conquering PROCRASTINATION and doing impossible things.\r\n    </p>\r\n    <p>Your payoff and your rewards and your GROWTH and your MASTERY and your SUCCESS lies when you go to the places that scares\r\n      you, when you do difficult things, when you take the difficult projects on, when you read the difficult books, when\r\n      you run longer than you've ever run, when you try new things that STRETCH you. THAT IS HOW YOU GET MORE WILLPOWER.\r\n    </p>\r\n\r\n    <div class=\"divider\"></div>\r\n    <div class=\"header\">\r\n      <span class=\"title\">\r\n        <a>Master your day, design your life</a>\r\n      </span>\r\n    </div>\r\n    <p class=\"text\">\r\n      Do anything LONG ENOUGH and you will get depth of INSIGHT and UNDERSTANNDING about it. They'll call you a GURU.\r\n    </p>\r\n    <p>\r\n      For the nest 90 days, spend the FIRST 90 minutes of your workday on SIGNLE most game-changing opportunity, move the NEEDLE\r\n      in your insdustry.\r\n    </p>\r\n\r\n    <div class=\"divider\"></div>\r\n    <div class=\"header\">\r\n      <span class=\"title\">\r\n        <a>Discovery your destiny</a>\r\n      </span>\r\n    </div>\r\n    <p class=\"text\">\r\n      Be so KNOWLEDGEABLE, COMPETENT and BRILLIANT at what yo do, that firm can not run WITHOUT you. Become INDISPENSABLE.\r\n    </p>\r\n    <p>\r\n      Each day, life will send you little windows of OPPORTUNITY. Your DESTINY will ultimately be defined by how you respond to\r\n      these windows of opportunity. SHRINK from them and your life will be small.\r\n    </p>\r\n  </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/home-page/home-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_page_service__ = __webpack_require__("../../../../../src/app/shared/user-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePageComponent = (function () {
    function HomePageComponent(userPageService, loginService, router) {
        this.userPageService = userPageService;
        this.loginService = loginService;
        this.router = router;
        this.storyList = [
            {
                _id: '5a056f41734d1d68d42ce314',
                title: 'This is story',
                content: '<p>This is content British airline EasyJet teamed up with Wright Electric to build aircrafts powered by batteries. So far, it has built a two-seater prototype with plans of a 120-seater plane in 10 years.</p>',
                date: 1510366896400
            },
            {
                _id: '5a056f41734d1d68d42ce314',
                title: 'This is story',
                content: '<p>This is content British airline EasyJet teamed up with Wright Electric to build aircrafts powered by batteries. So far, it has built a two-seater prototype with plans of a 120-seater plane in 10 years.</p>',
                date: 1510366896400
            },
            {
                _id: '5a056f41734d1d68d42ce314',
                title: 'This is story',
                content: '<p>This is content British airline EasyJet teamed up with Wright Electric to build aircrafts powered by batteries. So far, it has built a two-seater prototype with plans of a 120-seater plane in 10 years.</p>',
                date: 1510366896400
            }
        ];
    }
    HomePageComponent.prototype.ngOnInit = function () {
        this.currentUser = this.loginService.getCurrentUser();
        this.getStoryList();
    };
    HomePageComponent.prototype.getStoryList = function () {
        var _this = this;
        this.userPageService.getAllStoryList().subscribe(function (data) {
            _this.storyList = data.map(function (d) {
                var date = new Date(d.date);
                d.dateDisplay = date.toLocaleDateString();
                d.content = d.content.substring(0, 100) + '...';
                d.userImg = _this.loginService.getUserImage(d.email);
                return d;
            });
        });
    };
    HomePageComponent.prototype.viewStory = function (story) {
        var link = '/view-story/' + story.title.toLowerCase().replace(/\s/g, '-') + '@' + story._id;
        this.router.navigate([link]);
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__("../../../../../src/app/home-page/home-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home-page/home-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_page_service__["a" /* UserPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_page_service__["a" /* UserPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], HomePageComponent);

var _a, _b, _c;
//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/learn-more/learn-more.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".article-img {\r\n    height: 500px;\r\n    width: 100%;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/cover2.png") + ");\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n    margin: 20px auto;\r\n}\r\n\r\n.learn-more {\r\n    margin-top: 20px;\r\n}\r\n\r\n.learn-more p {\r\n    text-align: justify;\r\n}\r\n\r\n.container {\r\n    max-width: 800px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/learn-more/learn-more.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container learn-more\">\n  <h2>Do the thing, and you will have the power</h2>\n  <img class=\"article-img\">\n  <p>To find the path to success, you have to back up one more step. It's the understanding behind the \n    attitudes that are behind the actions.\n  </p>\n  <p>It's the philosophy. That's the missing ingredient, the secret ingredient. The first ingredient.</p>\n  <p>Yes, you have to know the winning how-to actions, and you have to possess the winning attitudes-\n    but what generates all that and keeps it all in place is your philosophy. Your philosophy is what you know,\n    how you hold it, and how it affects what you do. How do you think about simple, everyday things.\n  </p>\n  <p>\n    A positive philosophy turns into a positive attitude, which turns into positive actions, which turns into\n    positive results, which turns into positive lifestyle. A positive life.\n  </p>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/learn-more/learn-more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LearnMoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LearnMoreComponent = (function () {
    function LearnMoreComponent() {
    }
    LearnMoreComponent.prototype.ngOnInit = function () {
    };
    return LearnMoreComponent;
}());
LearnMoreComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-learn-more',
        template: __webpack_require__("../../../../../src/app/learn-more/learn-more.component.html"),
        styles: [__webpack_require__("../../../../../src/app/learn-more/learn-more.component.css")]
    }),
    __metadata("design:paramtypes", [])
], LearnMoreComponent);

//# sourceMappingURL=learn-more.component.js.map

/***/ }),

/***/ "../../../../../src/app/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".action {\r\n    \r\n}\r\n\r\n.list-group-item {\r\n    cursor: pointer;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let item of items; let i = index\">\r\n      <div class=\"actions pull-right\">\r\n          <i class=\"fa fa-ellipsis-h hover-icon icon\" data-toggle=\"dropdown\"></i>      \r\n          <div class=\"dropdown-menu dropdown-menu-right\">\r\n              <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"delete(item)\">Delete</a>\r\n          </div>\r\n      </div>\r\n    <h5 (click)=\"complete(item)\" [ngClass]=\"{'text-success': item.done}\">{{ i + 1}}. {{ item.title}}</h5>\r\n  </li> \r\n</ul>\r\n"

/***/ }),

/***/ "../../../../../src/app/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = (function () {
    function ListComponent() {
        this.modifyMode = false;
        this.clickDelete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.complete = function (item) {
        item.done = !item.done;
    };
    ListComponent.prototype.delete = function (item) {
        this.clickDelete.emit(item);
    };
    return ListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], ListComponent.prototype, "modifyMode", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ListComponent.prototype, "clickDelete", void 0);
ListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/list/list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ListComponent);

//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-wrapper {    \r\n    width: 100%;\r\n    padding: 20px;\r\n}\r\n\r\n.login-wrapper .fa {\r\n    width: 16px;\r\n    height: 16px;\r\n}\r\n\r\n.login-wrapper .submit {\r\n    width: 100%;\r\n}\r\n\r\n@media (min-width: 768px){\r\n    .login-wrapper {\r\n        width: 400px;\r\n        padding: 50px 0;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-wrapper container\">\r\n  <h1 class=\"green text-center\">Ripple</h1>\r\n  <p class=\"text-center\"><strong>Log in</strong></p>\r\n  <hr/>\r\n  <div *ngIf=\"msg\" class=\"alert alert-danger\" role=\"alert\">\r\n    {{msg}}\r\n  </div>\r\n  <form class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-user\"></i></span>\r\n          <input type=\"text\" class=\"form-control\" name=\"usernmae\" [(ngModel)]=\"username\" placeholder=\"Username\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"><i class=\"fa fa-lock\"></i></span>\r\n          <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\" />\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-12\">\r\n        <div class=\"checkbox\"><label><input type=\"checkbox\">Remember me</label></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\"> \r\n      <div class=\"col-sm-12\">\r\n        <button type=\"submit\" class=\"btn btn-primary submit\" (click)=\"login()\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n  <hr/>\r\n  <p class=\"text-center\"><a>Forgot your password ?</a></p>\r\n  <p class=\"text-center\">Don't have an account ? <a href=\"sign-up\">Sign up</a></p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.username = '';
        this.password = '';
        this.msg = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        var data = {
            username: this.username,
            password: this.password
        };
        this.loginService.login(data).subscribe(function (user) {
            if (user === true) {
                return;
            }
            if (user) {
                _this.msg = 'Incorrect password !';
            }
            else {
                _this.msg = 'Incorrect username !';
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_login_service__["a" /* LoginService */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"show\" class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n  <a class=\"navbar-brand\" href=\"#\">Ripple</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" href=\"#\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n    <ul *ngIf=\"!logined\" class=\"navbar-nav my-2 my-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"login\">Sign in</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"sign-up\">Sign up</a>\r\n      </li>\r\n    </ul>\r\n    <ul *ngIf=\"logined && fullName\" class=\"navbar-nav my-2 my-lg-0\">\r\n      <li class=\"nav-item\" (click)=\"goToUserPage()\">\r\n        <a class=\"nav-link\" href=\"javascript:;\">\r\n            <span class=\"fa fa-user\"></span>\r\n            <span>{{fullName}}</span>\r\n        </a>        \r\n      </li>\r\n      <li class=\"nav-item dropdown\">\r\n        <a class=\"nav-link dropdown-toggle\" href=\"javascript:;\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n          aria-expanded=\"false\">\r\n        </a>\r\n        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdown\">\r\n          <a class=\"dropdown-item\" href=\"javascript:;\">Settings</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"signout()\">Logout</a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.show = true;
        this.logined = true;
        this.fullName = '';
        this.username = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.ngOnChanges = function (changes) {
    };
    NavbarComponent.prototype.signout = function () {
        this.loginService.logout();
    };
    NavbarComponent.prototype.goToUserPage = function () {
        this.router.navigate(['/user/' + this.username]);
    };
    return NavbarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], NavbarComponent.prototype, "show", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], NavbarComponent.prototype, "logined", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], NavbarComponent.prototype, "fullName", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], NavbarComponent.prototype, "username", void 0);
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-story/new-story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-story/new-story.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <button class=\"btn btn-primary pull-right\" (click)=\"publish()\">Publish</button>    \r\n  <h3>Title</h3>\r\n  <input class=\"form-control\" type=\"text\" name=\"storyTitle\" [(ngModel)]=\"title\" />\r\n  <app-simple-tiny\r\n    [elementId]=\"'my-editor-id'\"\r\n    (onEditorKeyup)=\"keyupHandlerFunction($event)\">\r\n  </app-simple-tiny>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/new-story/new-story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewStoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_new_story_service__ = __webpack_require__("../../../../../src/app/shared/new-story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewStoryComponent = (function () {
    function NewStoryComponent(newStoryService, loginService, router) {
        this.newStoryService = newStoryService;
        this.loginService = loginService;
        this.router = router;
    }
    NewStoryComponent.prototype.ngOnInit = function () {
        this.currentUser = this.loginService.getCurrentUser();
    };
    NewStoryComponent.prototype.keyupHandlerFunction = function (content) {
        this.content = content;
    };
    NewStoryComponent.prototype.publish = function () {
        var _this = this;
        if (this.currentUser && this.currentUser.id) {
            var now = new Date();
            var data = {
                title: this.title,
                content: this.content,
                userId: this.currentUser.id,
                date: now.getTime(),
                fullName: this.currentUser.fullName,
                email: this.currentUser.email
            };
            this.newStoryService.publishStory(data).subscribe(function () {
                var link = '/user/' + _this.currentUser.username;
                _this.router.navigate([link]);
            });
        }
    };
    return NewStoryComponent;
}());
NewStoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-new-story',
        template: __webpack_require__("../../../../../src/app/new-story/new-story.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-story/new-story.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_new_story_service__["a" /* NewStoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_new_story_service__["a" /* NewStoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], NewStoryComponent);

var _a, _b, _c;
//# sourceMappingURL=new-story.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        return true;
        // if (localStorage.getItem('currentUser')) {
        //     return true;
        // }
        // this.router.navigate(['/login']);
        // return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/home-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpConnector__ = __webpack_require__("../../../../../src/app/shared/httpConnector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePageService = (function () {
    function HomePageService(httpConnector) {
        this.httpConnector = httpConnector;
    }
    return HomePageService;
}());
HomePageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */]) === "function" && _a || Object])
], HomePageService);

var _a;
//# sourceMappingURL=home-page.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/httpConnector.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpConnector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpConnector = (function () {
    function HttpConnector(http) {
        this.http = http;
    }
    HttpConnector.prototype.get = function (url, extractData) {
        return this.http.get(this.handleUrl(url))
            .map(extractData ? extractData : this.extractData)
            .catch(this.handleError);
    };
    HttpConnector.prototype.post = function (url, body, options, extractData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */](options || { 'content-type': 'application/json' });
        var _options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.handleUrl(url), body, _options)
            .map(extractData ? extractData : this.extractData)
            .catch(this.handleError);
    };
    HttpConnector.prototype.delete = function (url) {
        return this.http.delete(this.handleUrl(url))
            .map(this.extractData)
            .catch(this.handleError);
    };
    HttpConnector.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    HttpConnector.prototype.handleUrl = function (url) {
        return url;
    };
    HttpConnector.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    return HttpConnector;
}());
HttpConnector = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HttpConnector);

var _a;
//# sourceMappingURL=httpConnector.js.map

/***/ }),

/***/ "../../../../../src/app/shared/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__httpConnector__ = __webpack_require__("../../../../../src/app/shared/httpConnector.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5__ = __webpack_require__("../../../../md5/md5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_md5___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_md5__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginService = (function () {
    function LoginService(httpConnector, router) {
        this.httpConnector = httpConnector;
        this.router = router;
        this.currentUser = {
            id: '',
            fullName: 'Thau Nguyen',
            username: '',
            email: ''
        };
    }
    LoginService.prototype.login = function (data) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].create(function (observer) {
            _this.getUserList().subscribe(function (userList) {
                var user = _this.getUserByUserName(userList, data.username);
                if (user && user.password === data.password) {
                    var link = '/user/' + user.username;
                    localStorage.setItem('currentUser', JSON.stringify({ username: user.username, fullName: user.fullName, email: user.email, id: user._id }));
                    _this.currentUser = user;
                    _this.router.navigate([link]);
                    observer.next(true);
                }
                else {
                    observer.next(user);
                }
                observer.complete();
            });
        });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    };
    LoginService.prototype.getCurrentUser = function () {
        var user = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser = Object.assign(this.currentUser, user);
        return this.currentUser;
    };
    LoginService.prototype.getUserImage = function (email) {
        return 'https://www.gravatar.com/avatar/' + __WEBPACK_IMPORTED_MODULE_4_md5__(email) + '?s=200';
    };
    LoginService.prototype.getUserList = function () {
        var url = 'api/users';
        return this.httpConnector.get(url);
    };
    LoginService.prototype.getUserById = function (id) {
        var url = 'api/user/' + id;
        return this.httpConnector.get(url);
    };
    LoginService.prototype.getUserByUserName = function (userList, username) {
        for (var i = 0, len = userList.length; i < len; i++) {
            if (userList[i].username === username) {
                return userList[i];
            }
        }
        return null;
    };
    return LoginService;
}());
LoginService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__httpConnector__["a" /* HttpConnector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__httpConnector__["a" /* HttpConnector */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginService);

var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/new-story.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewStoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpConnector__ = __webpack_require__("../../../../../src/app/shared/httpConnector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewStoryService = (function () {
    function NewStoryService(httpConnector) {
        this.httpConnector = httpConnector;
    }
    NewStoryService.prototype.publishStory = function (data) {
        var url = 'api/stories';
        return this.httpConnector.post(url, data);
    };
    return NewStoryService;
}());
NewStoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */]) === "function" && _a || Object])
], NewStoryService);

var _a;
//# sourceMappingURL=new-story.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/sign-up.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpConnector__ = __webpack_require__("../../../../../src/app/shared/httpConnector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupService = (function () {
    function SignupService(httpConnector) {
        this.httpConnector = httpConnector;
    }
    SignupService.prototype.register = function (data) {
        var url = 'api/users';
        return this.httpConnector.post(url, data);
    };
    return SignupService;
}());
SignupService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */]) === "function" && _a || Object])
], SignupService);

var _a;
//# sourceMappingURL=sign-up.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/user-page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpConnector__ = __webpack_require__("../../../../../src/app/shared/httpConnector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPageService = (function () {
    function UserPageService(httpConnector) {
        this.httpConnector = httpConnector;
    }
    UserPageService.prototype.getTaskList = function (userId) {
        var url = 'api/tasks?userId=' + userId;
        return this.httpConnector.get(url);
    };
    UserPageService.prototype.saveTask = function (data) {
        var url = 'api/tasks';
        return this.httpConnector.post(url, data);
    };
    UserPageService.prototype.deleteTask = function (id) {
        var url = 'api/task/' + id;
        return this.httpConnector.delete(url);
    };
    UserPageService.prototype.getStoryList = function (userId) {
        var url = 'api/stories?userId=' + userId;
        return this.httpConnector.get(url);
    };
    UserPageService.prototype.getAllStoryList = function () {
        var url = 'api/stories';
        return this.httpConnector.get(url);
    };
    UserPageService.prototype.deleteStory = function (id) {
        var url = 'api/story/' + id;
        return this.httpConnector.delete(url);
    };
    return UserPageService;
}());
UserPageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */]) === "function" && _a || Object])
], UserPageService);

var _a;
//# sourceMappingURL=user-page.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/view-story.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewStoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__httpConnector__ = __webpack_require__("../../../../../src/app/shared/httpConnector.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewStoryService = (function () {
    function ViewStoryService(httpConnector) {
        this.httpConnector = httpConnector;
    }
    ViewStoryService.prototype.getStory = function (id) {
        var url = 'api/story/' + id;
        return this.httpConnector.get(url);
    };
    return ViewStoryService;
}());
ViewStoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__httpConnector__["a" /* HttpConnector */]) === "function" && _a || Object])
], ViewStoryService);

var _a;
//# sourceMappingURL=view-story.service.js.map

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".signup-wrapper {\r\n    padding: 40px 20px;\r\n}\r\n.signup-wrapper form {\r\n    width: 100%;\r\n    margin: 30px auto;\r\n}\r\n\r\n.signup-wrapper .submit, .login-wrapper .submit {\r\n    width: 100%;\r\n}\r\n\r\n@media(min-width: 768px){\r\n    .signup-wrapper form {\r\n        width: 60%;\r\n        margin: 30px auto;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"signup-wrapper container\">\r\n  <div *ngIf=\"!signupSuccess\">\r\n      <h3 class=\"green text-center\">Fill information to become member</h3>\r\n      <p class=\"text-center\"><b>Give it a try. Always free</b>.</p>  \r\n      <p class=\"text-center\">We absolutely provide free and insight tools which help you create a stunning and desirable lifestyle.</p> \r\n      <hr/>\r\n      <form class=\"\">\r\n        <div class=\"form-group form-group-lg\">\r\n          <label class=\"control-label\" for=\"email\">Full Name*</label>\r\n          <div class=\"\">\r\n            <input type=\"text\" class=\"form-control\" name=\"fullname\" [(ngModel)]=\"fullName\" placeholder=\"Full Name\">\r\n          </div>\r\n        </div>    \r\n        <div class=\"form-group form-group-lg\">\r\n          <label class=\"control-label\" for=\"pwd\">Email*</label>\r\n          <div class=\"\"> \r\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group form-group-lg\">\r\n          <label class=\"control-label \" for=\"pwd\">Username*</label>\r\n          <div class=\"\"> \r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\" placeholder=\"Username\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group form-group-lg\">\r\n          <label class=\"control-label \" for=\"pwd\">Password*</label>\r\n          <div class=\"\"> \r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group form-group-lg\">\r\n          <label class=\"control-label \" for=\"pwd\">Confirm Password*</label>\r\n          <div class=\"\"> \r\n            <input type=\"password\" class=\"form-control\" name=\"confirmPassword\" [(ngModel)]=\"confirmPassword\" placeholder=\"Confirm Password\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group form-group-lg\">\r\n          <span>(*) Required field</span>      \r\n        </div>\r\n        <div class=\"form-group form-group-lg\"> \r\n          <div class=\"\">\r\n            <button type=\"submit\" class=\"btn btn-primary btn-lg submit\" [disabled]=\"!isValid()\" (click)=\"register()\">Submit</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n  </div>\r\n  \r\n  <div *ngIf=\"signupSuccess\">\r\n    <h2 class=\"text-success\">Congratulation!</h2>\r\n    <a href=\"login\">Please login</a>\r\n  </div>  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/sign-up/sign-up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_sign_up_service__ = __webpack_require__("../../../../../src/app/shared/sign-up.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = (function () {
    function SignUpComponent(signupService) {
        this.signupService = signupService;
        this.fullName = '';
        this.email = '';
        this.username = '';
        this.password = '';
        this.confirmPassword = '';
        this.signupSuccess = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.register = function () {
        var _this = this;
        var data = {
            fullName: this.fullName,
            email: this.email,
            username: this.username,
            password: this.password
        };
        this.signupService.register(data).subscribe(function () {
            _this.signupSuccess = true;
        });
    };
    SignUpComponent.prototype.isValid = function () {
        return this.fullName && this.email && this.username &&
            this.password && this.password === this.confirmPassword;
    };
    return SignUpComponent;
}());
SignUpComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sign-up',
        template: __webpack_require__("../../../../../src/app/sign-up/sign-up.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sign-up/sign-up.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_sign_up_service__["a" /* SignupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_sign_up_service__["a" /* SignupService */]) === "function" && _a || Object])
], SignUpComponent);

var _a;
//# sourceMappingURL=sign-up.component.js.map

/***/ }),

/***/ "../../../../../src/app/simple-tiny/simple-tiny.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tiny-mce {\r\n    margin: 20px 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/simple-tiny/simple-tiny.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleTinyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinymce__ = __webpack_require__("../../../../tinymce/tinymce.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_tinymce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_tinymce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tinymce_themes_modern__ = __webpack_require__("../../../../tinymce/themes/modern/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_tinymce_themes_modern___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_tinymce_themes_modern__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tinymce_plugins_table__ = __webpack_require__("../../../../tinymce/plugins/table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_tinymce_plugins_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_tinymce_plugins_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tinymce_plugins_link__ = __webpack_require__("../../../../tinymce/plugins/link/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_tinymce_plugins_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_tinymce_plugins_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_paste__ = __webpack_require__("../../../../tinymce/plugins/paste/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_paste___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_tinymce_plugins_paste__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SimpleTinyComponent = (function () {
    function SimpleTinyComponent() {
        this.onEditorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    SimpleTinyComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: ['link', 'paste', 'table'],
            skin_url: 'assets/skins/lightgray',
            height: '480',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
            },
        });
    };
    SimpleTinyComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    return SimpleTinyComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], SimpleTinyComponent.prototype, "elementId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], SimpleTinyComponent.prototype, "onEditorKeyup", void 0);
SimpleTinyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-simple-tiny',
        template: "<div class=\"tiny-mce\"><textarea id=\"{{elementId}}\"></textarea></div>",
        styles: [__webpack_require__("../../../../../src/app/simple-tiny/simple-tiny.component.css")]
    })
], SimpleTinyComponent);

//# sourceMappingURL=simple-tiny.component.js.map

/***/ }),

/***/ "../../../../../src/app/story-list/story-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group {\r\n    margin-top: 30px;\r\n}\r\n\r\n.story-title {\r\n    cursor: pointer;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/story-list/story-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\n  <li class=\"list-group-item\" *ngFor=\"let item of items\">\n    <div class=\"actions pull-right\">\n        <i class=\"fa fa-ellipsis-h hover-icon icon\" data-toggle=\"dropdown\"></i>      \n        <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"delete(item)\">Delete</a>\n            <a class=\"dropdown-item\" href=\"javascript:;\" (click)=\"edit(item)\">Edit</a>                       \n        </div>\n    </div>\n    <div class=\"user-story\">\n        <img class=\"user-image\" [src]=\"item.userImg\" />\n        <div class=\"story-info\">\n          <p class=\"text-primary\">{{item.fullName}}</p>\n          <span class=\"text-secondary\">{{item.dateDisplay || \"\"}}</span>\n        </div>\n    </div>    \n    <h5 class=\"story-title\" (click)=\"view(item)\">{{ item.title }}</h5>\n    <div [innerHTML]=\"item.content\"></div>\n  </li> \n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/story-list/story-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StoryListComponent = (function () {
    function StoryListComponent() {
        this.viewStory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.deleteStory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.editStory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    StoryListComponent.prototype.ngOnInit = function () {
    };
    StoryListComponent.prototype.view = function (story) {
        this.viewStory.emit(story);
    };
    StoryListComponent.prototype.delete = function (story) {
        this.deleteStory.emit(story);
    };
    StoryListComponent.prototype.edit = function (story) {
        this.editStory.emit(story);
    };
    return StoryListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], StoryListComponent.prototype, "userImg", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], StoryListComponent.prototype, "currentUser", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], StoryListComponent.prototype, "items", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], StoryListComponent.prototype, "viewStory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _b || Object)
], StoryListComponent.prototype, "deleteStory", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _c || Object)
], StoryListComponent.prototype, "editStory", void 0);
StoryListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-story-list',
        template: __webpack_require__("../../../../../src/app/story-list/story-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/story-list/story-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StoryListComponent);

var _a, _b, _c;
//# sourceMappingURL=story-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user-page/user-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-create, .form-create {\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.cover {\r\n    position: relative;\r\n}\r\n\r\n.cover-img {\r\n    height: 150px;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/cover.jpg") + ");\r\n    background-position: top center;\r\n    background-repeat: no-repeat;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.profile-img {\r\n    border-radius: 50%;\r\n    position: absolute;    \r\n    border: 5px solid #fff;\r\n\r\n    width: 100px;\r\n    height: 100px;\r\n    left: 10px;\r\n    bottom: 120px;\r\n}\r\n\r\n.profile-img img {\r\n    border-radius: 50%;\r\n    height: 100%;\r\n    left: 0;\r\n    position: absolute;\r\n    top: 0;\r\n    width: 100%;\r\n}\r\n\r\n.nav {\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    background: #fff;\r\n}\r\n\r\n.tab-content {\r\n    margin: 0 auto;\r\n    padding: 15px 10px;\r\n    background: #fff;\r\n    min-height: 250px;\r\n}\r\n\r\n.nav-pills .nav-link.active, .nav-pills .show>.nav-link {\r\n    border-bottom: 1px solid #007bff;\r\n    background: none;\r\n    color: #007bff;\r\n}\r\n\r\n.nav-pills .nav-link {\r\n    border-radius: 0;\r\n}\r\n\r\n.row.content {\r\n    margin: 0;\r\n}\r\n\r\n.m-info {\r\n    padding: 30px 10px 10px 10px;\r\n\r\n}\r\n\r\n.info {\r\n    display: none;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    .cover-img {\r\n        height: 350px;\r\n    }\r\n\r\n    .profile-img {\r\n        height: 200px;\r\n        width: 200px;\r\n        bottom: -20px;\r\n        left: 100px;\r\n    }\r\n\r\n    .m-info {\r\n        display: none;\r\n    }\r\n\r\n    .info {\r\n        display: block;\r\n    }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-page/user-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-page\">\r\n\r\n  <div class=\"cover\">\r\n    <div class=\"cover-img\"></div>\r\n    <div class=\"profile-img\">\r\n      <img src=\"{{userImg}}\" />\r\n    </div>\r\n    <div class=\"m-info\">\r\n      <h5>{{currentUser.fullName}}</h5>\r\n      <p>@{{currentUser.username}}</p>\r\n    </div>\r\n    <ul class=\"nav nav-pills mb-3 box-shadow\" id=\"pills-tab\" role=\"tablist\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" id=\"pills-task-tab\" data-toggle=\"pill\" href=\"#pills-task\" role=\"tab\" aria-controls=\"pills-task\"\r\n          aria-selected=\"true\">Tasks</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"pills-story-tab\" data-toggle=\"pill\" href=\"#pills-story\" role=\"tab\" aria-controls=\"pills-story\" aria-selected=\"false\">Stories</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" id=\"pills-mentor-tab\" data-toggle=\"pill\" href=\"#pills-mentor\" role=\"tab\" aria-controls=\"pills-mentor\"\r\n          aria-selected=\"false\">Mentors</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"row content\">\r\n    <div class=\"offset-md-1 col-md-2 info\">\r\n      <h5>{{currentUser.fullName}}</h5>\r\n      <p>@{{currentUser.username}}</p>\r\n      <span>\r\n        <i class=\"fa fa-calendar\"></i>Joined Nov 2017</span>\r\n    </div>\r\n    <div class=\"col-md-6 tab-content\" id=\"pills-tabContent\">\r\n      <div class=\"tab-pane fade show active\" id=\"pills-task\" role=\"tabpanel\" aria-labelledby=\"pills-task-tab\">\r\n        <button *ngIf=\"!showCreateInput\" class=\"btn btn-primary btn-create\" (click)=\"createTask()\">Create</button>\r\n        <form *ngIf=\"showCreateInput\" class=\"form-create\">\r\n          <div class=\"form-group row\">\r\n            <div class=\"col-sm-12\">\r\n              <input class=\"form-control form-control-sm\" type=\"text\" [(ngModel)]=\"taskTitle\" name=\"taskTitle\" />\r\n            </div>\r\n          </div>\r\n          <button class=\"btn btn-primary\" (click)=\"saveTask()\">Save</button> or\r\n          <a href=\"javascript:;\" (click)=\"cancelTask()\">cancel</a>\r\n        </form>\r\n        <app-list [items]=\"taskList\" (clickDelete)=\"deleteTask($event)\" [modifyMode]=\"modifyTaskList\"></app-list>\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"pills-story\" role=\"tabpanel\" aria-labelledby=\"pills-story-tab\">\r\n        <button class=\"btn btn-primary\" (click)=\"createStory()\">Create</button>\r\n        <app-story-list \r\n            [items]=\"storyList\" \r\n            [currentUser]=\"currentUser\"\r\n            (viewStory)=\"viewStory($event)\"\r\n            (deleteStory)=\"deleteStory($event)\"\r\n            (editStory)=\"editStory($event)\">\r\n        </app-story-list>\r\n      </div>\r\n      <div class=\"tab-pane fade\" id=\"pills-mentor\" role=\"tabpanel\" aria-labelledby=\"pills-mentor-tab\">Mentors</div>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n    </div>\r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/user-page/user-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_user_page_service__ = __webpack_require__("../../../../../src/app/shared/user-page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserPageComponent = (function () {
    function UserPageComponent(userPageService, loginService, router) {
        this.userPageService = userPageService;
        this.loginService = loginService;
        this.router = router;
        this.showCreateInput = false;
        this.modifyTaskList = false;
        this.taskList = [
            { title: 'Review my plans, my goals, my daily schedule' },
            { title: 'Review my plans, my goals, my daily schedule' }
        ];
        this.storyList = [
            {
                _id: '5a056f41734d1d68d42ce314',
                title: 'This is story',
                content: '<p>This is content British airline EasyJet teamed up with Wright Electric to build aircrafts powered by batteries. So far, it has built a two-seater prototype with plans of a 120-seater plane in 10 years.</p>',
                date: 1510366896400
            },
        ];
    }
    UserPageComponent.prototype.ngOnInit = function () {
        this.currentUser = this.loginService.getCurrentUser();
        this.userImg = this.loginService.getUserImage(this.currentUser.email);
        this.getTaskList();
        this.getStoryList();
    };
    UserPageComponent.prototype.getTaskList = function () {
        var _this = this;
        this.userPageService.getTaskList(this.currentUser.id).subscribe(function (data) {
            _this.taskList = data;
        });
    };
    UserPageComponent.prototype.getStoryList = function () {
        var _this = this;
        this.userPageService.getStoryList(this.currentUser.id).subscribe(function (data) {
            _this.storyList = data.map(function (d) {
                var date = new Date(d.date);
                d.dateDisplay = date.toLocaleDateString();
                d.content = d.content.substring(0, 100) + '...';
                d.userImg = _this.loginService.getUserImage(d.email);
                return d;
            });
        });
    };
    UserPageComponent.prototype.createTask = function () {
        this.taskTitle = '';
        this.showCreateInput = true;
    };
    UserPageComponent.prototype.saveTask = function () {
        var _this = this;
        this.showCreateInput = false;
        var data = {
            title: this.taskTitle,
            userId: this.currentUser.id
        };
        this.userPageService.saveTask(data).subscribe(function () {
            _this.getTaskList();
        });
    };
    UserPageComponent.prototype.cancelTask = function () {
        this.showCreateInput = false;
    };
    UserPageComponent.prototype.deleteTask = function (item) {
        var _this = this;
        this.userPageService.deleteTask(item._id).subscribe(function (data) {
            _this.getTaskList();
        });
    };
    UserPageComponent.prototype.signout = function () {
        this.loginService.logout();
    };
    UserPageComponent.prototype.enableEditMode = function () {
        this.modifyTaskList = !this.modifyTaskList;
    };
    UserPageComponent.prototype.createStory = function () {
        this.router.navigate(['/new-story']);
    };
    UserPageComponent.prototype.viewStory = function (story) {
        var link = '/view-story/' + story.title.toLowerCase().replace(/\s/g, '-') + '@' + story._id;
        this.router.navigate([link]);
    };
    UserPageComponent.prototype.deleteStory = function (story) {
        var _this = this;
        this.userPageService.deleteStory(story._id).subscribe(function (data) {
            _this.getStoryList();
        });
    };
    UserPageComponent.prototype.editStory = function (story) {
    };
    return UserPageComponent;
}());
UserPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-page',
        template: __webpack_require__("../../../../../src/app/user-page/user-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user-page/user-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_user_page_service__["a" /* UserPageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_user_page_service__["a" /* UserPageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], UserPageComponent);

var _a, _b, _c;
//# sourceMappingURL=user-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/view-story/view-story.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    max-width: 800px;\r\n}\r\n\r\n.title {\r\n    margin-top: 20px;\r\n}\r\n\r\n.content {\r\n    margin-top: 50px;\r\n}\r\n\r\n.user-story {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view-story/view-story.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container view-story\">\n  <div class=\"user-story\">\n    <img class=\"user-image\" [src]=\"userImg\" />\n    <div class=\"story-info\">\n      <p class=\"text-primary\">{{currentUser.fullName}}</p>\n      <span class=\"text-secondary\">{{story.dateDisplay}}</span>\n    </div>\n  </div>\n  <h2 class=\"title\">{{story.title}}</h2>\n  <hr class=\"section-divider\">\n  <div class=\"content\" [innerHTML]=\"story.content\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/view-story/view-story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewStoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_view_story_service__ = __webpack_require__("../../../../../src/app/shared/view-story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_login_service__ = __webpack_require__("../../../../../src/app/shared/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewStoryComponent = (function () {
    function ViewStoryComponent(viewStoryService, route, loginService) {
        this.viewStoryService = viewStoryService;
        this.route = route;
        this.loginService = loginService;
    }
    ViewStoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.story = {
            '_id': '5a056f41734d1d68d42ce314',
            'title': 'The first story',
            'content': '<p>The simple content</p>',
            'userId': '59f97b8ef36d28236309ab9b',
            'dateDisplay': '11/11/2017'
        };
        this.currentUser = this.loginService.getCurrentUser();
        this.userImg = this.loginService.getUserImage(this.currentUser.email);
        var param = this.route.snapshot.params['story-id'];
        var id = param.split('@')[1];
        if (id) {
            this.viewStoryService.getStory(id).subscribe(function (data) {
                _this.story = data;
                _this.story.dateDisplay = new Date(data.date).toLocaleDateString();
            });
        }
    };
    return ViewStoryComponent;
}());
ViewStoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-view-story',
        template: __webpack_require__("../../../../../src/app/view-story/view-story.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view-story/view-story.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_view_story_service__["a" /* ViewStoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_view_story_service__["a" /* ViewStoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_login_service__["a" /* LoginService */]) === "function" && _c || Object])
], ViewStoryComponent);

var _a, _b, _c;
//# sourceMappingURL=view-story.component.js.map

/***/ }),

/***/ "../../../../../src/assets/cover.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cover.43270a36b11834676e3f.jpg";

/***/ }),

/***/ "../../../../../src/assets/cover2.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cover2.c545519ca7d10ebd3362.png";

/***/ }),

/***/ "../../../../../src/assets/homepage.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "homepage.fc2e1b1316430fd67aaa.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map