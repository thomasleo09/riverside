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
import { CommunityComponent } from './private/components/community/community.component';
import { EventsComponent } from './private/components/events/events.component';
import { AboutUsComponent } from './private/components/about-us/about-us.component';
import { OurClientsComponent } from './private/components/our-clients/our-clients.component';
import { LocationComponent } from './private/components/location/location.component';

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
    ContactComponent,
    CommunityComponent,
    EventsComponent,
    AboutUsComponent,
    OurClientsComponent,
    LocationComponent
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
