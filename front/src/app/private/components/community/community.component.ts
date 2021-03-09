import { Component, OnInit } from '@angular/core';
import {CarouselItem} from "../../../shared/models/carousel-item";
import {CarouselCommunityItem} from "../../../shared/models/carousel-community-item";

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss']
})
export class CommunityComponent implements OnInit {

  baseCommunityImages = 'assets/community/';
  imageOneName = 'community-one';
  imageTwoName = 'community-two';
  imageThreeName = 'community-three';
  imageFourName = 'community-four';
  imageFiveName = 'community-five';
  imageSixName = 'community-six';
  imageExtension = '.png';

  carouselItems: CarouselCommunityItem[] = [
    {
      image: 'community-one',
      alt: 'community-one'
    },
    {
      image: 'community-two',
      alt: 'community-two'
    },
    {
      image: 'community-three',
      alt: 'community-three'
    }
  ];

  carouselItemsTwo: CarouselCommunityItem[] = [
    {
      image: 'community-four',
      alt: 'community-four'
    },
    {
      image: 'community-five',
      alt: 'community-five'
    },
    {
      image: 'community-six',
      alt: 'community-six'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
