import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoApComponent } from './componente/logo-ap/logo-ap.component';
import { SocialComponent } from './componentes/social/social.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentesComponent,
    HeaderComponent,
    LogoApComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
