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
      image: 'work',
      alt: 'Work image',
      interval: 5000
    },
    {
      image: 'sun',
      alt: 'Sun image',
      interval: 5000
    },
    {
      image: 'cowork',
      alt: 'Cowork image',
      interval: 5000
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
