webpackJsonp([4],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ViewProductPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ViewProductPage = (function () {
    function ViewProductPage(navCtrl, navParams, productService, cartService, events, notificationsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.cartService = cartService;
        this.events = events;
        this.notificationsService = notificationsService;
        this.productId = navParams.get('productId');
    }
    ViewProductPage.prototype.addToCart = function (product) {
        var _this = this;
        var item = {
            "name": product.name,
            "imagePath": product.imagePath,
            "price": product.price,
            "productId": product._id
        };
        this.cartService.addItem(item)
            .then(function (res) {
            var resObj = Object.assign(res);
            _this.notificationsService.presentToast("O item " + resObj.name + " foi adicionado com sucesso.");
        });
    };
    ViewProductPage.prototype.selectSize = function (index) {
        console.log('indeeeeex', index);
        this.selected = index;
        //   if(this.selected)
        //     document.querySelector('.swiper-slide--selected')
        //       .classList.remove('swiper-slide--selected')
        //   target.classList.add('swiper-slide--selected')
        //   console.log(this.slides)
        //   this.slides.stopAutoplay()
        //   this.selected = id;
        // }
    };
    ViewProductPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.productService.getProduct(this.productId)
            .then(function (product) { return _this.product = product; });
    };
    return ViewProductPage;
}());
ViewProductPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-view-product',template:/*ion-inline-start:"C:\Users\denil\projects\appBuilder-MVP\src\pages\view-product\view-product.html"*/'<!--\n\n  Generated template for the ViewProductPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header color="light">\n\n    <ion-navbar color="light"></ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div *ngIf="product">\n\n        <ion-grid>\n\n            <ion-row>\n\n                <ion-col col-8>\n\n                    <h1 class="product-name">\n\n                        <strong> {{product.name}} </strong>\n\n                    </h1>\n\n                </ion-col>\n\n                <ion-col padding col-4 text-right>\n\n                    <ion-icon name="star"> {{product.rating}} </ion-icon>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <img [src]="\'http://45.55.238.48:8000/img/\' + product.imagePath" />\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-12 class="product-datails">\n\n                    <h3 class="product-sku product-name"> Color: </h3>\n\n\n\n                    <span class="product-sku__color__yellow"></span>\n\n                    <span class="product-sku__color__red product-sku__color--active"></span>\n\n                    <span class="product-sku__color__blue"></span>\n\n                    <span class="product-sku__color__black"></span>\n\n                </ion-col>\n\n            </ion-row>\n\n            <ion-row>\n\n                <ion-col col-12 class="product-datails">\n\n                    <h3 class="product-sku product-name"> Size </h3>\n\n\n\n                    <span *ngFor="let size of product.sizes; let i = index" class="product-sku__size" [ngClass]="{\'product-sku__size--active\' : selected === i }" (click)="selectSize(i)"> {{size}} </span>\n\n\n\n                    <!-- <span class="product-sku__size product-sku__size--active"> {{product.size}} </span>\n\n                    <span class="product-sku__size"> 36 </span>\n\n                    <span class="product-sku__size"> 38 </span>\n\n                    <span class="product-sku__size"> 41 </span> -->\n\n                </ion-col>\n\n            </ion-row>\n\n\n\n            <ion-row>\n\n                <ion-col col-12>\n\n                    <p class="product-name"> Product Code: </p>\n\n                    <strong>{{product._id}}</strong>\n\n\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n\n\n    </div>\n\n\n\n\n\n    <div *ngIf="!product" class="loading">\n\n        <ion-spinner name="crescent"></ion-spinner>\n\n    </div>\n\n</ion-content>\n\n\n\n<ion-footer color="primary" (click)="addToCart(product)">\n\n    <ion-toolbar>\n\n        <strong>Adicionar ao carrinho </strong>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\denil\projects\appBuilder-MVP\src\pages\view-product\view-product.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */], __WEBPACK_IMPORTED_MODULE_4__providers_notifications_notifications__["a" /* NotificationsProvider */]])
], ViewProductPage);

//# sourceMappingURL=view-product.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_notifications_notifications__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartPage = (function () {
    function CartPage(navCtrl, navParams, cartService, notificationsService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.notificationsService = notificationsService;
        this.items = [];
    }
    CartPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.ngOnInit = function () {
        var _this = this;
        return this.cartService.getItems()
            .subscribe(function (item) { return _this.items = item; });
    };
    CartPage.prototype.removeItem = function (item) {
        this.cartService.deleteItem(item._id)
            .then(this.items.splice(item, 1));
        this.notificationsService.presentToast("O item foi removido com sucesso.");
    };
    CartPage.prototype.cleanCart = function () {
        var _this = this;
        this.items.map(function (item) { return _this.cartService.deleteItem(item._id); });
        this.items = [];
        this.notificationsService.presentToast("Carrinho limpo.");
    };
    CartPage.prototype.goToHomePage = function () {
        // this.navCtrl.setRoot(HomePage);
        this.navCtrl.pop();
    };
    return CartPage;
}());
CartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cart',template:/*ion-inline-start:"C:\Users\denil\projects\appBuilder-MVP\src\pages\cart\cart.html"*/'<!--\n\n  Generated template for the CartPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-toolbar color="light">\n\n        <ion-buttons start>\n\n            <button ion-button icon-only color="primary" (click)="goToHomePage()">\n\n                <ion-icon name="home"></ion-icon>\n\n          </button>\n\n        </ion-buttons>\n\n        <ion-title>Linx Moda Shop</ion-title>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n    <!-- <dl>\n\n        <dt></dt>\n\n        <dd>\n\n            {{items.length}}\n\n        </dd>\n\n    </dl> -->\n\n\n\n\n\n    <ion-list>\n\n        <ion-item-sliding *ngFor="let item of items">\n\n\n\n            <ion-item no-lines>\n\n                <ion-thumbnail item-start>\n\n                    <img [src]="\'http://45.55.238.48:8000/img/\' + item.imagePath" />\n\n                </ion-thumbnail>\n\n                {{item.name}}\n\n            </ion-item>\n\n\n\n            <ion-item-options side="right">\n\n                <button ion-button color="danger" (click)="removeItem(item)">\n\n                    <ion-icon name="trash"></ion-icon>\n\n                </button>\n\n            </ion-item-options>\n\n\n\n        </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <button ion-button full color="danger" (click)="cleanCart(product)"> Limpar Carrinho </button>\n\n    <button ion-button full color="primary" (click)="goToHomePage()"> Finalizar Compra </button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\denil\projects\appBuilder-MVP\src\pages\cart\cart.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_cart_cart__["a" /* CartProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_notifications_notifications__["a" /* NotificationsProvider */]])
], CartPage);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_product_view_product__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cart_cart__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, navParams, productService, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productService = productService;
        this.modalCtrl = modalCtrl;
        this.categories = [];
    }
    HomePage.prototype.loadProducts = function () {
        this.productService.load()
            .then(this.splitByCategory.bind(this));
    };
    HomePage.prototype.createCategorySlider = function (id, products) {
        this.categories.push({
            name: products[0].category,
            products: products
        });
    };
    HomePage.prototype.splitByCategory = function (products) {
        var _this = this;
        var categories = products.map(function (product) { return product.categoryId; });
        var categoriesId = new Set(categories);
        Array.from(categoriesId).map(function (id) {
            _this.productService.category(id)
                .then(function (products) {
                _this.createCategorySlider(id, products);
            });
        });
    };
    HomePage.prototype.selectProduct = function (_a, id) {
        var target = _a.target;
        if (this.selected)
            document.querySelector('.swiper-slide--selected')
                .classList.remove('swiper-slide--selected');
        target.classList.add('swiper-slide--selected');
        console.log(this.slides);
        this.slides.stopAutoplay();
        this.selected = id;
    };
    HomePage.prototype.viewProduct = function () {
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__view_product_view_product__["a" /* ViewProductPage */], { productId: this.selected }).present();
    };
    HomePage.prototype.goToCartPage = function () {
        // this.navCtrl.setRoot(CartPage)
        this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__cart_cart__["a" /* CartPage */]).present();
    };
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Home');
        this.loadProducts();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
], HomePage.prototype, "slides", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\denil\projects\appBuilder-MVP\src\pages\home\home.html"*/'<ion-header>\n\n    <ion-toolbar color="light">\n\n\n\n        <ion-buttons start>\n\n            <button ion-button icon-only color="primary">\n\n                <ion-icon name="menu"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n        <ion-title>Linx Moda Shop</ion-title>\n\n\n\n        <ion-buttons end>\n\n            <button ion-button icon-only color="primary" (click)="goToCartPage()">\n\n                <ion-icon class="lx lx-basket"></ion-icon>\n\n                <ion-badge id="notifications-badge" color="danger">5</ion-badge>\n\n            </button>\n\n        </ion-buttons>\n\n\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    <ul class="menu">\n\n        <li class="menu__item"> Women </li>\n\n        <li class="menu__item"> Man </li>\n\n        <li class="menu__item"> Kids </li>\n\n        <li class="menu__item"> Babies </li>\n\n    </ul>\n\n    \n\n    <ion-slides autoplay="5000" class="banners" style="height: 33vh;" *ngIf="categories.length">\n\n        <ion-slide *ngFor="let category of categories">\n\n            <img [src]="\'http://45.55.238.48:8000/img/\' + category.products[0].imagePath" />\n\n            <button ion-button color="secondary" class="btn-go"> EU QUERO </button>\n\n        </ion-slide>\n\n    </ion-slides>\n\n\n\n    <div *ngFor="let category of categories">\n\n\n\n        <h2 class="">{{category.name}}</h2>\n\n\n\n        <ion-slides slidesPerView="auto" centeredSlides="true" spaceBetween="15" initialSlide="1" style="height: 30vh;" *ngIf="category.products">\n\n            <ion-slide *ngFor="let product of category.products" (tap)="selectProduct($event, product._id)">\n\n                <img [src]="\'http://45.55.238.48:8000/img/\' + product.imagePath" />\n\n            </ion-slide>\n\n        </ion-slides>\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n<ion-footer color="primary" [ngClass]="{ \'visible\': !!selected }" (tap)="viewProduct()">\n\n    <ion-toolbar>\n\n        View Details\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\denil\projects\appBuilder-MVP\src\pages\home\home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\denil\projects\appBuilder-MVP\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content>\n\n    <ion-slides pager autoplay="5000">\n\n        <ion-slide style="background: url(http://45.55.238.48:8000/img/camiseta2.jpg);">\n\n        </ion-slide>\n\n        <ion-slide style="background: url(http://45.55.238.48:8000/img/camiseta1.jpg);">\n\n        </ion-slide>\n\n        <ion-slide style="background: url(http://45.55.238.48:8000/img/camiseta3.jpg);">\n\n        </ion-slide>\n\n    </ion-slides>\n\n\n\n    <div class="login" padding>\n\n        <ion-list>\n\n            <ion-item>\n\n                <ion-input type="text" value="" placeholder="Usuário"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-input type="password" placeholder="Senha"></ion-input>\n\n            </ion-item>\n\n        </ion-list>\n\n\n\n        <button ion-button full color="primary" (click)="goToHomePage()">Login</button>\n\n        <span class="separator">ou</span>\n\n        <button ion-button full color="info">Facebook</button>\n\n    </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\denil\projects\appBuilder-MVP\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cart/cart.module": [
		270,
		3
	],
	"../pages/home/home.module": [
		271,
		2
	],
	"../pages/login/login.module": [
		272,
		1
	],
	"../pages/view-product/view-product.module": [
		269,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_view_product_view_product__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_product_product__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_cart_cart__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_notifications_notifications__ = __webpack_require__(80);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_view_product_view_product__["a" /* ViewProductPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {
                backButtonText: '',
                iconMode: 'md'
            }, {
                links: [
                    { loadChildren: '../pages/view-product/view-product.module#ViewProductPageModule', name: 'ViewProductPage', segment: 'view-product', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_view_product_view_product__["a" /* ViewProductPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_cart_cart__["a" /* CartPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__providers_product_product__["a" /* ProductProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_12__providers_cart_cart__["a" /* CartProvider */],
            __WEBPACK_IMPORTED_MODULE_13__providers_notifications_notifications__["a" /* NotificationsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, events) {
        var _this = this;
        this.events = events;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.appEvents();
        });
    }
    MyApp.prototype.appEvents = function () {
        this.events.subscribe('cart:add', function (product, amount) {
            console.log("Product " + product._id + " added to cart");
            console.log(product);
        });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\denil\projects\appBuilder-MVP\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\denil\projects\appBuilder-MVP\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://45.55.238.48:8000/api';
var ProductProvider = (function () {
    function ProductProvider(http) {
        this.http = http;
    }
    ProductProvider.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(apiUrl + "/products/" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    ProductProvider.prototype.category = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(apiUrl + "/categorys/" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    ProductProvider.prototype.load = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(apiUrl + "/products")
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    return ProductProvider;
}());
ProductProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProductProvider);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiUrl = 'http://45.55.238.48:8000/api';
var CartProvider = (function () {
    function CartProvider(http) {
        this.http = http;
    }
    // getItems() {
    //   return new Promise(resolve => {
    //     this.http.get(`${apiUrl}/carts`)
    //       .map(res => res.json())
    //       .subscribe(data => resolve(data))
    //   })
    // }
    CartProvider.prototype.getItems = function () {
        return this.http.get(apiUrl + "/carts")
            .map(function (response) { return response.json(); });
    };
    CartProvider.prototype.addItem = function (item) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.post(apiUrl + "/carts", item)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    CartProvider.prototype.deleteItem = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(apiUrl + "/carts/" + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { return resolve(data); });
        });
    };
    return CartProvider;
}());
CartProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], CartProvider);

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the NotificationsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
var NotificationsProvider = (function () {
    function NotificationsProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
    }
    NotificationsProvider.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 2000,
            position: 'botton',
            cssClass: 'toast-primary'
        });
        toast.present();
    };
    return NotificationsProvider;
}());
NotificationsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ToastController */]])
], NotificationsProvider);

//# sourceMappingURL=notifications.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map