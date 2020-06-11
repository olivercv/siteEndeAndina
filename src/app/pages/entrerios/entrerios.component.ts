import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slides';


@Component({
  selector: 'app-entrerios',
  templateUrl: './entrerios.component.html',
  styleUrls: ['./entrerios.component.scss']
})
export class EntreriosComponent implements OnInit {

 

  slides: Array<Slide>  = [
    { 
      numbers: 1,
      src : '../../../assets/img/gallery/pter/gallery1.jpg',
      thumb : '../../../assets/img/gallery/pter/gallery1.jpg',
      title: 'Planta Entre Rios',
      caption: 'Vista Panorámica de la planta',
      url: '#'
    },
    {
      numbers: 2,
      src : '../../../assets/img/gallery/pter/gallery2.jpg',
      thumb : '../../../assets/img/gallery/pter/gallery2.jpg',
      title: 'Termoeléctrica Entre Rios',
      caption: 'Vista Turbinas Termoeléctricas',
      url: '#'
    },
    {
      numbers: 3,
      src : '../../../assets/img/gallery/pter/gallery3.jpg',
      thumb : '../../../assets/img/gallery/pter/gallery3.jpg',
      title: 'Termoeléctrica Entre Rios',
      caption: 'Vista Tuberias Termoeléctricas',
      url: '#'
    },
    {
      numbers: 4,
      src : '../../../assets/img/gallery/pter/gallery4.jpg',
      thumb : '../../../assets/img/gallery/pter/gallery4.jpg',
      title: 'Termoeléctrica Entre Rios',
      caption: 'Vista Lateral de la planta',
      url: '#'
    },
    {
      numbers: 5,
      src : '../../../assets/img/gallery/pter/gallery5.jpg',
      thumb : '../../../assets/img/gallery/pter/gallery5.jpg',
      title: 'Termoeléctrica Entre Rios',
      caption: 'Vista Aérea de la Planta',
      url: '#'
    },
    {
      numbers: 6,
      src : '../../../assets/img/gallery/pter/gallery6.jpg',
      thumb : '../../../assets/img/gallery/pter/gallery6.jpg',
      title: 'Termoeléctrica Entre Rios',
      caption: 'Vista panorámica de las torres de electricidad',
      url: '#'
    },
    {
      numbers: 7,
      src : '../../../assets/img/gallery/pter/gallery7.jpg',
      thumb : '../../../assets/img/gallery/pter/gallery7.jpg',
      title: 'Turbinas Entre Rios',
      caption: 'Torres de electricidad',
      url: '#'
    },
    {
      numbers: 8,
      src : '../../../assets/img/gallery/pter/gallery8.jpg',
      thumb : '../../../assets/img/gallery/pter/gallery8.jpg',
      title: 'Termoeléctrica Entre Rios',
      caption: 'Vista al atardecer de la planta',
      url: '#'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

 

}
