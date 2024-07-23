import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IBlog, IComment, IUsers } from './entities';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  fetchAllBlogs() {
    return this.http.get<IBlog[]>(`${this.url}/posts`);
  }

  fetchAllComments() {
    return this.http.get<IComment[]>(`${this.url}/comments`);
  }

  fetchAllUsers() {
    return this.http.get<IUsers[]>(`${this.url}/users`);
  }

  fetchOne(id: any) {
    return this.http.get<IBlog>(`${this.url}/posts/${id}`);
  }
}
