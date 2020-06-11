import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  private url: string = 'https://www.googleapis.com/youtube/v3';
  private apiKey: string = 'AIzaSyCdcul7yBfSYlKOrDoXeBPok3WSU--nR8k';
  private canal: string = 'UCTO60otE9hhDtDXS5II9cSQ';

  constructor(private http: HttpClient) { }

  obtenerVideos() {
    const parametros = new HttpParams().set('part', 'snippet').set('channelId', this.canal).set('maxResults', '20').set('key', this.apiKey);
    const vinculo = `${this.url}/search`;
    return this.http.get(vinculo, {params: parametros}).pipe(map(resp => resp));
  }

}
