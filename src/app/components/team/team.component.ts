import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  team = [
    {
      id: '01.',
      image : '../../../assets/img/imagenes/team1.jpg',
      name: 'Ing. Gamal Serhan Jaldín',
      position: 'Gerente General',
      url: '#'
    },
    {
      id: '02.',
      image : '../../../assets/img/imagenes/team2.jpg',
      name: 'Ing. Victor Luis Fernandez Fernandez',
      position: 'Gerente de planificación y proyectos',
      url: '#'
    },
    {
      id: '03.',
      image : '../../../assets/img/imagenes/team3.jpg',
      name: 'Ing. Gonzalo Jaime De la Zerda Morales',
      position: 'Gerente comercial',
      url: '#'
    },
    {
      id: '04.',
      image : '../../../assets/img/imagenes/team4.jpg',
      name: 'Ing. Renzo Mauricio Durán Bayón',
      position: 'Gerente de operaciones',
      url: '#'
    },
    {
      id: '05.',
      image : '../../../assets/img/imagenes/headshot.jpg',
      name: 'Lic. Walter Vildozo Zamorano',
      position: 'Gerente Administrativo Financiero',
      url: '#'
    }
  ];
    // SlideOptions = { items: 1, dots: true, nav: true };
    // CarouselOptions = { items: 3, dots: true, nav: true };
  
    TeamOptions = {
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
