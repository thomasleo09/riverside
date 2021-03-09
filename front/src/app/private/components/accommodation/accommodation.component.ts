import {Component, OnInit} from '@angular/core';
import {AccommodationItem} from '../../../shared/models/accommodation-item';
import {SharedConstants} from "../../../shared/constants/shared-constants";

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.scss']
})
export class AccommodationComponent implements OnInit {

  baseIntroductionImages = 'assets/accommodation/';
  imageExtension = '.png';
  accommodationItems: AccommodationItem[] = [
    {
      image: 'suite',
      name: 'Habitación privada ensuite',
      features: [
        'Cama tamaño Queen',
        'Baño privado',
        'Escritorio y silla de trabajo',
        'Diseño exclusivo'
      ],
      normalWeeklyPrice: 884000,
      normalMonthlyPrice: 2448000,
      covidWeeklyPrice: 556000,
      covidMonthlyPrice: 1920000
    },
    {
      image: 'studio',
      name: 'Estudio privado',
      features: [
        'Cama tamaño Queen plegable',
        'Baño compartido sólo para estudios',
        'Escritorio y silla de trabajo',
        'Vista panorámica'
      ],
      normalWeeklyPrice: 695000,
      normalMonthlyPrice: 2142000,
      covidWeeklyPrice: 490000,
      covidMonthlyPrice: 1680000
    },
    {
      image: 'bedroom',
      name: 'Dormitorios',
      features: [
        'Opción de dormitorio con 4, 5, o 6 camas',
        'Cama sencilla',
        'Baño compartido dentro del cuarto',
        'Amplios casilleros',
        'Lámpara de lectura y tomacorriente individual'
      ],
      normalWeeklyPrice: 473000,
      normalMonthlyPrice: 1453500,
      covidWeeklyPrice: 336000,
      covidMonthlyPrice: 1152000
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  clickBook(): void {
    window.location.href = SharedConstants.bookingUrl;
  }
}
