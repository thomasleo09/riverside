import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  baseEventsImages = 'assets/events/';
  imageOneName = 'events-one';
  imageTwoName = 'events-two';
  imageThreeName = 'events-three';
  imageExtension = '.png';

  constructor() { }

  ngOnInit(): void {
  }

}
