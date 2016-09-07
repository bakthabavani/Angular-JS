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
var NavComponent = (function () {
    function NavComponent() {
        this.viewMode = 'profiles';
    }
    NavComponent = __decorate([
        core_1.Component({
            selector: 'nav',
            template: "\n        <ul class=\"nav nav-pills\">\n            <li class=\"active\"><a href=\"#\">Home</a></li>\n            <li><a href=\"#\">Profile</a></li>\n            <li><a href=\"#\">Messages</a></li>\n        </ul>\n        <div [ngSwitch]=\"viewMode\">\n            <template [ngSwitchWhen]=\"'home'\">Home</template>\n            <template [ngSwitchWhen]=\"'profiles'\">Profiles</template>\n            <template [ngSwitchWhen]=\"'messages'\">Messages</template>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;
//# sourceMappingURL=nav.component.js.map