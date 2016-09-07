"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var like_component_1 = require('./like.component');
var nav_component_1 = require('./nav.component');
var panel_component_1 = require('./panel.component');
var login_component_1 = require('./login.component');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  \n    <h1>My First Angular 2 App</h1>\n    <nav></nav>\n    <vm-panel>\n        <div class=\"heading\">Head Content</div>\n        <div class=\"body\">Body Content</div>\n    </vm-panel>\n    <login-form></login-form>\n  ",
            directives: [like_component_1.LikeComponent, nav_component_1.NavComponent, panel_component_1.PanelComponent, login_component_1.LoginComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map