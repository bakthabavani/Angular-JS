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
var forms_1 = require('@angular/forms');
require('rxjs/add/operator/filter');
require('rxjs/add/operator/debounceTime');
var SampleComponent = (function () {
    function SampleComponent(_fb) {
        this._fb = _fb;
        this.form = this._fb.group({
            search: ['']
        });
        this.form.find('search').valueChanges
            .filter(function (data) { return data.length > 3; })
            .debounceTime(400)
            .subscribe(function (data) { return console.log(data); });
    }
    SampleComponent = __decorate([
        core_1.Component({
            selector: 'jq',
            template: "<div class=\"container\">\n                <form [formGroup]=\"form\">\n                    <input type=\"text\" id=\"search\" class=\"form-control\" formControlName=\"search\">\n                </form>\n              </div>",
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FORM_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], SampleComponent);
    return SampleComponent;
}());
exports.SampleComponent = SampleComponent;
//# sourceMappingURL=sample.component.js.map