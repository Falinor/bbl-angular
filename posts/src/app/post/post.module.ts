import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { PostRoutingModule } from './post-routing.module';
import { PostService } from './shared/post.service';
import { PostListComponent } from './post-list/post-list.component';
import { CommentComponent } from './comment/comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,

    PostRoutingModule
  ],
  declarations: [PostListComponent, CommentComponent],
  providers: [PostService]
})
export class PostModule { }
