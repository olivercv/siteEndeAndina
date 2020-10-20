import { Component, OnInit } from '@angular/core';
import { IPublication } from 'src/app/interfaces/interfaces';
import { GLOBAL } from '../../config/global.service';
import { PublicationsService } from 'src/app/services/publications.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {s;
  loading = true;
  publications: IPublication[] = [];
  total = 0;
  to = 0;
  ruta = GLOBAL.urlServices;

  // SlideOptions = { items: 1, dots: true, nav: true };
  // CarouselOptions = { items: 3, dots: true, nav: true };
  SlideOptions: OwlOptions = {
    autoplay: false,
    smartSpeed: 100,
    margin: 0,
    loop: true,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
        0 : {
            items: 1
        },

        600 : {
            items: 2
        },

        768 : {
            items: 2
        },

        1200 : {
            items: 3
        }
    }
  };

  constructor(
    public publicationsService: PublicationsService,
    public categoriesService: CategoriesService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.getPublications();
  }

  getPublications() {
    this.loading = true;
    this.publicationsService.getPublications( this.to)
    .subscribe( (result: any) => {
      this.publications = result;
      // this.publications.push(...result);
      this.loading = false;
    });
  }

 
}
