import { Component, OnInit } from '@angular/core';
import { PublicationsService } from '../../services/publications.service';
import { IPublication } from 'src/app/interfaces/interfaces';
import { GLOBAL } from '../../config/global.service';
import { ICategory } from '../../interfaces/interfaces';
import { CategoriesService } from '../../services/categories.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  loadingCat = true;
  
  categories: ICategory[] = [];
  totalCat = 0;
  toCat = 0;

  loading = true;
  publications: IPublication[] = [];
  total = 0;
  to = 0;
  ruta = GLOBAL.urlServices;

  constructor( public publicationsService: PublicationsService,
               public categoriesService: CategoriesService
    ) {
   }

  ngOnInit(): void {
    this.getPublications();
    this.getCategories();
    // console.log('Resultados de Noticias ', this.publications);
  }

  getPublications() {
    this.loading = true;
    this.publicationsService.getPublications( this.to)
    .subscribe( (result: any) => {
      this.publications.push(...result);
      this.loading = false;
    });
  }

  getCategories() {
    this.loadingCat = true;
    this.categoriesService.getCategories( this.toCat)
        .subscribe( (res: any) => {
          console.log('Llega al componente', res);
          this.categories.push(...res);
          this.loadingCat = false;
        });
  }

}
