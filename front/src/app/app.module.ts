import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './shared/components/empty-route/empty-route.component';
import { NavBarComponent } from './private/components/nav-bar/nav-bar.component';
import { CarouselComponent } from './private/components/carousel/carousel.component';
import { IntroductionComponent } from './private/components/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    NavBarComponent,
    CarouselComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
