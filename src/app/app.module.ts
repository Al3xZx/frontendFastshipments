import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import {FormsModule} from '@angular/forms';
import { MsgErrComponent } from './msg-err/msg-err.component';
import { MsgSucComponent } from './msg-suc/msg-suc.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { RicercaSpedizioneComponent } from './ricerca-spedizione/ricerca-spedizione.component';
import { InfoSpedizioneComponent } from './info-spedizione/info-spedizione.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    RegistrazioneComponent,
    MsgErrComponent,
    MsgSucComponent,
    DashboardComponent,
    RicercaSpedizioneComponent,
    InfoSpedizioneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
