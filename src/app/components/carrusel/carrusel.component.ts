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
    title: 'UNICOM/ENDE CORPORACIÓN: ENDE SE REUNIÓ CON EMBAJADOR DE BOLIVIA EN BRASIL',
    detail: 'Ejecutivos de ENDE Corporación y el embajador de Bolivia en Brasil,  Wilfredo Rojo Parada, se reunieron con el objetivo de retomar la agenda energética Bolivia – Brasil',
    url: '#'
  },
  {
    number: '02.',
    image : '../../../assets/img/images/post-preview2.jpg',
    title: 'UNICOM/ENDE CORPORACIÓN: WEBINAR INTERNACIONAL “CYBERSEGURIDAD INDUSTRIAL”',
    detail: 'ENDE Corporación, con el objetivo de conocer los riesgos y prevenciones que se deben seguir y con una visión que apunta a mejorar sus niveles de seguridad de información',
    url: '#'
  },
  {
    number: '03.',
    image : '../../../assets/img/images/post-preview3.jpg',
    title: 'UNICOM/ENDE TRANSMISIÓN: ENDE TRANSMISIÓN CONSTRUYE LÍNEA ELÉCTRICA',
    detail: 'ENDE Transmisión está ejecutando el proyecto “Línea de Transmisión 230 kV Los Troncos – Guarayos – Trinidad”, el mismo que permitirá extender el Sistema Troncal Interconectado (STI) ',
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
