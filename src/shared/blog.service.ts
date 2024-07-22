import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlog, IComment } from './entities';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
  private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private http: HttpClient) { }

  fetchAllBlogs() {
    return this.http.get<IBlog[]>(this.postsUrl);
  }

  fetchAllComments() {
    return this.http.get<IComment[]>(this.commentsUrl);
  }
}
