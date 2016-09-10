import { Component,AfterViewInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="form-group">
        <label for="search">Search</label>
        <input class="form-control" type="text" name="search" id="search"/>
      </div>
    </div>  
  `
})
export class AppComponent implements AfterViewInit { 
    ngAfterViewInit(){
        var debounce=_.debounce(function(text){
            var url="https://api.github.com/users/"+text;
            $.getJSON(url,function(data){
              console.log(data);
            })
        },400)
        $('#search').keyup(function(e){
            var text=e.target.value; 
            if(text.length<5) return;        
            debounce(text);    
        });
    }
}
