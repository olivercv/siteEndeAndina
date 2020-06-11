import { Component, OnInit } from '@angular/core';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface } from 'ngx-swiper-wrapper';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides = [
    {
      image : '../../../assets/images/slider/slide-5.jpg',
      title: 'Generación, interconexión.',
      detail: 'comercialización, transmisión, asociada a la generación, importación y exportación de electricidad.',
      url: '#'
    },
    {
      image : '../../../assets/images/slider/slide-9.jpg',
      title: 'Plantas de generación de Energía',
      detail: 'Las actividades relacionadas a la generación termoeléctrica de energía son: el diseño, construcción, operación y el mantenimiento',
      url: '#'
    }
  ];

  constructor() { }
  index;
  config: SwiperConfigInterface = {
    loop: true,
    slidesPerView: 1,
    // spaceBetween: 30,
    speed: 1000,
    parallax: true,
    autoplay: {
        delay: 6500,
        disableOnInteraction: false,
    },
    watchSlidesProgress: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
};

  ngOnInit(): void {
  }

  onIndexChange(event) {

  }

  
}
