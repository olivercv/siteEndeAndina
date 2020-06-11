import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})
export class CarruselComponent implements OnInit {s

slides = [
  {
    number: '01.',
    image : '../../../assets/img/images/post-preview1.jpg',
    title: 'Planta Termoeléctrica Entre Ríos',
    detail: 'Travelling salesman and above it there hung a picture that he had recently cut out',
    url: '#'
  },
  {
    number: '02.',
    image : '../../../assets/img/images/post-preview2.jpg',
    title: 'Planta Termoeléctrica Del Sur',
    detail: 'Travelling salesman and above it there hung a picture that he had recently cut out',
    url: '#'
  },
  {
    number: '03.',
    image : '../../../assets/img/images/post-preview3.jpg',
    title: 'Planta Termoeléctrica Warnes',
    detail: 'Travelling salesman and above it there hung a picture that he had recently cut out',
    url: '#'
  }
];


  // SlideOptions = { items: 1, dots: true, nav: true };
  // CarouselOptions = { items: 3, dots: true, nav: true };

  SlideOptions = {
    autoplay: false,
    smartSpeed: 100,
    margin: 0,
    loop:true,
    autoplayHoverPause:true,
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
  constructor() { }

  ngOnInit(): void {
  }

}
