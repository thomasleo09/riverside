import {Component, HostListener, OnInit} from '@angular/core';
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
      image: 'coworking-desktop',
      alt: 'Coworking image',
      title: 'Coworking',
      subtitle: 'Trabaja desde el paraíso, disfruta y vive más'
    },
    {
      image: 'accommodation-desktop',
      alt: 'Accommodation image',
      title: 'Hospedaje',
      subtitle: 'Descansa profundamente en nuestras acogedoras habitaciones'
    },
    {
      image: 'feeding-desktop',
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
