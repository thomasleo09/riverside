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
      image: 'banner-coworking',
      alt: 'Coworking image'
    },
    {
      image: 'banner-accommodation',
      alt: 'Accommodation image'
    },
    {
      image: 'banner-yoga',
      alt: 'Yoga image'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
