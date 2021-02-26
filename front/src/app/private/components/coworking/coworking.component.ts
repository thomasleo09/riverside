import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coworking',
  templateUrl: './coworking.component.html',
  styleUrls: ['./coworking.component.scss']
})
export class CoworkingComponent implements OnInit {

  baseCoworkingImages = 'assets/coworking/';
  imageExtension = '.png';
  imageName = 'coworking-image';
  videoName = 'coworking-video.mp4';

  constructor() { }

  ngOnInit(): void {
  }

}
