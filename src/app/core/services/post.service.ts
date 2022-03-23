import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private _http: HttpClient) {}

  getPosts() {
    return firstValueFrom<Post[]>(this._http.get<Post[]>('https://jsonplaceholder.typicode.com/todos'));
  }

  createPost(post: Post) {
    return firstValueFrom(this._http.post(`https://jsonplaceholder.typicode.com/todos`, post));
  }

  updatePost(post: Post) {
    return firstValueFrom(this._http.put(`https://jsonplaceholder.typicode.com/todos/${post.id}`, post));
  }
}
