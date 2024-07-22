import { Component, OnInit, inject } from '@angular/core';
import { IBlog, IComment } from '../../shared/entities';
import { BlogService } from '../../shared/blog.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'] // Correction : styleUrls au lieu de styleUrl
})
export class BlogComponent implements OnInit {

  articles: IBlog[] = [];
  comments: IComment[] = [];
  private blogService = inject(BlogService); // Correction : utilisation de inject pour BlogService

  ngOnInit(): void {
    this.getBlog();
    this.getComments();
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
}

