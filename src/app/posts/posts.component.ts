import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  results = '';

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    interface PostsTitle {
      title: string;
    }

    this.http.get<PostsTitle>
    ('https://jsonplaceholder.typicode.com/albums').subscribe(data => {
      console.log(data[1].title);
    });
  }
}
