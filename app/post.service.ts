import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class PostService{
    constructor(private _http:Http){
    }
    getPosts(){
        return this._http.get('http://jsonplaceholder.typicode.com/posts')
                         .map(response=>response.json());
    }
    createPost(post){
        this._http.post('http://jsonplaceholder.typicode.com/posts',JSON.stringify(post))
                  .map(response=>response.json());   
    }
}