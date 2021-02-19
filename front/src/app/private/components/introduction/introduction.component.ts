import {Component, OnInit} from '@angular/core';
import {IntroductionItem} from '../../../shared/models/introduction-item';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {

  baseIntroductionImages = 'assets/introduction/';
  introductionItems: IntroductionItem[] = [
    {
      image: 'internet.png',
      title: 'Internet',
      text: '+150 mb/sg fibra óptica'
    },
    {
      image: 'coworking.png',
      title: 'Coworking',
      text: 'Espacio 24/7'
    },
    {
      image: 'acomodacion.png',
      title: 'Hospedaje',
      text: 'Acogedoras habitaciones'
    },
    {
      image: 'alimentacion.png',
      title: 'Alimentación',
      text: 'Chef en casa y cocina en comunidad'
    },
    {
      image: 'cafe.png',
      title: 'Café - bar',
      text: 'Sabores auténticos de la región'
    },
    {
      image: 'locacion.png',
      title: 'Locación',
      text: 'A solo 15 minutos del pueblo de Jericó'
    },
    {
      image: 'yoga.png',
      title: 'Yoga Studio',
      text: 'Clases de yoga grupales y personalizadas'
    },
    {
      image: 'huerta.png',
      title: 'Huerta orgánica',
      text: 'De la tierra a tu plato'
    },
    {
      image: 'naturaleza.png',
      title: 'Naturaleza',
      text: 'A solo 3 minutos del río'
    },
    {
      image: 'comunidad.png',
      title: 'Comunidad',
      text: 'Aprende y comparte'
    },
    {
      image: 'actividades.png',
      title: 'Actividades',
      text: 'En Riverside nunca te aburres'
    },
    {
      image: 'mascotas.png',
      title: 'Pet - Friendly',
      text: 'Amamos tus mascotas'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
