import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slides';

@Component({
  selector: 'app-delsur',
  templateUrl: './delsur.component.html',
  styleUrls: ['./delsur.component.scss']
})
export class DelsurComponent implements OnInit {

  slides: Array<Slide>  = [
    {
      numbers: 1,
      src : '../../../assets/img/gallery/ptsur/gallery1.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery1.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'Ingreso a la planta termoeléctrica',
      url: '#'
    },
    {
      numbers: 2,
      src : '../../../assets/img/gallery/ptsur/gallery2.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery2.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'Areas Maturales de esparsimiento',
      url: '#'
    },
    {
      numbers: 3,
      src : '../../../assets/img/gallery/ptsur/gallery3.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery3.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'Ingreso a oficinas de RRHH',
      url: '#'
    },
    {
      numbers: 4,
      src : '../../../assets/img/gallery/ptsur/gallery4.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery4.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'Vista Lateral de las turninas',
      url: '#'
    },
    {
      numbers: 5,
      src : '../../../assets/img/gallery/ptsur/gallery5.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery5.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'Ingreso a la termoeléctrica',
      url: '#'
    },
    {
      numbers: 6,
      src : '../../../assets/img/gallery/ptsur/gallery6.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery6.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'pasillo de ingreso a la planta',
      url: '#'
    },
    {
      numbers: 7,
      src : '../../../assets/img/gallery/ptsur/gallery7.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery7.jpg',
      title: 'Turbinas Del Sur',
      caption: 'vista panoramica lateral de la planta',
      url: '#'
    },
    {
      numbers: 8,
      src : '../../../assets/img/gallery/ptsur/gallery8.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery8.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'Area habitacional',
      url: '#'
    },
    {
      numbers: 9,
      src : '../../../assets/img/gallery/ptsur/gallery9.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery9.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'Trasporte de electricidad',
      url: '#'
    },
    {
      numbers: 10,
      src : '../../../assets/img/gallery/ptsur/gallery10.jpg',
      thumb : '../../../assets/img/gallery/ptsur/gallery10.jpg',
      title: 'Termoeléctrica Del Sur',
      caption: 'Vista lateral de la planta',
      url: '#'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
