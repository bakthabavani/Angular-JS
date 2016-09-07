import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';
@Component({
    selector:'login-form',
    templateUrl:'app/login.template.html',
    directives:[FORM_DIRECTIVES]
})
export class LoginComponent{
    username='vamsi';
    onBlur(control){
        console.log(control);
    }
}