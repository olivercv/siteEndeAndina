import { Component, OnInit } from '@angular/core';
import { GLOBAL } from '../../config/global.service';
import { IPublication, ICategory } from '../../interfaces/interfaces';
import { PublicationsService } from '../../services/publications.service';
import { CategoriesService } from '../../services/categories.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styles: []
})
export class NewComponent implements OnInit {

  loadingCat = true;

  categories: ICategory[] = [];
  totalCat = 0;
  toCat = 0;

  ruta = GLOBAL.urlServices;

  publication: IPublication;

  constructor(
    public publicationsService: PublicationsService,
    public categoriesService: CategoriesService,
    public router: Router,
    public activatedRoute: ActivatedRoute
  ) {

    activatedRoute.params.subscribe( params => {
      const id = params.id;
      console.log('identificador ', id);
      this.getPublication( id );
    });
  }

  ngOnInit(): void {
    this.getCategories();
  }

  getPublication( id: string ) {
    this.publicationsService.getPublication( id )
            .subscribe( publication => {
              this.publication = publication;
              this.publication.category = publication.category._id;
            } );
  }

  getCategories() {
    this.loadingCat = true;
    this.categoriesService.getCategories( this.toCat)
        .subscribe( (res: any) => {
          // console.log('Llega al componente', res);
          this.categories.push(...res);
          this.loadingCat = false;
        });
  }


}
