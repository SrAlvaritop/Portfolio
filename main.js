"use strict";
(self["webpackChunkPortfolioWeb"] = self["webpackChunkPortfolioWeb"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ 6618);
/* harmony import */ var _navbar_menu_navbar_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar-menu/navbar-menu.component */ 9948);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _navbar_footer_navbar_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar-footer/navbar-footer.component */ 3873);





class AppComponent {
    constructor(deviceService) {
        this.deviceService = deviceService;
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__.DeviceDetectorService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "AppComponent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-navbar-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-navbar-footer");
    } }, directives: [_navbar_menu_navbar_menu_component__WEBPACK_IMPORTED_MODULE_0__.NavbarMenuComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _navbar_footer_navbar_footer_component__WEBPACK_IMPORTED_MODULE_1__.NavbarFooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _navbar_menu_navbar_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar-menu/navbar-menu.component */ 9948);
/* harmony import */ var _pag_inicio_pag_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pag-inicio/pag-inicio.component */ 434);
/* harmony import */ var _pag_contacto_pag_contacto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pag-contacto/pag-contacto.component */ 8374);
/* harmony import */ var _pag_proyectos_pag_proyectos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pag-proyectos/pag-proyectos.component */ 3929);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _navbar_footer_navbar_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar-footer/navbar-footer.component */ 3873);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot([
                { path: '', component: _pag_inicio_pag_inicio_component__WEBPACK_IMPORTED_MODULE_3__.PagInicioComponent },
                { path: 'proyectos', component: _pag_proyectos_pag_proyectos_component__WEBPACK_IMPORTED_MODULE_5__.PagProyectosComponent },
                { path: 'contacto', component: _pag_contacto_pag_contacto_component__WEBPACK_IMPORTED_MODULE_4__.PagContactoComponent },
            ])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _navbar_menu_navbar_menu_component__WEBPACK_IMPORTED_MODULE_2__.NavbarMenuComponent,
        _pag_inicio_pag_inicio_component__WEBPACK_IMPORTED_MODULE_3__.PagInicioComponent,
        _pag_contacto_pag_contacto_component__WEBPACK_IMPORTED_MODULE_4__.PagContactoComponent,
        _pag_proyectos_pag_proyectos_component__WEBPACK_IMPORTED_MODULE_5__.PagProyectosComponent,
        _navbar_footer_navbar_footer_component__WEBPACK_IMPORTED_MODULE_6__.NavbarFooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule] }); })();


/***/ }),

/***/ 3873:
/*!**********************************************************!*\
  !*** ./src/app/navbar-footer/navbar-footer.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarFooterComponent": () => (/* binding */ NavbarFooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NavbarFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavbarFooterComponent.ɵfac = function NavbarFooterComponent_Factory(t) { return new (t || NavbarFooterComponent)(); };
NavbarFooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarFooterComponent, selectors: [["app-navbar-footer"]], decls: 4, vars: 0, consts: [["id", "sticky-footer", 1, "footerpage", "flex-shrink-0", "py-4", "bg-dark", "text-white-50"], [1, "container", "text-center"]], template: function NavbarFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u00A9 \u00C1lvaro Jos\u00E9 Camino Gonz\u00E1lez");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRyIsImZpbGUiOiJuYXZiYXItZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZm9vdGVycGFnZXtcclxuICAgIG1hcmdpbi10b3A6MjBweDtcclxufSAqLyJdfQ== */"] });


/***/ }),

/***/ 9948:
/*!******************************************************!*\
  !*** ./src/app/navbar-menu/navbar-menu.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarMenuComponent": () => (/* binding */ NavbarMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return [""]; };
const _c1 = function () { return ["proyectos"]; };
const _c2 = function () { return ["contacto"]; };
class NavbarMenuComponent {
    constructor() {
        this.title = 'PortfolioWeb';
        this.barTitleContent = 'Álvaro José Camino González';
    }
    ngOnInit() {
    }
}
NavbarMenuComponent.ɵfac = function NavbarMenuComponent_Factory(t) { return new (t || NavbarMenuComponent)(); };
NavbarMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarMenuComponent, selectors: [["app-navbar-menu"]], decls: 8, vars: 6, consts: [[3, "routerLink"], [1, "top-bar"]], template: function NavbarMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav")(1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inicio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Proyectos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contacto");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["@import url(\"https://fonts.googleapis.com/css?family=Oswald:500\");\r\n\r\n.top-bar[_ngcontent-%COMP%] {\r\n  padding-top:65px;\r\n}\r\n\r\n@media only screen and (max-width: 498px) {\r\n\t.top-bar[_ngcontent-%COMP%] {\r\n    padding-top:70px;\r\n  }\r\n}\r\n\r\nnav[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: fixed;\r\n  background-color: rgba(255, 255, 255, 0.474);\r\n  padding: 16px;\r\n  z-index: 999;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-family: \"Pixel\", sans-serif;\r\n  font-weight: 700;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  color: #16151b;\r\n  margin: 0 16px;\r\n  font-size: 22px;\r\n  letter-spacing: 1px;\r\n  position: relative;\r\n  display: inline-block;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\r\n  content: \"\";\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 3px;\r\n  background: #16151b;\r\n  top: 100%;\r\n  animation: out 0.2s cubic-bezier(0, 0, 0.58, 0.97) 1 both;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:before {\r\n  animation: in 0.2s cubic-bezier(0, 0, 0.58, 0.97) 1 both;\r\n}\r\n\r\n@keyframes in {\r\n  0% {\r\n    width: 0;\r\n    left: 0;\r\n    right: auto;\r\n  }\r\n  100% {\r\n    left: 0;\r\n    right: auto;\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n@keyframes out {\r\n  0% {\r\n    width: 100%;\r\n    left: auto;\r\n    right: 0;\r\n  }\r\n  100% {\r\n    width: 0;\r\n    left: auto;\r\n    right: 0;\r\n  }\r\n}\r\n\r\n@keyframes show {\r\n  0% {\r\n    opacity: 0;\r\n    transform: translateY(-10px);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(1) {\r\n  animation: show 0.2s 0.1s ease 1 both;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2) {\r\n  animation: show 0.2s 0.2s ease 1 both;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(3) {\r\n  animation: show 0.2s 0.3s ease 1 both;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(4) {\r\n  animation: show 0.2s 0.4s ease 1 both;\r\n}\r\n\r\nnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(5) {\r\n  animation: show 0.2s 0.5s ease 1 both;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUVBQWlFOztBQUVqRTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFDQTtDQUNDO0lBQ0csZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLDRDQUE0QztFQUM1QyxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QseURBQXlEO0FBQzNEOztBQUVBO0VBQ0Usd0RBQXdEO0FBQzFEOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7RUFDYjtFQUNBO0lBQ0UsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0VBQ2I7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixRQUFRO0VBQ1Y7RUFDQTtJQUNFLFFBQVE7SUFDUixVQUFVO0lBQ1YsUUFBUTtFQUNWO0FBQ0Y7O0FBQ0E7RUFDRTtJQUNFLFVBQVU7SUFDViw0QkFBNEI7RUFDOUI7RUFDQTtJQUNFLFVBQVU7SUFDVix3QkFBd0I7RUFDMUI7QUFDRjs7QUFDQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLHFDQUFxQztBQUN2QyIsImZpbGUiOiJuYXZiYXItbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3N3YWxkOjUwMFwiKTtcclxuXHJcbi50b3AtYmFyIHtcclxuICBwYWRkaW5nLXRvcDo2NXB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDk4cHgpIHtcclxuXHQudG9wLWJhciB7XHJcbiAgICBwYWRkaW5nLXRvcDo3MHB4O1xyXG4gIH1cclxufVxyXG5cclxubmF2IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQ3NCk7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbm5hdiBhIHtcclxuICBmb250LWZhbWlseTogXCJQaXhlbFwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICMxNjE1MWI7XHJcbiAgbWFyZ2luOiAwIDE2cHg7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxubmF2IGE6YmVmb3JlIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDNweDtcclxuICBiYWNrZ3JvdW5kOiAjMTYxNTFiO1xyXG4gIHRvcDogMTAwJTtcclxuICBhbmltYXRpb246IG91dCAwLjJzIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAwLjk3KSAxIGJvdGg7XHJcbn1cclxuXHJcbm5hdiBhOmhvdmVyOmJlZm9yZSB7XHJcbiAgYW5pbWF0aW9uOiBpbiAwLjJzIGN1YmljLWJlemllcigwLCAwLCAwLjU4LCAwLjk3KSAxIGJvdGg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgaW4ge1xyXG4gIDAlIHtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5Aa2V5ZnJhbWVzIG91dCB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hvdyB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTBweCk7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICB9XHJcbn1cclxubmF2IGE6bnRoLWNoaWxkKDEpIHtcclxuICBhbmltYXRpb246IHNob3cgMC4ycyAwLjFzIGVhc2UgMSBib3RoO1xyXG59XHJcblxyXG5uYXYgYTpudGgtY2hpbGQoMikge1xyXG4gIGFuaW1hdGlvbjogc2hvdyAwLjJzIDAuMnMgZWFzZSAxIGJvdGg7XHJcbn1cclxuXHJcbm5hdiBhOm50aC1jaGlsZCgzKSB7XHJcbiAgYW5pbWF0aW9uOiBzaG93IDAuMnMgMC4zcyBlYXNlIDEgYm90aDtcclxufVxyXG5cclxubmF2IGE6bnRoLWNoaWxkKDQpIHtcclxuICBhbmltYXRpb246IHNob3cgMC4ycyAwLjRzIGVhc2UgMSBib3RoO1xyXG59XHJcblxyXG5uYXYgYTpudGgtY2hpbGQoNSkge1xyXG4gIGFuaW1hdGlvbjogc2hvdyAwLjJzIDAuNXMgZWFzZSAxIGJvdGg7XHJcbn1cclxuXHJcbiJdfQ== */"] });


/***/ }),

/***/ 8374:
/*!********************************************************!*\
  !*** ./src/app/pag-contacto/pag-contacto.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagContactoComponent": () => (/* binding */ PagContactoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PagContactoComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagContactoComponent.ɵfac = function PagContactoComponent_Factory(t) { return new (t || PagContactoComponent)(); };
PagContactoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagContactoComponent, selectors: [["app-pag-contacto"]], decls: 34, vars: 0, consts: [[1, "containerComponent"], [1, "background"], [1, "container"], [1, "screen"], [1, "screen-header"], [1, "screen-header-left"], [1, "screen-header-button", "close"], [1, "screen-header-button", "maximize"], [1, "screen-header-button", "minimize"], [1, "screen-header-right"], [1, "screen-header-ellipsis"], [1, "screen-body"], [1, "screen-body-item", "left"], [1, "app-title"], [1, "app-contact"], ["href", "mailto:alvaroj.95@gmail.com"], [1, "screen-body-item"], [1, "app-form"], [1, "app-form-group"], ["placeholder", "Nombre", 1, "app-form-control"], ["placeholder", "E-MAIL", 1, "app-form-control"], ["placeholder", "Asunto", 1, "app-form-control"], [1, "app-form-group", "message"], ["type", "textarea", "placeholder", "Mensaje", 1, "app-form-control"], [1, "app-form-group", "buttons"], [1, "app-form-button"]], template: function PagContactoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6)(7, "div", 7)(8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10)(11, "div", 10)(12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11)(14, "div", 12)(15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u00BFTienes dudas? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Tambi\u00E9n puedes mandar un correo a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " alvaroj.95@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16)(22, "div", 17)(23, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 24)(32, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "ENVIAR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
    } }, styles: ["*[_ngcontent-%COMP%], *[_ngcontent-%COMP%]:before, *[_ngcontent-%COMP%]:after {\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n  }\r\n  \r\n  .containerComponent[_ngcontent-%COMP%] {\r\n    background-image: url('https://cdna.artstation.com/p/assets/images/images/023/216/746/original/thibault-dupre-landscapev3hd.gif?1578491310');\r\n    background-size: cover;\r\n    background-size: cover;\r\n    padding-bottom: 35vh;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%] {\r\n    background-color: blue;\r\n    font-size: 12px;\r\n  }\r\n  \r\n  body[_ngcontent-%COMP%], button[_ngcontent-%COMP%], input[_ngcontent-%COMP%] {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n    letter-spacing: 1.4px;\r\n  }\r\n  \r\n  .background[_ngcontent-%COMP%] {\r\n    display: flex;\r\n\r\n  }\r\n  \r\n  .container[_ngcontent-%COMP%] {\r\n    flex: 0 1 700px;\r\n    margin: auto;\r\n    padding: 10px;\r\n    margin-top:70px;\r\n  }\r\n  \r\n  .screen[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    background: #3e3e3e;\r\n    border-radius: 15px;\r\n  }\r\n  \r\n  .screen[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 20px;\r\n    right: 20px;\r\n    bottom: 0;\r\n    border-radius: 15px;\r\n    box-shadow: 0 20px 40px rgba(0, 0, 0, .4);\r\n    z-index: -1;\r\n  }\r\n  \r\n  .screen-header[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    padding: 10px 20px;\r\n    background: #4d4d4f;\r\n    border-top-left-radius: 15px;\r\n    border-top-right-radius: 15px;\r\n  }\r\n  \r\n  .screen-header-left[_ngcontent-%COMP%] {\r\n    margin-right: auto;\r\n  }\r\n  \r\n  .screen-header-button[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    width: 8px;\r\n    height: 8px;\r\n    margin-right: 3px;\r\n    border-radius: 8px;\r\n    background: white;\r\n  }\r\n  \r\n  .screen-header-button.close[_ngcontent-%COMP%] {\r\n    background: #ed1c6f;\r\n  }\r\n  \r\n  .screen-header-button.maximize[_ngcontent-%COMP%] {\r\n    background: #e8e925;\r\n  }\r\n  \r\n  .screen-header-button.minimize[_ngcontent-%COMP%] {\r\n    background: #74c54f;\r\n  }\r\n  \r\n  .screen-header-right[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  \r\n  .screen-header-ellipsis[_ngcontent-%COMP%] {\r\n    width: 3px;\r\n    height: 3px;\r\n    margin-left: 2px;\r\n    border-radius: 8px;\r\n    background: #999;\r\n  }\r\n  \r\n  .screen-body[_ngcontent-%COMP%] {\r\n    display: flex;\r\n  }\r\n  \r\n  .screen-body-item[_ngcontent-%COMP%] {\r\n    flex: 1;\r\n    padding: 50px;\r\n  }\r\n  \r\n  .screen-body-item.left[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .app-title[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    \r\n    flex-direction: column;\r\n    position: relative;\r\n    color: #ffffff;\r\n    font-size: 26px;\r\n  }\r\n  \r\n  .app-title[_ngcontent-%COMP%]:after {\r\n    content: '';\r\n    display: block;\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 25px;\r\n    height: 4px;\r\n    background: #02ff00;\r\n  }\r\n  \r\n  .app-contact[_ngcontent-%COMP%] {\r\n    margin-top: auto;\r\n    font-size: 8px;\r\n    color: #888;\r\n  }\r\n  \r\n  .app-form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 15px;\r\n    \r\n  }\r\n  \r\n  .app-form-group.message[_ngcontent-%COMP%] {\r\n    margin-top: 40px;\r\n    font-family: 'Pixel';\r\n  }\r\n  \r\n  .app-form-group.buttons[_ngcontent-%COMP%] {\r\n    margin-bottom: 0;\r\n    text-align: right;\r\n  }\r\n  \r\n  .app-form-control[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px 0;\r\n    background: none;\r\n    border: none;\r\n    border-bottom: 1px solid #666;\r\n    color: #ddd;\r\n    font-size: 14px;\r\n    text-transform: uppercase;\r\n    outline: none;\r\n    transition: border-color .2s;\r\n    font-family: 'Pixel';\r\n  }\r\n  \r\n  .app-form-control[_ngcontent-%COMP%]::placeholder {\r\n    color: #666;\r\n  }\r\n  \r\n  .app-form-control[_ngcontent-%COMP%]:focus {\r\n    border-bottom-color: #ddd;\r\n  }\r\n  \r\n  .app-form-button[_ngcontent-%COMP%] {\r\n    background: none;\r\n    border: none;\r\n    color: #02ff00;\r\n    font-size: 14px;\r\n    cursor: pointer;\r\n    outline: none;\r\n  }\r\n  \r\n  .app-form-button[_ngcontent-%COMP%]:hover {\r\n    color: #b9134f;\r\n  }\r\n  \r\n  .credits[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    margin-top: 20px;\r\n    color: #ffa4bd;\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n    font-size: 16px;\r\n    font-weight: normal;\r\n  }\r\n  \r\n  .credits-link[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    text-decoration: none;\r\n  }\r\n  \r\n  .dribbble[_ngcontent-%COMP%] {\r\n    width: 20px;\r\n    height: 20px;\r\n    margin: 0 5px;\r\n  }\r\n  \r\n  @media screen and (max-width: 520px) {\r\n    .screen-body[_ngcontent-%COMP%] {\r\n      flex-direction: column;\r\n    }\r\n  \r\n    .screen-body-item.left[_ngcontent-%COMP%] {\r\n      margin-bottom: 30px;\r\n    }\r\n  \r\n    .app-title[_ngcontent-%COMP%] {\r\n      flex-direction: row;\r\n    }\r\n  \r\n    .app-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n      margin-right: 12px;\r\n    }\r\n  \r\n    .app-title[_ngcontent-%COMP%]:after {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media screen and (max-width: 600px) {\r\n    .screen-body[_ngcontent-%COMP%] {\r\n      padding: 40px;\r\n    }\r\n  \r\n    .screen-body-item[_ngcontent-%COMP%] {\r\n      padding: 0;\r\n    }\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZy1jb250YWN0by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxrQ0FBa0M7RUFDcEM7O0VBRUE7SUFDRSw0SUFBNEk7SUFDNUksc0JBQXNCO0lBSXRCLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFDQUFxQztJQUNyQyxnQkFBZ0I7SUFDaEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsYUFBYTs7RUFFZjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsT0FBTztJQUNQLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxhQUFhOztJQUViLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7O0VBRXJCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFdBQVc7SUFDWCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsb0JBQW9CO0VBQ3RCOztFQUVBO0lBQ0UsV0FBVztFQUNiOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCwyQ0FBMkM7SUFDM0MsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixxQkFBcUI7RUFDdkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFO01BQ0Usc0JBQXNCO0lBQ3hCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0Usa0JBQWtCO0lBQ3BCOztJQUVBO01BQ0UsYUFBYTtJQUNmO0VBQ0Y7O0VBRUE7SUFDRTtNQUNFLGFBQWE7SUFDZjs7SUFFQTtNQUNFLFVBQVU7SUFDWjtFQUNGIiwiZmlsZSI6InBhZy1jb250YWN0by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vY2RuYS5hcnRzdGF0aW9uLmNvbS9wL2Fzc2V0cy9pbWFnZXMvaW1hZ2VzLzAyMy8yMTYvNzQ2L29yaWdpbmFsL3RoaWJhdWx0LWR1cHJlLWxhbmRzY2FwZXYzaGQuZ2lmPzE1Nzg0OTEzMTAnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzNXZoO1xyXG4gIH1cclxuICBcclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHksIGJ1dHRvbiwgaW5wdXQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMS40cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrZ3JvdW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIH1cclxuICBcclxuICAuY29udGFpbmVyIHtcclxuICAgIGZsZXg6IDAgMSA3MDBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjcwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogIzNlM2UzZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDIwcHg7XHJcbiAgICByaWdodDogMjBweDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDIwcHggNDBweCByZ2JhKDAsIDAsIDAsIC40KTtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVuLWhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6ICM0ZDRkNGY7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNXB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4taGVhZGVyLWxlZnQge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVuLWhlYWRlci1idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDhweDtcclxuICAgIGhlaWdodDogOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbi1oZWFkZXItYnV0dG9uLmNsb3NlIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZDFjNmY7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4taGVhZGVyLWJ1dHRvbi5tYXhpbWl6ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZThlOTI1O1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVuLWhlYWRlci1idXR0b24ubWluaW1pemUge1xyXG4gICAgYmFja2dyb3VuZDogIzc0YzU0ZjtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbi1oZWFkZXItcmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbi1oZWFkZXItZWxsaXBzaXMge1xyXG4gICAgd2lkdGg6IDNweDtcclxuICAgIGhlaWdodDogM3B4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJhY2tncm91bmQ6ICM5OTk7XHJcbiAgfVxyXG4gIFxyXG4gIC5zY3JlZW4tYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICBcclxuICAuc2NyZWVuLWJvZHktaXRlbSB7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNjcmVlbi1ib2R5LWl0ZW0ubGVmdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtdGl0bGU6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6ICMwMmZmMDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtY29udGFjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICBjb2xvcjogIzg4ODtcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1mb3JtLWdyb3VwLm1lc3NhZ2Uge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUGl4ZWwnO1xyXG4gIH1cclxuICBcclxuICAuYXBwLWZvcm0tZ3JvdXAuYnV0dG9ucyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtZm9ybS1jb250cm9sIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNjY2O1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMnM7XHJcbiAgICBmb250LWZhbWlseTogJ1BpeGVsJztcclxuICB9XHJcbiAgXHJcbiAgLmFwcC1mb3JtLWNvbnRyb2w6OnBsYWNlaG9sZGVyIHtcclxuICAgIGNvbG9yOiAjNjY2O1xyXG4gIH1cclxuICBcclxuICAuYXBwLWZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjZGRkO1xyXG4gIH1cclxuICBcclxuICAuYXBwLWZvcm0tYnV0dG9uIHtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzAyZmYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5hcHAtZm9ybS1idXR0b246aG92ZXIge1xyXG4gICAgY29sb3I6ICNiOTEzNGY7XHJcbiAgfVxyXG4gIFxyXG4gIC5jcmVkaXRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmE0YmQ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcbiAgXHJcbiAgLmNyZWRpdHMtbGluayB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5kcmliYmJsZSB7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAuc2NyZWVuLWJvZHkge1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnNjcmVlbi1ib2R5LWl0ZW0ubGVmdCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYXBwLXRpdGxlIHtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIH1cclxuICBcclxuICAgIC5hcHAtdGl0bGUgc3BhbiB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxuICBcclxuICAgIC5hcHAtdGl0bGU6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLnNjcmVlbi1ib2R5IHtcclxuICAgICAgcGFkZGluZzogNDBweDtcclxuICAgIH1cclxuICBcclxuICAgIC5zY3JlZW4tYm9keS1pdGVtIHtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbiAgIl19 */"] });


/***/ }),

/***/ 434:
/*!****************************************************!*\
  !*** ./src/app/pag-inicio/pag-inicio.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagInicioComponent": () => (/* binding */ PagInicioComponent)
/* harmony export */ });
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! t-writer.js */ 9995);
/* harmony import */ var t_writer_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(t_writer_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-device-detector */ 6618);



class PagInicioComponent {
    constructor(deviceService) {
        this.deviceService = deviceService;
        this.title = 'PortfolioWeb';
        this.fontColor = "#d1b4ff";
        this.users = ["Álvaro", "Diego", "José", "Raúl"];
        this.barTitleContent = 'Álvaro José Camino González';
        this.message = "I'm read only!";
        this.canEdit = false;
    }
    onEditClick() {
        this.canEdit = !this.canEdit;
        if (this.canEdit) {
            this.message = 'You can edit me!';
        }
        else {
            this.message = "I'm read only!";
        }
    }
    ngOnInit() {
        console.log("¿Qué buscas en el inspeccionar?");
        const target = document.querySelector('.tw');
        const options = {
            loop: true
        };
        const writer = new (t_writer_js__WEBPACK_IMPORTED_MODULE_0___default())(target, {
            loop: false,
            typeSpeed: 10,
            deleteSpeed: 80,
            typeColor: 'lima'
        });
        if (this.deviceService.isMobile()) { // 768px portrait
            writer
                .type('¡Bienvenido a mi Portfolio! Mi nombre es <br>Álvaro y me considero una persona <br>responsable, trabajadora, organizada y con <br>capacidad de trabajar tanto individualmente <br>como en equipo. Mis objetivos son <br>superarme, aprender día a día y avanzar en <br>el sector de las nuevas tecnologías y la <br>informática.<br> <br>> Los lenguajes que utilizo principalmente<br> en mis desarrollos son: <br> ~ PHP <br> ~ HTML <br> ~ CSS  <br> ~ JavaScript <br> ~ C <br> ~ C++ <br> ~ C# <br> ~ Python <br> ~ Django <br> ~ Java <br> ~ Android Studio <br> ~ SQL <br> ~ Unity <br> ~ Angular')
                .rest(500)
                .start();
        }
        else {
            writer
                .type('¡Bienvenido a mi Portfolio! Me llamo Álvaro y me considero una persona responsable, trabajadora, <br>organizada y con capacidad de trabajar tanto individualmente como en equipo. Mis objetivos son <br>superarme, aprender día a día y avanzar en el sector de las nuevas tecnologías, la informática y <br>el desarrollo web.<br> <br>> Los lenguajes que utilizo principalmente en mis desarrollos son: <br> ~ PHP <br> ~ HTML <br> ~ CSS  <br> ~ JavaScript <br> ~ C <br> ~ C++ <br> ~ C# <br> ~ Python <br> ~ Django <br> ~ Java <br> ~ Android Studio <br> ~ SQL <br> ~ Unity <br> ~ Angular')
                .rest(500)
                .start();
        }
    }
}
PagInicioComponent.ɵfac = function PagInicioComponent_Factory(t) { return new (t || PagInicioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_2__.DeviceDetectorService)); };
PagInicioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PagInicioComponent, selectors: [["app-pag-inicio"]], decls: 18, vars: 0, consts: [[1, "containerComponent"], [1, "mainContentInicio"], [1, "row"], [1, "col", "text-center"], ["src", "assets/img/photo.jpeg", "alt", "\u00C1lvaro", 1, "myPhoto"], [1, "titleName"], [1, "subTitleName"], [1, "col"], ["cdkDrag", "", 1, "terminal"], [1, "tw"], ["id", "clouds", "xmlns", "http://www.w3.org/2000/svg", "width", "2611.084", "height", "485.677", "viewBox", "0 0 2611.084 485.677"], ["id", "Path_39", "data-name", "Path 39", "d", "M2379.709,863.793c10-93-77-171-168-149-52-114-225-105-264,15-75,3-140,59-152,133-30,2.83-66.725,9.829-93.5,26.25-26.771-16.421-63.5-23.42-93.5-26.25-12-74-77-130-152-133-39-120-212-129-264-15-54.084-13.075-106.753,9.173-138.488,48.9-31.734-39.726-84.4-61.974-138.487-48.9-52-114-225-105-264,15a162.027,162.027,0,0,0-103.147,43.044c-30.633-45.365-87.1-72.091-145.206-58.044-52-114-225-105-264,15-75,3-140,59-152,133-53,5-127,23-130,83-2,42,35,72,70,86,49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33,61.112,8.015,113.854-5.72,150.492-29.764a165.62,165.62,0,0,0,110.861-3.236c47,94,178,113,251,33,31.385,4.116,60.563,2.495,86.487-3.311,25.924,5.806,55.1,7.427,86.488,3.311,73,80,204,61,251-33a165.625,165.625,0,0,0,120,0c51,13,108,15,157-5a147.188,147.188,0,0,0,33.5-18.694,147.217,147.217,0,0,0,33.5,18.694c49,20,106,18,157,5a165.625,165.625,0,0,0,120,0c47,94,178,113,251,33C2446.709,1093.793,2554.709,922.793,2379.709,863.793Z", "transform", "translate(142.69 -634.312)", "fill", "#eee"]], template: function PagInicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "\u00C1lvaro Jos\u00E9 Camino Gonz\u00E1lez");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Ingeniero inform\u00E1tico");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7)(10, "div", 8)(11, "pre")(12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "> ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "svg", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "path", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } }, styles: ["pre[_ngcontent-%COMP%] {\r\n    font-weight: 100;\r\n    color: lime!important;\r\n}\r\n\r\n.myPhoto[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n    width: 180px;\r\n}\r\n\r\n.terminal[_ngcontent-%COMP%] {\r\n    position:relative;\r\n    width: 100%;\r\n    max-width: 1000px;\r\n    border-radius: 6px;\r\n    padding-top: 45px;\r\n    margin-top: 8px;\r\n    overflow: hidden;\r\n    background-color: rgb(15, 15, 16);\r\n  }\r\n\r\n.terminal[_ngcontent-%COMP%]::before {\r\n    content: \"\\2022 \\2022 \\2022 Terminal\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 4px;\r\n    background: rgb(58, 58, 58);\r\n    color: #c2c3c4;\r\n    width: 100%;\r\n    font-size: 0.95rem;\r\n    font-family: \"Pixel\";\r\n    line-height: 0;\r\n    padding: 14px 0;\r\n    text-indent: 4px;\r\n  }\r\n\r\n.terminal[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\r\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n    font-size: 14px;\r\n    color: white;\r\n    padding: 0 1rem 1rem;\r\n    margin: 0;\r\n  }\r\n\r\nsvg#clouds[_ngcontent-%COMP%] {\r\n    position: fixed;\r\n    bottom: +480px;\r\n    left: -230px;\r\n    z-index: -10;\r\n    width: auto;\r\n  }\r\n\r\n\r\n\r\n@media screen and (max-width: 767px) {\r\n    .terminal[_ngcontent-%COMP%] {\r\n      width: 100%;\r\n    }\r\n  }\r\n\r\n.titleName[_ngcontent-%COMP%]{\r\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n    font-size: 24px;\r\n  }\r\n\r\n.subTitleName[_ngcontent-%COMP%]{\r\n    font-family: SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;\r\n    font-size: 18px;\r\n    color:rgb(54, 67, 82);\r\n  }\r\n\r\n.mainContentInicio[_ngcontent-%COMP%]{\r\n    margin-bottom:20px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZy1pbmljaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQ0FBaUM7RUFDbkM7O0FBRUE7SUFDRSxxQ0FBcUM7SUFDckMsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixjQUFjO0lBQ2QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7RUFDbEI7O0FBRUE7SUFDRSxvRUFBb0U7SUFDcEUsZUFBZTtJQUNmLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsU0FBUztFQUNYOztBQUdBO0lBQ0UsZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7RUFDYjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0lBQ0U7TUFDRSxXQUFXO0lBQ2I7RUFDRjs7QUFFQTtJQUNFLG9FQUFvRTtJQUNwRSxlQUFlO0VBQ2pCOztBQUVBO0lBQ0Usb0VBQW9FO0lBQ3BFLGVBQWU7SUFDZixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxrQkFBa0I7RUFDcEIiLCJmaWxlIjoicGFnLWluaWNpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHJlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogbGltZSFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5teVBob3RvIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAxODBweDtcclxufVxyXG5cclxuLnRlcm1pbmFsIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNSwgMTUsIDE2KTtcclxuICB9XHJcblxyXG4gIC50ZXJtaW5hbDo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFwyMDIyIFxcMjAyMiBcXDIwMjIgVGVybWluYWxcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYig1OCwgNTgsIDU4KTtcclxuICAgIGNvbG9yOiAjYzJjM2M0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICBmb250LWZhbWlseTogXCJQaXhlbFwiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICB0ZXh0LWluZGVudDogNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlcm1pbmFsIHByZSB7XHJcbiAgICBmb250LWZhbWlseTogU0ZNb25vLVJlZ3VsYXIsQ29uc29sYXMsTGliZXJhdGlvbiBNb25vLE1lbmxvLG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDAgMXJlbSAxcmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcblxyXG4gIHN2ZyNjbG91ZHMge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiArNDgwcHg7XHJcbiAgICBsZWZ0OiAtMjMwcHg7XHJcbiAgICB6LWluZGV4OiAtMTA7XHJcbiAgICB3aWR0aDogYXV0bztcclxuICB9XHJcblxyXG4gIC8qIFJlc3BvbnNpdmUgU3R5bGVzICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC50ZXJtaW5hbCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpdGxlTmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1YlRpdGxlTmFtZXtcclxuICAgIGZvbnQtZmFtaWx5OiBTRk1vbm8tUmVndWxhcixDb25zb2xhcyxMaWJlcmF0aW9uIE1vbm8sTWVubG8sbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6cmdiKDU0LCA2NywgODIpO1xyXG4gIH1cclxuICBcclxuICAubWFpbkNvbnRlbnRJbmljaW97XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 3929:
/*!**********************************************************!*\
  !*** ./src/app/pag-proyectos/pag-proyectos.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PagProyectosComponent": () => (/* binding */ PagProyectosComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PagProyectosComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagProyectosComponent.ɵfac = function PagProyectosComponent_Factory(t) { return new (t || PagProyectosComponent)(); };
PagProyectosComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagProyectosComponent, selectors: [["app-pag-proyectos"]], decls: 21, vars: 0, consts: [[1, "containerComponent"], [1, "row"], [1, "col", "text-center"], [1, "wrapper"], [1, "gallery"], ["src", "assets/img/proyectos/salud_opticos.jpg"], ["src", "assets/img/proyectos/tangramBPM.jfif"], ["src", "assets/img/proyectos/PTV.jpg"], ["src", "assets/img/proyectos/AUCORSA.jpg"], ["src", "assets/img/proyectos/APPSUR.jpg"]], template: function PagProyectosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "header")(4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Lista de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "experiencias");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3)(9, "div", 4)(10, "ul")(11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
    } }, styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Condensed:700);\r\n\r\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%], div[_ngcontent-%COMP%], span[_ngcontent-%COMP%], applet[_ngcontent-%COMP%], object[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%], p[_ngcontent-%COMP%], blockquote[_ngcontent-%COMP%], pre[_ngcontent-%COMP%], a[_ngcontent-%COMP%], abbr[_ngcontent-%COMP%], acronym[_ngcontent-%COMP%], address[_ngcontent-%COMP%], big[_ngcontent-%COMP%], cite[_ngcontent-%COMP%], code[_ngcontent-%COMP%], del[_ngcontent-%COMP%], dfn[_ngcontent-%COMP%], em[_ngcontent-%COMP%], img[_ngcontent-%COMP%], ins[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], q[_ngcontent-%COMP%], s[_ngcontent-%COMP%], samp[_ngcontent-%COMP%], small[_ngcontent-%COMP%], strike[_ngcontent-%COMP%], strong[_ngcontent-%COMP%], sub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%], tt[_ngcontent-%COMP%], var[_ngcontent-%COMP%], b[_ngcontent-%COMP%], u[_ngcontent-%COMP%], i[_ngcontent-%COMP%], center[_ngcontent-%COMP%], dl[_ngcontent-%COMP%], dt[_ngcontent-%COMP%], dd[_ngcontent-%COMP%], ol[_ngcontent-%COMP%], ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%], fieldset[_ngcontent-%COMP%], form[_ngcontent-%COMP%], label[_ngcontent-%COMP%], legend[_ngcontent-%COMP%], table[_ngcontent-%COMP%], caption[_ngcontent-%COMP%], tbody[_ngcontent-%COMP%], tfoot[_ngcontent-%COMP%], thead[_ngcontent-%COMP%], tr[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%], article[_ngcontent-%COMP%], aside[_ngcontent-%COMP%], canvas[_ngcontent-%COMP%], details[_ngcontent-%COMP%], embed[_ngcontent-%COMP%], figure[_ngcontent-%COMP%], figcaption[_ngcontent-%COMP%], footer[_ngcontent-%COMP%], header[_ngcontent-%COMP%], hgroup[_ngcontent-%COMP%], menu[_ngcontent-%COMP%], nav[_ngcontent-%COMP%], output[_ngcontent-%COMP%], ruby[_ngcontent-%COMP%], section[_ngcontent-%COMP%], summary[_ngcontent-%COMP%], time[_ngcontent-%COMP%], mark[_ngcontent-%COMP%], audio[_ngcontent-%COMP%], video[_ngcontent-%COMP%] {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n\r\nbody[_ngcontent-%COMP%] {\r\n\tbackground-color: #f2f2f2;\r\n}\r\n\r\nheader[_ngcontent-%COMP%] {\r\n\twidth: 100%;\r\n\tbackground-color: #77cdb4;\r\n\ttext-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%] {\r\n\tfont-family: 'Roboto Condensed', sans-serif;\r\n\tcolor: #FFF;\r\n\tfont-size: 2.3em;\r\n}\r\n\r\nem[_ngcontent-%COMP%] {\r\n\tcolor: #232027;\r\n}\r\n\r\n.wrapper[_ngcontent-%COMP%] {\r\n\twidth: 50%;\r\n\tmargin: 40px auto;\r\n    margin-bottom:250px;\r\n    padding-bottom:25px;\r\n}\r\n\r\ndiv.gallery[_ngcontent-%COMP%] {\r\n\tmargin-top: 30px;\r\n}\r\n\r\ndiv.gallery[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n\tlist-style-type: none;\r\n\tmargin-left: 35px;\r\n}\r\n\r\n\r\n\r\ndiv.gallery[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], div.gallery[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n transition: all 0.1s ease-in-out;\r\n}\r\n\r\ndiv.gallery[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n\tposition: relative;\r\n\tfloat: left;\r\n\twidth: 130px;\r\n\theight: 130px;\r\n\tmargin: 5px;\r\n\tpadding: 5px;\r\n\tz-index: 0;\r\n}\r\n\r\n\r\n\r\n\r\n\r\ndiv.gallery[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\r\n\tz-index: 5;\r\n}\r\n\r\n\r\n\r\ndiv.gallery[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tborder: 1px solid #dddddd;\r\n\tpadding: 5px;\r\n\twidth: 130px;\r\n\theight: 130px;\r\n\tbackground: #f0f0f0;\r\n}\r\n\r\ndiv.gallery[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\r\n\twidth: 200px;\r\n\theight: 200px;\r\n\tmargin-top: -130px;\r\n\tmargin-left: -130px;\r\n\ttop: 65%;\r\n\tleft: 65%;\r\n}\r\n\r\np.attribution[_ngcontent-%COMP%] {\r\n\tfont-family: 'Consolas';\r\n\tcolor: #000;\r\n\tclear: both;\r\n\ttext-align: center;\r\n\tline-height: 25px;\r\n\tpadding-top: 30px;\r\n}\r\n\r\np.attribution[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n\tcolor: #4c8d7c;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZy1wcm95ZWN0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5RUFBeUU7O0FBRXpFOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gseUJBQXlCO0NBQ3pCLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLDJDQUEyQztDQUMzQyxXQUFXO0NBQ1gsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsVUFBVTtDQUNWLGlCQUFpQjtJQUNkLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7O0FBRUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIsaUJBQWlCO0FBQ2xCOztBQUVBLGNBQWM7O0FBQ2Q7Q0FJRyxnQ0FBZ0M7QUFDbkM7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2IsV0FBVztDQUNYLFlBQVk7Q0FDWixVQUFVO0FBQ1g7O0FBRUEseUNBQXlDOztBQUN6QyxrREFBa0Q7O0FBQ2xEO0NBQ0MsVUFBVTtBQUNYOztBQUVBLHNDQUFzQzs7QUFDdEM7Q0FDQyxrQkFBa0I7Q0FDbEIsT0FBTztDQUNQLE1BQU07Q0FDTix5QkFBeUI7Q0FDekIsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLFFBQVE7Q0FDUixTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsV0FBVztDQUNYLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLGNBQWM7QUFDZjs7QUFFQSxvQkFBb0IiLCJmaWxlIjoicGFnLXByb3llY3Rvcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6NzAwKTtcclxuXHJcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxyXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXHJcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcclxuYiwgdSwgaSwgY2VudGVyLFxyXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcclxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXHJcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcclxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXHJcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGZvbnQtc2l6ZTogMTAwJTtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxufVxyXG5cclxuYm9keSB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNzdjZGI0O1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDEge1xyXG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XHJcblx0Y29sb3I6ICNGRkY7XHJcblx0Zm9udC1zaXplOiAyLjNlbTtcclxufVxyXG5cclxuZW0ge1xyXG5cdGNvbG9yOiAjMjMyMDI3O1xyXG59XHJcblxyXG4ud3JhcHBlciB7XHJcblx0d2lkdGg6IDUwJTtcclxuXHRtYXJnaW46IDQwcHggYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206MjUwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyNXB4O1xyXG59XHJcblxyXG5kaXYuZ2FsbGVyeSB7XHJcblx0bWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuZGl2LmdhbGxlcnkgdWwge1xyXG5cdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHRtYXJnaW4tbGVmdDogMzVweDtcclxufVxyXG5cclxuLyogYW5pbWF0aW9uICovXHJcbmRpdi5nYWxsZXJ5IHVsIGxpLCBkaXYuZ2FsbGVyeSBsaSBpbWcge1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgXHQtbW96LXRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xyXG4gIFx0LW8tdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgXHR0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuZGl2LmdhbGxlcnkgdWwgbGkge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMTMwcHg7XHJcblx0aGVpZ2h0OiAxMzBweDtcclxuXHRtYXJnaW46IDVweDtcclxuXHRwYWRkaW5nOiA1cHg7XHJcblx0ei1pbmRleDogMDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIHotaW5kZXggaXMgaGlnaGVyIG9uIGhvdmVyICovXHJcbi8qIEVuc3VyZSB0aGF0IGhvdmVyIGltYWdlIG92ZXJsYXBwZWQgdGhlIG90aGVycyAqL1xyXG5kaXYuZ2FsbGVyeSB1bCBsaTpob3ZlciB7XHJcblx0ei1pbmRleDogNTtcclxufVxyXG5cclxuLyogSW1hZ2UgaXMgcG9zaXRpb24gbmljZWx5IHVuZGVyIGxpICovXHJcbmRpdi5nYWxsZXJ5IHVsIGxpIGltZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGxlZnQ6IDA7XHJcblx0dG9wOiAwO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcblx0cGFkZGluZzogNXB4O1xyXG5cdHdpZHRoOiAxMzBweDtcclxuXHRoZWlnaHQ6IDEzMHB4O1xyXG5cdGJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbn1cclxuXHJcbmRpdi5nYWxsZXJ5IHVsIGxpIGltZzpob3ZlciB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG5cdGhlaWdodDogMjAwcHg7XHJcblx0bWFyZ2luLXRvcDogLTEzMHB4O1xyXG5cdG1hcmdpbi1sZWZ0OiAtMTMwcHg7XHJcblx0dG9wOiA2NSU7XHJcblx0bGVmdDogNjUlO1xyXG59XHJcblxyXG5wLmF0dHJpYnV0aW9uIHtcclxuXHRmb250LWZhbWlseTogJ0NvbnNvbGFzJztcclxuXHRjb2xvcjogIzAwMDtcclxuXHRjbGVhcjogYm90aDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0bGluZS1oZWlnaHQ6IDI1cHg7XHJcblx0cGFkZGluZy10b3A6IDMwcHg7XHJcbn1cclxuXHJcbnAuYXR0cmlidXRpb24gYSB7XHJcblx0Y29sb3I6ICM0YzhkN2M7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgaGFjayAqL1xyXG4iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map