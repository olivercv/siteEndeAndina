import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../config/global.service';
import { INews } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  total = 0;
  public uri: string;

  constructor(public http: HttpClient, public router: Router) {
    this.uri = GLOBAL.urlServices;
   }

   getPublications( to: number = 0 ) {
    const url = this.uri + '/publication?to=' + to;
    return this.http.get<INews>( url ).pipe(
        map( results => {
          this.total = results['total'];
          return results['publications'];
        })
    );
  }
}
