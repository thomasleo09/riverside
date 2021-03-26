import {Component} from '@angular/core';
import {SharedConstants} from './shared/constants/shared-constants';
import {NavigationEnd, Router} from '@angular/router';
import {GoogleAnalyticsService} from './shared/services/google-analytics.service';

declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  baseSocialBarImages = 'assets/social-bar/';
  facebookImage = 'facebook';
  facebookUrl = 'https://www.facebook.com/riversidejerico';
  whatsappImage = 'whatsapp';
  whatsappUrl = 'https://api.whatsapp.com/send?phone=573195872632&text=Hola%20%F0%9F%98%80%F0%9F%91%8B.%20Gracias%20por%20contactarnos%20%F0%9F%98%8A.%20%C2%BFC%C3%B3mo%20est%C3%A1s%3F%2F%20Hi%2C%20thanks%20for%20contacting%20us%2C%20how%20are%20you%3F%20%F0%9F%A4%9D';
  instagramImage = 'instagram';
  instagramUrl = 'https://www.instagram.com/riversidejerico/';
  linkedlnImage = 'linkedln';
  linkedlnUrl = 'https://www.linkedin.com/company/riverside-ecoliving';
  mapImage = 'map';
  mapUrl = 'https://g.page/RiversideEcoliving?share';
  imageExtension = '.png';

  constructor(public router: Router, public googleAnalyticsService: GoogleAnalyticsService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'G-79Y316T7ED',
          {
            page_path: event.urlAfterRedirects
          }
        );
      }
    });
  }

  onScroll(target: string): void {
    console.log(target);
    const el = document.getElementById(target);
    if (el != null) {
      el.scrollIntoView();
    }
  }

  clickBook(): void {
    this
      .googleAnalyticsService
      .eventEmitter('make_your_reservation', 'reservation', 'button', 'click', 10);
    window.open(SharedConstants.bookingUrl, '_blank');
  }
}
