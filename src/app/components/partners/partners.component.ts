import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  Images = ['../../../assets/img/partners/img-1.png',
  '../../../assets/img/partners/elfec.png',
  '../../../assets/img/partners/endeLaPaz.png',
  '../../../assets/img/partners/endeCorani.png',
  '../../../assets/img/partners/cndc.png',
  '../../../assets/img/partners/endeServicios.png'];

  // SlideOptions = { items: 1, dots: true, nav: true };
  // CarouselOptions = { items: 3, dots: true, nav: true };

  SlideOptions = {
    autoplay:true,
    smartSpeed: 300,
    margin: 30,
    loop:true,
    autoplayHoverPause:true,
    dots: false,
    responsive: {
        0 : {
            items: 2
        },

        550 : {
            items: 3
        },

        992 : {
            items: 4
        },

        1200 : {
            items: 5
        }
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
