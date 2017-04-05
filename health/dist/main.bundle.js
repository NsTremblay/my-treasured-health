webpackJsonp([1,4],{

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipe__ = __webpack_require__(634);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RecipeSummary__ = __webpack_require__(630);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeService = (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipesUrl = 'http://162.243.196.50/api/health/recipe/'; // URL to web API
    }
    RecipeService.prototype.getRecipe = function (uuid) {
        console.log(this.recipesUrl + uuid);
        return this.http.get(this.recipesUrl + uuid)
            .map(this.extractRecipe)
            .catch(this.handleError);
    };
    RecipeService.prototype.getSummaries = function () {
        return this.http.get(this.recipesUrl + "all")
            .map(this.extractSummaries)
            .catch(this.handleError);
    };
    RecipeService.prototype.extractRecipe = function (res) {
        var recipeInfo;
        var response = res.json()[0];
        recipeInfo = new __WEBPACK_IMPORTED_MODULE_5__recipe__["a" /* Recipe */](response.uuid, response.title, response.body, response.field_foodimage);
        console.log(response);
        return response || {};
    };
    RecipeService.prototype.extractSummaries = function (res) {
        var recipes = [];
        for (var _i = 0, _a = res.json(); _i < _a.length; _i++) {
            var recipe = _a[_i];
            recipes.push(new __WEBPACK_IMPORTED_MODULE_6__RecipeSummary__["a" /* RecipeSummary */](recipe.uuid, recipe.title, recipe.body, recipe.field_foodimage));
        }
        return recipes || {};
    };
    RecipeService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    RecipeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], RecipeService);
    return RecipeService;
    var _a;
}());
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/recipe.service.js.map

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 456;


/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(600);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(636);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/main.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeSummary; });
var RecipeSummary = (function () {
    //this is the recipe constructor
    function RecipeSummary(uuid, title, body, images) {
        this.title = title;
        this.body = body;
        this.images = images;
        this.uuid = uuid;
    }
    return RecipeSummary;
}());
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/RecipeSummary.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(695),
            styles: [__webpack_require__(691)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/app.component.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(631);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mainpage_mainpage_component__ = __webpack_require__(633);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__recipe_service__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recipe_recipe_component__ = __webpack_require__(635);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: 'recipe/:uuid', component: __WEBPACK_IMPORTED_MODULE_10__recipe_recipe_component__["a" /* RecipeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__mainpage_mainpage_component__["a" /* MainpageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__recipe_recipe_component__["a" /* RecipeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["FlexLayoutModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__recipe_service__["a" /* RecipeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/app.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainpageComponent = (function () {
    function MainpageComponent(recipeService) {
        var _this = this;
        this.recipeService = recipeService;
        this.mode = 'Observable';
        this.recipeService.getSummaries().subscribe(function (recipes) { return _this.recipes = recipes; }, function (error) { return _this.errorMessage = error; });
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__(696),
            styles: [__webpack_require__(692)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]) === 'function' && _a) || Object])
    ], MainpageComponent);
    return MainpageComponent;
    var _a;
}());
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/mainpage.component.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = (function () {
    //this is the recipe constructor
    function Recipe(uuid, title, body, images) {
        this.title = title;
        this.body = body;
        this.images = images;
        this.uuid = uuid;
    }
    return Recipe;
}());
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/recipe.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__(249);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeComponent = (function () {
    function RecipeComponent(route, recipeService) {
        var _this = this;
        this.route = route;
        this.recipeService = recipeService;
        this.mode = 'Observable';
        this.route.params.subscribe(function (params) {
            _this.uuid = params['uuid'];
            // In a real app: dispatch action to load the details here.
            _this.recipeService.getRecipe(_this.uuid).subscribe(function (recipe) { return _this.recipeInfo = recipe; }, function (error) { return _this.errorMessage = error; });
        });
    }
    RecipeComponent.prototype.ngOnInit = function () {
    };
    RecipeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-recipe',
            template: __webpack_require__(697),
            styles: [__webpack_require__(693)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]) === 'function' && _b) || Object])
    ], RecipeComponent);
    return RecipeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/recipe.component.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/Nicolas/Documents/my-treasured-health/health/src/environment.js.map

/***/ }),

/***/ 691:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, "md-toolbar {\n  font-family: 'Poiret One', cursive;\n  font-size: 30px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 692:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, ".recipeCard {\n  margin: 5px; }\n\n@media screen and (min-width: 600px) {\n  .recipeCard {\n    width: 400px; } }\n\n@media screen and (max-width: 600px) {\n  .recipeCard {\n    width: 90%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 693:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(80)();
// imports


// module
exports.push([module.i, "h1{font-family: 'Muli', sans-serif;}\nh2{font-family: 'Muli', sans-serif;}\np{font-family: 'EB Garamond', serif;font-size:18px;}\nmd-card{margin:20px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=Poiret+One\" rel=\"stylesheet\">\n\n<md-toolbar color=\"primary\" ><span routerLink=\"/\" style=\"cursor:pointer;\">My Treasured Health</span></md-toolbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "\n<!--Add a search bar-->\n<div fxLayout=\"column\"  fxLayoutAlign=\"space-around center\">\n  <md-card class=\"recipeCard\" *ngFor=\"let recipe of recipes\"  >\n    <md-card-header>\n    <md-card-title>{{recipe.title[0].value}}</md-card-title>\n\n    </md-card-header>\n    <img *ngIf=\"recipe.images[0]\" md-card-image src=\"{{recipe.images[0].url}}\">\n    <md-card-content>\n      <p *ngIf=\"recipe.body[0]\" [innerHTML]=\"recipe.body[0].summary\">\n\n      </p>\n    </md-card-content>\n    <md-card-actions>\n      <button md-button routerLink=\"recipe/{{recipe.uuid[0].value}}\">Go to recipe</button>\n    </md-card-actions>\n  </md-card>\n\n\n\n\n\n\n\n\n</div>\n\n\n  \n\n"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=EB+Garamond|Muli\" rel=\"stylesheet\">\n\n\n<!--wait for the recipe to be loaded-->\n<md-card *ngIf=\"recipeInfo\">\n  <h1 *ngIf=\"recipeInfo.title[0]\">{{recipeInfo.title[0].value}}</h1>\n  <p *ngIf=\"recipeInfo.body[0]\" [innerHTML]=\"recipeInfo.body[0].value\"></p>\n  <h2>Ingredients</h2>\n  <p [innerHTML]=\"recipeInfo.field_ingredients[0].value\"></p>\n  <h2>Instructions</h2>\n  <p [innerHTML]=\"recipeInfo.field_instructions[0].value\"></p>\n\n</md-card>\n\n\n"

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(457);


/***/ })

},[740]);
//# sourceMappingURL=main.bundle.js.map