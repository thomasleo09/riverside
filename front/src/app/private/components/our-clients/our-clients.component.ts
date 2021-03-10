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
      image: 'our-clients-banner-one',
      imageText: 'Cristian Camilo Colorado Castillo',
      imageSubText: 'Fondo de empleados PRESENTE - Grupo Éxito',
      text: '"Estar en Riverside me permitió ponerme al dia con mis actividades laborales, es un espacio tranquilo, en el cual sientes paz, te conectas contigo mismo y con la naturaleza, las personas del lugar tienen una gran calidad humana, seguro volveré".  '
    },
    {
      image: 'our-clients-banner-one',
      imageText: 'Jenny Velasquez',
      imageSubText: 'Senior Product owner Scotiabank Colpatria',
      text: '"En Riverside encontre el lugar indicado para trabajar remotamente desde la montaña garantizando mi bienestar y tranquilidad por medio de: Excelente conexión de internet, sillas y mesas ergonómicas en un espacio propio de trabajo, el silencio y cantar de los pájaros permitieron mi inspiración.".  '
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
