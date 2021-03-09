import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  baseLocationImages = 'assets/location/';
  imageOneName = 'location-one';
  imageExtension = '.png';

  constructor() { }

  ngOnInit(): void {
  }

}
