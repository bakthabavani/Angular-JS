/// <reference path="../typings/index.d.ts" />
import 'jquery';
import 'underscore';
import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {HTTP_PROVIDERS} from '@angular/http';
import {disableDeprecatedForms,provideForms} from '@angular/forms';
bootstrap(AppComponent,[disableDeprecatedForms(),provideForms(),HTTP_PROVIDERS]);
