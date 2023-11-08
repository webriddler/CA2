import { Component } from '@angular/core';
import { Post } from 'src/app/post';
import { PostsService } from 'src/app/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  allPost: Post[] = [];

  constructor(private post: PostsService){
    post.getPostData().subscribe((data)=>{
      this.allPost = data;
    }, (error) => {
      alert('Something Went Wrong!')
      console.log(error);
    })
  }
}
