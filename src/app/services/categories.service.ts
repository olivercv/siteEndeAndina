import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { GLOBAL } from '../config/global.service';
import { ICategories } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  total = 0;
  public uri: string;

  constructor( public http: HttpClient, public router: Router ) {
    this.uri = GLOBAL.urlServices;
   }

   getCategories( to: number = 0 ) {
    const url = this.uri + '/category?to=' + to;
    return this.http.get<ICategories>( url ).pipe(
        map( results => {
          this.total = results['total'];
          return results['categories'];
        })
    );
  }
}
