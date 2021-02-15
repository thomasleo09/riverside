import { Component, OnInit } from '@angular/core';
import {navItem} from "../../../shared/models/nav-item";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navItems: navItem[] = [
    {
      name: "Coworking",
      redirect: "sdas"
    },
    {
      name: "Hospedaje",
      redirect: "sdas"
    },
    {
      name: "Alimentación",
      redirect: "sdas"
    },
    {
      name: "Yoga Studio",
      redirect: "sdas"
    },
    {
      name: "Huerta",
      redirect: "sdas"
    },
    {
      name: "Comunidad",
      redirect: "sdas"
    },
    {
      name: "Eventos",
      redirect: "sdas"
    },
    {
      name: "Nosotros",
      redirect: "sdas"
    },
    {
      name: "Contacto",
      redirect: "sdas"
    }
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
