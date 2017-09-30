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

/***/ "../../../../../src/app/RecipeSummary.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeSummary; });
var RecipeSummary = /** @class */ (function () {
    //this is the recipe constructor
    function RecipeSummary(uuid, title, body, images, type) {
        this.title = title;
        this.body = body;
        this.images = images;
        this.uuid = uuid;
        this.type = type;
    }
    return RecipeSummary;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/RecipeSummary.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"topBar\">\n    <span routerLink=\"/\" style=\"cursor:pointer;\"  class=\"AppTile\">My Treasured Health</span><br>\n    <button md-button class=\"top-button\"  routerLink=\"/breakfast\">Breakfast</button>\n    <button md-button  class=\"top-button\" routerLink=\"/snacks\">Snacks</button>\n    <button md-button  class=\"top-button\" routerLink=\"/side-dishes\">Side dishes</button>\n    <button md-button  class=\"top-button\" routerLink=\"/entrees\">Entrees</button>\n    <button md-button  class=\"top-button\" routerLink=\"/desserts\">Dessert</button>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-toolbar {\n  font-family: 'Poiret One', cursive;\n  font-size: 30px; }\n\n.app-toolbar-filler {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.top-button {\n  height: 50px; }\n\n.list-items {\n  top: 3em; }\n\n.topBar {\n  width: 100%;\n  text-align: center;\n  background-color: white; }\n\n.AppTile {\n  font-size: 3em;\n  font-family: 'Indie Flower', cursive; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mainpage_mainpage_component__ = __webpack_require__("../../../../../src/app/mainpage/mainpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__recipe_recipe_component__ = __webpack_require__("../../../../../src/app/recipe/recipe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__recipetype_pipe__ = __webpack_require__("../../../../../src/app/recipetype.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_7__mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: ':type', component: __WEBPACK_IMPORTED_MODULE_7__mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: ':type/recipe/:uuid', component: __WEBPACK_IMPORTED_MODULE_11__recipe_recipe_component__["a" /* RecipeComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__mainpage_mainpage_component__["a" /* MainpageComponent */],
                __WEBPACK_IMPORTED_MODULE_11__recipe_recipe_component__["a" /* RecipeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__recipetype_pipe__["a" /* RecipetypePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8__material_module__["a" /* MaterialModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__recipe_service__["a" /* RecipeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n<!--Add a search bar-->\n<div fxLayout=\"column\"  fxLayoutAlign=\"space-around center\" *ngIf=\"recipes.length>0\">\n    <h1 class=\"title\">{{sectionName}}</h1>\n  <md-card class=\"recipeCard\" *ngFor=\"let recipe of recipes\">\n    <md-card-header>\n    <md-card-title>{{recipe.title[0].value}}</md-card-title>\n    </md-card-header>\n    <img *ngIf=\"recipe.field_foodimage.length>0\" md-card-image src=\"{{recipe.field_foodimage[0].url}}\">\n    <md-card-content>\n      <p *ngIf=\"recipe.body.length>0\" [innerHTML]=\"recipe.body[0].summary\"></p>\n    </md-card-content>\n    <md-card-actions>\n      <button md-raised-button routerLink=\"recipe/{{recipe.uuid[0].value}}\" color=\"primary\">Go to recipe</button>\n    </md-card-actions>\n  </md-card>\n</div>\n\n\n  \n\n"

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recipeCard {\n  margin: 5px; }\n\n@media screen and (min-width: 600px) {\n  .recipeCard {\n    width: 400px; }\n  .title {\n    width: 400px; } }\n\n@media screen and (max-width: 600px) {\n  .recipeCard {\n    width: 90%; }\n  .title {\n    width: 100%;\n    padding: 30px;\n    margin-left: 40px; } }\n\n.title {\n  font-size: 2em;\n  font-family: 'Indie Flower', cursive;\n  background-color: white;\n  padding: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mainpage/mainpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(recipeService, route) {
        this.recipeService = recipeService;
        this.route = route;
        this.recipes = [];
        this.mode = 'Observable';
        // this.recipeService.getSummaries().subscribe(
        //   recipes => this.recipes = recipes,
        //   error => this.errorMessage = <any>error
        // );
    }
    MainpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.recipeTypeString = params['type'];
            if (!_this.recipeTypeString) {
                _this.recipeTypeString = "breakfast";
            }
            switch (_this.recipeTypeString) {
                case "breakfast": {
                    _this.sectionName = "Breakfast";
                    break;
                }
                case "snacks": {
                    _this.sectionName = "Snacks";
                    break;
                }
                case "side-dishes": {
                    _this.sectionName = "Side Dishes";
                    break;
                }
                case "entrees": {
                    _this.sectionName = "Entrees";
                    break;
                }
                case "desserts": {
                    _this.sectionName = "Desserts";
                    break;
                }
                default: {
                    _this.sectionName = "";
                    break;
                }
            }
            _this.recipeService.getRecipeWithType(_this.recipeTypeString).subscribe(function (r) {
                var recipesJSON = r.json();
                _this.recipes = [];
                for (var i = 0; i < recipesJSON.length; i++) {
                    _this.recipes.push(recipesJSON[i]);
                }
                ;
            });
        });
    };
    MainpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__("../../../../../src/app/mainpage/mainpage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mainpage/mainpage.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__recipe_service__["a" /* RecipeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
    ], MainpageComponent);
    return MainpageComponent;
    var _a, _b;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/mainpage.component.js.map

/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatCardModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatCardModule */]]
        })
    ], MaterialModule);
    return MaterialModule;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/material.module.js.map

/***/ }),

/***/ "../../../../../src/app/recipe.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recipe__ = __webpack_require__("../../../../../src/app/recipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RecipeSummary__ = __webpack_require__("../../../../../src/app/RecipeSummary.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeService = /** @class */ (function () {
    function RecipeService(http) {
        this.http = http;
        this.recipesUrl = 'http://52.168.135.28/api/health/recipe/'; // URL to web API
        this.healthAPI = 'http://52.168.135.28/api/health/';
    }
    RecipeService.prototype.getRecipe = function (uuid) {
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
        recipeInfo = new __WEBPACK_IMPORTED_MODULE_5__recipe__["a" /* Recipe */](response.uuid, response.title, response.body, response.field_foodimage, response.field_type);
        return response || {};
    };
    RecipeService.prototype.extractSummaries = function (res) {
        var recipes = [];
        for (var _i = 0, _a = res.json(); _i < _a.length; _i++) {
            var recipe = _a[_i];
            recipes.push(new __WEBPACK_IMPORTED_MODULE_6__RecipeSummary__["a" /* RecipeSummary */](recipe.uuid, recipe.title, recipe.body, recipe.field_foodimage, recipe.field_type));
        }
        return recipes || {};
    };
    RecipeService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
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
    RecipeService.prototype.getRecipeWithType = function (type) {
        return this.http.get(this.healthAPI + "type/" + type);
    };
    RecipeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
    ], RecipeService);
    return RecipeService;
    var _a;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/recipe.service.js.map

/***/ }),

/***/ "../../../../../src/app/recipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
var Recipe = /** @class */ (function () {
    //this is the recipe constructor
    function Recipe(uuid, title, body, images, type) {
        this.title = title;
        this.body = body;
        this.images = images;
        this.uuid = uuid;
        this.type = type;
    }
    return Recipe;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/recipe.js.map

/***/ }),

/***/ "../../../../../src/app/recipe/recipe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1{font-family: 'Muli', sans-serif;}\nh2{font-family: 'Muli', sans-serif;}\np{font-family: 'EB Garamond', serif;font-size:18px;}\nmd-card{margin:20px;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/recipe/recipe.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://fonts.googleapis.com/css?family=EB+Garamond|Muli\" rel=\"stylesheet\">\n\n\n<!--wait for the recipe to be loaded-->\n<md-card *ngIf=\"recipeInfo\">\n  <h1 *ngIf=\"recipeInfo.title[0]\">{{recipeInfo.title[0].value}}</h1>\n  <p *ngIf=\"recipeInfo.body[0]\" [innerHTML]=\"recipeInfo.body[0].value\"></p>\n  <h2>Ingredients</h2>\n  <p *ngIf=\"recipeInfo.field_ingredients.length>0\" [innerHTML]=\"recipeInfo.field_ingredients[0].value\"></p>\n  <h2>Instructions</h2>\n  <p *ngIf=\"recipeInfo.field_instructions.length>0\" [innerHTML]=\"recipeInfo.field_instructions[0].value\"></p>\n</md-card>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/recipe/recipe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_service__ = __webpack_require__("../../../../../src/app/recipe.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecipeComponent = /** @class */ (function () {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-recipe',
            template: __webpack_require__("../../../../../src/app/recipe/recipe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/recipe/recipe.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__recipe_service__["a" /* RecipeService */]) === "function" && _b || Object])
    ], RecipeComponent);
    return RecipeComponent;
    var _a, _b;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/recipe.component.js.map

/***/ }),

/***/ "../../../../../src/app/recipetype.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipetypePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecipetypePipe = /** @class */ (function () {
    function RecipetypePipe() {
    }
    RecipetypePipe.prototype.transform = function (recipes, category) {
        console.log(category);
        if (category == null) {
            return recipes;
        }
        return recipes.filter(function (item) { return item.type[0].value === category; });
    };
    RecipetypePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
            name: 'recipetype'
        })
    ], RecipetypePipe);
    return RecipetypePipe;
}());

//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/recipetype.pipe.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
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
//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/environment.js.map

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/nicolastremblay/Documents/GitHub/my-treasured-health/health/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map