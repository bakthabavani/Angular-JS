import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES,FORM_PROVIDERS,FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

import {CustomValidators} from './custom.validators'

@Component({
    selector:'comment',
    templateUrl:'app/commenttd.template.html',
    directives:[REACTIVE_FORM_DIRECTIVES],
    providers:[FORM_PROVIDERS]
})
export class CommentComponent{
    myform:FormGroup;
    handler(){
        console.log(this.myform);
    }
    constructor(private _fb:FormBuilder){
        /*this.form=new FormGroup({
            'uname':new FormControl(' '),
            'comment':new FormControl(' ')
        })*/

        this.myform=this._fb.group({
            uname:['',[Validators.required,Validators.minLength(5),CustomValidators.usernameValidator]],
            comment:['']
        })
    }
}