import {Component, Inject} from '@angular/core';
import { PageScrollService } from 'ngx-page-scroll-core';
import {DOCUMENT} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onScroll(target: string): void {
    console.log(target);
    const el = document.getElementById(target);
    if (el != null) {
      el.scrollIntoView();
    }
  }
}
