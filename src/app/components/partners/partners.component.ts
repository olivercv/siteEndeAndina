import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  slides = [
    {
      number: '01.',
      image : '../../../assets/img/partners/img-1.png',
      url: 'http://www.ende.bo/'
    },
    {
      number: '02.',
      image : '../../../assets/img/partners/elfec.png',
      url: 'http://www.elfec.com/'
    },
    {
      number: '03.',
      image : '../../../assets/img/partners/endeLaPaz.png',
      url: 'https://www.delapaz.bo/'
    },
    {
      number: '04.',
      image : '../../../assets/img/partners/endeCorani.png',
      url: 'http://www.endecorani.bo/'
    },
    {
      number: '05.',
      image : '../../../assets/img/partners/cndc.png',
      url: 'https://www.cndc.bo/'
    },
    {
      number: '06.',
      image : '../../../assets/img/partners/endeServicios.png',
      url: 'https://www.endesyc.bo/'
    },
    {
      number: '07.',
      image : '../../../assets/img/partners/atn.png',
      url: 'https://www.aetn.gob.bo/web/'
    }
  ];

 

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
