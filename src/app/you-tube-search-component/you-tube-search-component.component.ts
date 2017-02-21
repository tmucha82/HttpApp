import {Component, OnInit, Injectable, Inject} from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";

class SearchResult {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;

  constructor(obj?: any) {
    this.id = obj && obj.id || null;
    this.title = obj && obj.title || null;
    this.description = obj && obj.description || null;
    this.thumbnailUrl = obj && obj.thumbnailUrl || null;
    this.videoUrl = obj && obj.videoUrl || `https://www.youtube.com/watch?v=${this.id}`;
  }
}

/*
 This API key may or may not work for you. Your best bet is to issue your own
 API key by following these instructions:
 https://developers.google.com/youtube/registering_an_application#Create_API_Keys

 Here I've used a **server key** and make sure you enable YouTube.

 Note that if you do use this API key, it will only work if the URL in
 your browser is "localhost"
 */
export const YOUTUBE_API_KEY: string = 'AIzaSyDOfT_BO81aEZScosfTYMruJobmpjqNeEk';
export const YOUTUBE_API_URL: string = 'https://www.googleapis.com/youtube/v3/search';
let loadingGif: string = ((<any>window).__karma__) ? '' : require('images/loading.gif');

export const youTubeServiceInjectable: Array<any> = [
  {provide: YouTubeService, useClass: YouTubeService},
  {provide: YOUTUBE_API_KEY, useValue: YOUTUBE_API_KEY},
  {provide: YOUTUBE_API_URL, useValue: YOUTUBE_API_URL}
];

/**
 * YouTubeService connects to the YouTube API
 * See: * https://developers.google.com/youtube/v3/docs/search/list
 */
@Injectable()
export class YouTubeService {
  constructor(private http: Http,
              @Inject(YOUTUBE_API_KEY) private apiKey: string,
              @Inject(YOUTUBE_API_URL) private apiUrl: string) {
  }

  search(query: string): Observable<SearchResult[]> {
    let params: string = [
      `q=${query}`,
      `key=${this.apiKey}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&');
    let queryUrl: string = `${this.apiUrl}?${params}`;
    return this.http.get(queryUrl).map((response: Response) => {
        return (response.json()).items.map(item => {
          // console.log("raw item", item); // uncomment if you want to debug
          return new SearchResult({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          });
        });
      });
  }

}


  @Component({
  selector: 'app-you-tube-search-component',
  templateUrl: './you-tube-search-component.component.html',
  styleUrls: ['./you-tube-search-component.component.css']
})
export class YouTubeSearchComponentComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
