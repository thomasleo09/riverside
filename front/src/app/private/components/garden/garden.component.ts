import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-garden',
  templateUrl: './garden.component.html',
  styleUrls: ['./garden.component.scss']
})
export class GardenComponent implements OnInit {

  baseGardenImages = 'assets/garden/';
  imageExtension = '.png';
  videoName = 'garden-video.mp4';

  constructor() { }

  ngOnInit(): void {
  }

}
