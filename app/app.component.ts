import { Component,AfterViewInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {PostService} from './post.service';
@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <div class="form-group">
        <label for="search">Search</label>
        <input class="form-control" type="text" name="search" id="search"/>
      </div>
    </div>  
  `,
  providers:[PostService]
})
export class AppComponent implements AfterViewInit {
    constructor(private _postService:PostService){
      this._postService.getPosts().subscribe(data=>console.log(data));
    }
    ngAfterViewInit(){
        /*var keyups=Observable.fromEvent($('#search'),'keyup')
                   .map(e=>e.target.value)
                   .filter(e=>e.length>3)
                   .debounceTime(500)
                   .distinctUntilChanged()
                   .mergeMap((text)=>{
                      var url="https://api.github.com/users/"+text;
                      var promise=$.getJSON(url);
                      return Observable.fromPromise(promise);
                   });
        keyups.subscribe(data=>console.log(data));
*/
        /*var debounce=_.debounce(function(text){
            var url="https://api.github.com/users/"+text;
            $.getJSON(url,function(data){
              console.log(data);
            })
        },400)
        $('#search').keyup(function(e){
            var text=e.target.value; 
            if(text.length<5) return;        
            debounce(text);    
        });*/
    }
}
