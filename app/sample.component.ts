import {Component} from '@angular/core';
import {REACTIVE_FORM_DIRECTIVES,FORM_PROVIDERS,FormBuilder,FormGroup} from '@angular/forms';
import {Observable}  from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
@Component({
    selector:'jq',
    template:`<div class="container">
                <form [formGroup]="form">
                    <input type="text" id="search" class="form-control" formControlName="search">
                </form>
              </div>`,
    directives:[REACTIVE_FORM_DIRECTIVES],
    providers:[FORM_PROVIDERS]          
})
export class SampleComponent{
    form:FormGroup;
    constructor(private _fb:FormBuilder){
        this.form=this._fb.group({
            search:['']
        });
        
        this.form.find('search').valueChanges
        .filter(data=>data.length>3)
        .debounceTime(400)
        .subscribe(data=>console.log(data));
    }
}