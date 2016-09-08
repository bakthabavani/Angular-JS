import {Component} from '@angular/core';
import {FORM_DIRECTIVES} from '@angular/forms';
@Component({
    selector:'comment',
    templateUrl:'app/comment.template.html',
    directives:[FORM_DIRECTIVES]
})
export class CommentComponent{
    handler(form){
        console.log(form);
    }
}