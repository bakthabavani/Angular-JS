import { Component } from '@angular/core';
import {LikeComponent} from './like.component';
import {NavComponent} from './nav.component';
import {PanelComponent} from './panel.component';
import {LoginComponent} from './login.component'; 
@Component({
  selector: 'my-app',
  template: `
  
    <h1>My First Angular 2 App</h1>
    <nav></nav>
    <vm-panel>
        <div class="heading">Head Content</div>
        <div class="body">Body Content</div>
    </vm-panel>
    <login-form></login-form>
  `,
  directives:[LikeComponent,NavComponent,PanelComponent,LoginComponent]
})
export class AppComponent { }
