import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../config/global.service';
import { INews, IPublication } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  total = 0;
  public uri: string;

  constructor(public http: HttpClient, public router: Router) {
    this.uri = GLOBAL.urlServices;
   }

   getPublication( id: string ) {
    const url = this.uri + '/publication/' + id;
    return this.http.get<IPublication>( url ).pipe(
          map( (resp: any) => resp.publication )
    );
  }

   getPublications( to: number = 0 ) {
    const url = this.uri + '/publication?to=' + to;
    return this.http.get<INews>( url ).pipe(
        map( results => {
          this.total = results.total;
          results.publications.sort((a, b) => {
            return a.date > b.date ? -1 : 1;
         });
          return results.publications;
        })
    );
  }
}
