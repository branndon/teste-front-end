import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ListaService {
    url: string;
    apiKey = 'AIzaSyDThsOo9LuWP8Tt900Bfa5zCX68YKNEA2w';

    constructor( private http: Http ) { }

    searchVideo( term: string ) {
        this.url =
        // tslint:disable-next-line:max-line-length
        'https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=' + term + '&key=' + this.apiKey + '&maxResults=50&order=title';

        return this.http.get(
            this.url
        ).pipe(map(result => result));
    }

    getVideo( videoId: string ) {
        this.url =
        // tslint:disable-next-line:max-line-length
        'https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=' + videoId + '&key=' + this.apiKey + '';

        return this.http.get(
            this.url
        ).pipe(map(result => result));
    }

}
