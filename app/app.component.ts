import { Component } from '@angular/core';
import {LikeComponent} from './like.component';
import {NavComponent} from './nav.component';
import {PanelComponent} from './panel.component';
import {LoginComponent} from './login.component'; 
import {CommentComponent} from './commenttd.component';
@Component({
  selector: 'my-app',
  template: `
      <comment></comment>
  `,
  directives:[LikeComponent,NavComponent,PanelComponent,LoginComponent,CommentComponent]
})
export class AppComponent { }
