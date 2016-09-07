import {Component} from '@angular/core';
@Component({
    selector:'nav',
    template:`
        <ul class="nav nav-pills">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Messages</a></li>
        </ul>
        <div [ngSwitch]="viewMode">
            <template [ngSwitchWhen]="'home'">Home</template>
            <template [ngSwitchWhen]="'profiles'">Profiles</template>
            <template [ngSwitchWhen]="'messages'">Messages</template>
        </div>
    `
})
export class NavComponent{
    viewMode='profiles';
}