import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NavItem} from '../../../shared/models/nav-item';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() scrollEvent: EventEmitter<any> = new EventEmitter();
  navItems: NavItem[] = [
    {
      name: 'Coworking',
      redirect: 'coworking'
    },
    {
      name: 'Alojamiento',
      redirect: 'accommodation'
    },
    {
      name: 'Alimentación',
      redirect: 'feeding'
    },
    {
      name: 'Yoga Studio',
      redirect: 'yoga'
    },
    {
      name: 'Huerta',
      redirect: 'garden'
    },
    // {
    //   name: 'Comunidad',
    //   redirect: 'sdas'
    // },
    // {
    //   name: 'Eventos',
    //   redirect: 'sdas'
    // },
    // {
    //   name: 'Nosotros',
    //   redirect: 'sdas'
    // },
    {
      name: 'Contacto',
      redirect: 'contact'
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  scrollTo(redirectComponent: string ): void {
    this.scrollEvent.emit(redirectComponent);
  }
}
