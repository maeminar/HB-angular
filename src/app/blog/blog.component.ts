import { Component, OnInit, inject } from '@angular/core';
import { IBlog, IComment, IUsers } from '../../shared/entities';
import { BlogService } from '../../shared/blog.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  articles: IBlog[] = [];
  comments: IComment[] = [];
  users: IUsers[] = [];
  private blogService = inject(BlogService);

  ngOnInit(): void {
    this.getBlog();
    this.getComments();
    this.getUsers();
  }

  getBlog() {
    this.blogService.fetchAllBlogs().subscribe((data: IBlog[]) => {
      this.articles = data; 
    });
  }

  getComments() {
    this.blogService.fetchAllComments().subscribe((data: IComment[]) => {
      this.comments = data;
    });
  }

  getUsers() {
    this.blogService.fetchAllUsers().subscribe(
      (data: IUsers[]) => {
        this.users = data;
      },
      error => console.error("users not found", error)
    );
  }

  getUserName(userId: number): string {
    const user = this.users.find(user => user.id === userId);
    return user ? user.name : 'Pas de user trouvé';
  }

}


