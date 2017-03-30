import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Post, PostService } from '../shared/index';

@Component({
  selector: 'octo-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Observable<Post[]>;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.posts = this.postService.findAll();
  }

}
