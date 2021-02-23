import {Component, OnInit} from '@angular/core';
import {IntroductionItem} from '../../../shared/models/introduction-item';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  baseIntroductionImages = 'assets/introduction/';
  imageExtension = '.png';
  introductionItems: IntroductionItem[] = [
    {
      image: 'internet',
      title: 'Internet',
      text: '+150 mb/sg fibra óptica'
    },
    {
      image: 'coworking',
      title: 'Coworking',
      text: 'Espacio 24/7'
    },
    {
      image: 'acomodacion',
      title: 'Hospedaje',
      text: 'Acogedoras habitaciones'
    },
    {
      image: 'alimentacion',
      title: 'Alimentación',
      text: 'Chef en casa y cocina en comunidad'
    },
    {
      image: 'cafe',
      title: 'Café - bar',
      text: 'Sabores auténticos de la región'
    },
    {
      image: 'locacion',
      title: 'Locación',
      text: 'A solo 15 minutos del pueblo de Jericó'
    },
    {
      image: 'yoga',
      title: 'Yoga Studio',
      text: 'Clases de yoga grupales y personalizadas'
    },
    {
      image: 'huerta',
      title: 'Huerta orgánica',
      text: 'De la tierra a tu plato'
    },
    {
      image: 'naturaleza',
      title: 'Naturaleza',
      text: 'A solo 3 minutos del río'
    },
    {
      image: 'comunidad',
      title: 'Comunidad',
      text: 'Aprende y comparte'
    },
    {
      image: 'actividades',
      title: 'Actividades',
      text: 'En Riverside nunca te aburres'
    },
    {
      image: 'mascotas',
      title: 'Pet Friendly',
      text: 'Amamos tus mascotas'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
