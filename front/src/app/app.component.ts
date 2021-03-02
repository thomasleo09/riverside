import {Component, Inject} from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';
import {SharedConstants} from "./shared/constants/shared-constants";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  baseSocialBarImages = 'assets/social-bar/';
  facebookImage = 'facebook';
  facebookUrl = '';
  whatsappImage = 'whatsapp';
  whatsappUrl = '';
  instagramImage = 'instagram';
  instagramUrl = '';
  linkedlnImage = 'linkedln';
  linkedlnUrl = '';
  mapImage = 'map';
  mapUrl = '';
  imageExtension = '.png';

  onScroll(target: string): void {
    console.log(target);
    const el = document.getElementById(target);
    if (el != null) {
      el.scrollIntoView();
    }
  }

  clickBook(): void {
    window.location.href = SharedConstants.bookingUrl;
  }
}
