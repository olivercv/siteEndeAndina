import { Component, OnInit, Input } from '@angular/core';
import { Slide } from 'src/app/models/slides';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
@Input() slides: Array<Slide>;


// slides  = [
//   { 
//     numbers: '01.',
//     image : '../../../assets/img/images/gallery-layer.jpg',
//     title: 'Ciclos combinados 1',
//     detail: 'There are many variations of passages',
//     url: '#'
//   },
//   {
//     numbers: '02.',
//     image : '../../../assets/img/images/gallery-layer2.jpg',
//     title: 'Ciclos combinados 2',
//     detail: 'There are many variations of passages',
//     url: '#'
//   },
//   {
//     numbers: '03.',
//     image : '../../../assets/img/images/gallery-layer3.jpg',
//     title: 'Ciclos combinados 3',
//     detail: 'There are many variations of passages',
//     url: '#'
//   },
//   {
//     numbers: '04.',
//     image : '../../../assets/img/images/gallery-layer4.jpg',
//     title: 'Ciclos combinados 4',
//     detail: 'There are many variations of passages',
//     url: '#'
//   },
//   {
//     numbers: '05.',
//     image : '../../../assets/img/images/gallery-layer5.jpg',
//     title: 'Ciclos combinados 5',
//     detail: 'There are many variations of passages',
//     url: '#'
//   },
//   {
//     numbers: '06.',
//     image : '../../../assets/img/images/gallery-layer6.jpg',
//     title: 'Ciclos combinados 6',
//     detail: 'There are many variations of passages',
//     url: '#'
//   },
//   {
//     numbers: '07.',
//     image : '../../../assets/img/images/gallery-layer7.jpg',
//     title: 'Ciclos combinados 7',
//     detail: 'There are many variations of passages',
//     url: '#'
//   },
//   {
//     numbers: '08.',
//     image : '../../../assets/img/images/gallery-layer8.jpg',
//     title: 'Ciclos combinados 8',
//     detail: 'There are many variations of passages',
//     url: '#'
//   }
// ];

    ProyectOptions = {
      slidesToShow: 4,
      slidesToScroll: 1,
      smartSpeed: 300,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      loop:true,
       autoplayHoverPause:true,
      dots: false,
      pauseOnHover: false,
    responsive: {
        0 : {
            items: 1
        },

        600 : {
            items: 2
        },

        768 : {
            items: 3
        },

        1200 : {
            items: 4
        }
    }
    };
    constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
  }

  open(index: number): void {
    console.log('index', index);
    // open lightbox
    this.lightbox.open(this.slides, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

}
