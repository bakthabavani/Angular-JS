import {Component} from '@angular/core';
@Component({
    selector:'like',
    template:'<span [hidden]="show">Content</span>'
})
export class LikeComponent{
    show = true;
}