import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post[] = [
    {
      title: "Grand Circus",
      thought: "Grand Circus is cool."
    },
    {
      title: "Ritual",
      thought: "Ritual is a well developed app."
    },
    {
      title: "Scott",
      thought: "Scott rides scooters."
    }
  ];

  constructor() { }
  
  // Delete Social Post
  deletePost(item) {
    this.post = this.post.filter((x) => x !== item);
  }

  ngOnInit(): void {
  }

}
