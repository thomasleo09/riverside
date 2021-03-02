import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feeding',
  templateUrl: './feeding.component.html',
  styleUrls: ['./feeding.component.scss']
})
export class FeedingComponent implements OnInit {

  baseFeedingImages = 'assets/feeding/';
  imageOneName = 'dish-one';
  imageTwoName = 'dish-two';
  imageExtension = '.png';
  constructor() { }

  ngOnInit(): void {
  }

}
