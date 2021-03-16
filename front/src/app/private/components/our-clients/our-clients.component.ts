import {Component, OnInit} from '@angular/core';
import {CarouselItem} from "../../../shared/models/carousel-item";
import {CarouselItemClient} from "../../../shared/models/carousel-item-client";

@Component({
  selector: 'app-our-clients',
  templateUrl: './our-clients.component.html',
  styleUrls: ['./our-clients.component.scss']
})
export class OurClientsComponent implements OnInit {

  baseOurClientsImages = 'assets/our-clients/';
  imageOneName = 'our-clients-one';
  imageOneBannerName = 'our-clients-banner-one';
  imageExtension = '.png';

  carouselItems: CarouselItemClient[] = [
    {
      image: 'our-clients-one',
      imageText: 'Lina Guacaneme',
      imageSubText: 'Creadora del taller herbolario @eljardindelen',
      text: '"Siempre me sorprendo con los regalos de la montaña, esta vez después de caminar encontré un hogar, Riverside. Durante un par de meses me abrazaron las montañas de Jericó- Antioquia , el río , la tierra que camina conmigo, flores, hierbas y amores.\n' +
        'Sembrando, cuidando, cosechando la huerta pude dejar una semilla que Riverside abrazo con amor, me permitió fluir con mis hierbas, flores y medicinas de la tierra. Encontré hermanas para crear y vivir, amigos para caminar montañas y a mi misma amando la tierra.\n".  '
    },
    {
      image: 'our-clients-two',
      imageText: 'Andrés Anaya',
      imageSubText: 'Cocinero, Profesor de yoga y panadero - Experiencias B•E',
      text: '"Transitar y compartir en Riverside me ayudó a ser consciente de la importancia y el equilibrio entre la productividad y el parche. Aprendí a sentir y escuchar mucho más mis emociones, mente y poder tomar decisiones más conscientes".  '
    },
    {
      image: 'our-clients-three',
      imageText: 'Alejandro Pinzon',
      imageSubText: 'Economista - Gerente en Avianca',
      text: '"En Riverside Jericó pasé una excelente semana con el mejor internet y espacio coworking. Nunca olvidaré las pausas activas de medio día o finalizando la jornada yendo al río y/o haciendo yoga/meditación.".  '
    },
    {
      image: 'our-clients-four',
      imageText: 'Andrés Walker Uribe',
      imageSubText: 'Viajero',
      text: '"Mi experiencia fue satisfactoria,  encontramos tranquilidad, el espacio necesario para trabajar,  buena gente, el staff muy amable, buena onda, un ambiente agradable para estar en el río, queremos regresar y disfrutar del lugar. Un abrazote a todos.".  '
    },
    {
      image: 'our-clients-five',
      imageText: 'Maritza Cedano',
      imageSubText: 'Economista',
      text: '"En Riverside encontre el lugar indicado para trabajar remotamente desde la montaña garantizando mi bienestar y tranquilidad por medio de: Excelente conexión de internet, sillas y mesas ergonómicas en un espacio propio de trabajo, el silencio y cantar de los pájaros permitieron mi inspiración.".  '
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
