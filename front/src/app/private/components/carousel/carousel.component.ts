import {Component, OnInit} from '@angular/core';
import {CarouselItem} from '../../../shared/models/carousel-item';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  baseCarouselImages = 'assets/carousel/';
  carouselItems: CarouselItem[] = [
    {
      image: 'work.png',
      alt: 'Work image',
      interval: 5000
    },
    {
      image: 'sun.jpeg',
      alt: 'Sun image',
      interval: 5000
    },
    {
      image: 'cowork.jpg',
      alt: 'Cowork image',
      interval: 5000
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
