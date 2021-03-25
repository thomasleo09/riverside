import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  baseAboutUsImages = 'assets/about-us/';
  imageOneName = 'about-us-one';
  imageOneMobileName = 'about-us-one-mobile';
  imageTwoName = 'about-us-two';
  imageTwoMobileName = 'about-us-two-mobile';
  imageThreeName = 'about-us-three';
  imageFourName = 'about-us-four';
  imageExtension = '.png';

  constructor() { }

  ngOnInit(): void {
  }

}
