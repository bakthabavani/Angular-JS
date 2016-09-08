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
var custom_validators_1 = require('./custom.validators');
var CommentComponent = (function () {
    function CommentComponent(_fb) {
        /*this.form=new FormGroup({
            'uname':new FormControl(' '),
            'comment':new FormControl(' ')
        })*/
        this._fb = _fb;
        this.myform = this._fb.group({
            uname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(5), custom_validators_1.CustomValidators.usernameValidator]],
            comment: ['']
        });
    }
    CommentComponent.prototype.handler = function () {
        console.log(this.myform);
    };
    CommentComponent = __decorate([
        core_1.Component({
            selector: 'comment',
            templateUrl: 'app/commenttd.template.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [forms_1.FORM_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], CommentComponent);
    return CommentComponent;
}());
exports.CommentComponent = CommentComponent;
//# sourceMappingURL=commenttd.component.js.map