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
var Rx_1 = require('rxjs/Rx');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var keyups = Rx_1.Observable.fromEvent($('#search'), 'keyup')
            .map(function (e) { return e.target.value; })
            .filter(function (e) { return e.length > 3; })
            .debounceTime(400)
            .distinctUntilChanged()
            .mergeMap(function (text) {
            var url = "https://api.github.com/users/" + text;
            var promise = $.getJSON(url);
            return Rx_1.Observable.fromPromise(promise);
        });
        keyups.subscribe(function (data) { return console.log(data); });
        /*var debounce=_.debounce(function(text){
            var url="https://api.github.com/users/"+text;
            $.getJSON(url,function(data){
              console.log(data);
            })
        },400)
        $('#search').keyup(function(e){
            var text=e.target.value;
            if(text.length<5) return;
            debounce(text);
        });*/
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"container\">\n      <div class=\"form-group\">\n        <label for=\"search\">Search</label>\n        <input class=\"form-control\" type=\"text\" name=\"search\" id=\"search\"/>\n      </div>\n    </div>  \n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map