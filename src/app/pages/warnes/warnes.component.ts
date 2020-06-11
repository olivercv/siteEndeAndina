import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slides';
@Component({
  selector: 'app-warnes',
  templateUrl: './warnes.component.html',
  styleUrls: ['./warnes.component.scss']
})
export class WarnesComponent implements OnInit {
  slides: Array<Slide>  = [
    {
      numbers: 1,
      src : '../../../assets/img/gallery/ptwar/gallery1.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery1.jpg',
      title: 'Planta Warnes',
      caption: 'Vista lateral nocturna de la planta',
      url: '#'
    },
    {
      numbers: 2,
      src : '../../../assets/img/gallery/ptwar/gallery2.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery2.jpg',
      title: 'Termoeléctrica Warnes',
      caption: 'Vista Panorámica de la planta',
      url: '#'
    },
    {
      numbers: 3,
      src : '../../../assets/img/gallery/ptwar/gallery3.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery3.jpg',
      title: 'Termoeléctrica Warnes',
      caption: 'Vista turbinas Termoeléctricas',
      url: '#'
    },
    {
      numbers: 4,
      src : '../../../assets/img/gallery/ptwar/gallery4.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery4.jpg',
      title: 'Termoeléctrica Warnes',
      caption: 'Vista frontal de la planta',
      url: '#'
    },
    {
      numbers: 5,
      src : '../../../assets/img/gallery/ptwar/gallery5.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery5.jpg',
      title: 'Termoeléctrica Warnes',
      caption: 'Vista lateral de la Planta',
      url: '#'
    },
    {
      numbers: 6,
      src : '../../../assets/img/gallery/ptwar/gallery6.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery6.jpg',
      title: 'Termoeléctrica Warnes',
      caption: 'Vista lateral de la planta',
      url: '#'
    },
    {
      numbers: 7,
      src : '../../../assets/img/gallery/ptwar/gallery7.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery7.jpg',
      title: 'Turbinas Warnes',
      caption: 'Vista nocturan de las turbinas',
      url: '#'
    },
    {
      numbers: 8,
      src : '../../../assets/img/gallery/ptwar/gallery8.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery8.jpg',
      title: 'Termoeléctrica Warnes',
      caption: 'Trasporte de electricidad',
      url: '#'
    },
    {
      numbers: 9,
      src : '../../../assets/img/gallery/ptwar/gallery9.jpg',
      thumb : '../../../assets/img/gallery/ptwar/gallery9.jpg',
      title: 'Termoeléctrica Warnes',
      caption: 'Trasporte de electricidad',
      url: '#'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
