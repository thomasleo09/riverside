import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './shared/components/empty-route/empty-route.component';
import { NavBarComponent } from './private/components/nav-bar/nav-bar.component';
import { CarouselComponent } from './private/components/carousel/carousel.component';
import { IntroductionComponent } from './private/components/introduction/introduction.component';
import { CovidComponent } from './private/components/covid/covid.component';
import { CoworkingComponent } from './private/components/coworking/coworking.component';
import { AccommodationComponent } from './private/components/accommodation/accommodation.component';
import {NgxPageScrollCoreModule} from "ngx-page-scroll-core";
import { FeedingComponent } from './private/components/feeding/feeding.component';
import { YogaComponent } from './private/components/yoga/yoga.component';
import { GardenComponent } from './private/components/garden/garden.component';
import { ContactComponent } from './private/components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    NavBarComponent,
    CarouselComponent,
    IntroductionComponent,
    CovidComponent,
    CoworkingComponent,
    AccommodationComponent,
    FeedingComponent,
    YogaComponent,
    GardenComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPageScrollCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
