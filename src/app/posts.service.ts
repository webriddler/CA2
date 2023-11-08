import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const apiURL = 'https://jsonplaceholder.typicode.com/posts';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  constructor(private http:HttpClient) { }

  getPostData():Observable<any>{ 
    return this.http.get(`${apiURL}`);
  }
}
