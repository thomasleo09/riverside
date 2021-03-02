import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yoga',
  templateUrl: './yoga.component.html',
  styleUrls: ['./yoga.component.scss']
})
export class YogaComponent implements OnInit {

  baseYogaImages = 'assets/yoga/';
  yogaImage = 'yoga';
  meditationImage = 'meditation';
  ayurvedaImage = 'ayurveda';
  imageExtension = '.png';

  constructor() { }

  ngOnInit(): void {
  }

}
