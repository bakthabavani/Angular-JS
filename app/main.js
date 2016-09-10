"use strict";
/// <reference path="../typings/index.d.ts" />
require('jquery');
require('underscore');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [forms_1.disableDeprecatedForms(), forms_1.provideForms(), http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map