import {Component, OnInit} from '@angular/core';
import {CarouselItem} from '../../../shared/models/carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  baseCarouselImages = 'assets/carousel/';
  imageExtension = '.png';
  carouselItems: CarouselItem[] = [
    {
      imageDesktop: 'coworking-desktop',
      imageMobile: 'coworking-mobile',
      alt: 'Coworking image',
      title: 'Coworking',
      subtitle: 'Trabaja desde el paraíso, disfruta y vive más'
    },
    {
      imageDesktop: 'accommodation-desktop',
      imageMobile: 'accommodation-mobile',
      alt: 'Accommodation image',
      title: 'Hospedaje',
      subtitle: 'Descansa profundamente en nuestras acogedoras habitaciones'
    },
    {
      imageDesktop: 'feeding-desktop',
      imageMobile: 'feeding-mobile',
      alt: 'Feeding image',
      title: 'Alimentación',
      subtitle: 'Mientras trabajas y disfrutas, nos encargamos de tu alimentación'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
