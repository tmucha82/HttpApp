import { Component, OnInit } from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'app-simple-http-component',
  templateUrl: './simple-http-component.component.html',
  styleUrls: ['./simple-http-component.component.css']
})
export class SimpleHttpComponentComponent implements OnInit {
  loading: boolean;
  data: Object;

  constructor(public http: Http) {
  }

  ngOnInit() {
  }

  makeRequest() {
    this.loading = true;
    this.http.request('http://jsonplaceholder.typicode.com/posts/1').subscribe((response: Response) => {
      this.data = response.json();
      this.loading = false;
    })
  }
}
