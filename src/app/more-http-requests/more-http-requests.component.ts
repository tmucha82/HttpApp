import {Component, OnInit} from '@angular/core';
import {Http, Response, RequestOptions, Headers} from "@angular/http";

@Component({
  selector: 'more-http-requests',
  templateUrl: './more-http-requests.component.html',
  styleUrls: ['./more-http-requests.component.css']
})
export class MoreHttpRequestsComponent implements OnInit {
  data: Object;
  loading: boolean;

  constructor(private http: Http) {
  }

  ngOnInit() {
  }

  makePost() {
    this.loading = true;
    this.http.post('http://jsonplaceholder.typicode.com/posts', JSON.stringify({
      body: 'bar',
      title: 'foo',
      userId: 1
    })).subscribe((response: Response) => {
      this.loading = false;
      this.data = response.json();
    })
  }

  makeDelete() {
    this.loading = true;
    this.http.delete('http://jsonplaceholder.typicode.com/posts/1')
      .subscribe((response: Response) => {
        this.loading = false;
        this.data = response.json();
      });
  }

  makeHeaders() {
    this.loading = true;
    let headers: Headers = new Headers();
    headers.append('X-API-TOKEN', 'ng-book');
    let options: RequestOptions = new RequestOptions();
    options.headers = headers
    this.http.get('http://jsonplaceholder.typicode.com/posts/1', options)
      .subscribe((response: Response) => {
        this.loading = false;
        this.data = response.json();
      });
  }

}
