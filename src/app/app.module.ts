import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './components-message/error/error.component';
import { LoginComponent } from './components-accounting/login/login.component';
import { RegistrazioneComponent } from './components-accounting/registrazione/registrazione.component';
import {FormsModule} from '@angular/forms';
import { MsgErrComponent } from './components-message/msg-err/msg-err.component';
import { MsgSucComponent } from './components-message/msg-suc/msg-suc.component';
import { DashboardComponent } from './components-dashboard/dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import { RicercaSpedizioneComponent } from './ricerca-spedizione/ricerca-spedizione.component';
import { InfoSpedizioneComponent } from './info-spedizione/info-spedizione.component';
import { ProfiloAziendaleComponent } from './profilo-aziendale/profilo-aziendale.component';
import { ContattiComponent } from './contatti/contatti.component';
import { HomeLavoraConNoiComponent } from './components-lavora-con-noi/home-lavora-con-noi/home-lavora-con-noi.component';
import { AnnunciComponent } from './components-lavora-con-noi/annunci/annunci.component';
import { CandidaturaAnnuncioComponent } from './components-lavora-con-noi/candidatura-annuncio/candidatura-annuncio.component';
import { ServiziOffertiHomeComponent } from './components-servizi-offerti/servizi-offerti-home/servizi-offerti-home.component';
import { AbbonamentiOffertiComponent } from './components-servizi-offerti/abbonamenti-offerti/abbonamenti-offerti.component';
import { AbbonamentiMagazzinoOffertiComponent } from './components-servizi-offerti/abbonamenti-magazzino-offerti/abbonamenti-magazzino-offerti.component';
import { ServizioPerRegioniComponent } from './components-servizi-offerti/servizio-per-regioni/servizio-per-regioni.component';
import { AbbonamentoComponent } from './components-servizi-offerti/abbonamento/abbonamento.component';
import { AbbonamentoMagazzinoComponent } from './components-servizi-offerti/abbonamento-magazzino/abbonamento-magazzino.component';
import { PagamentoComponent } from './components-sottoscrizione/pagamento/pagamento.component';

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
    InfoSpedizioneComponent,
    ProfiloAziendaleComponent,
    ContattiComponent,
    HomeLavoraConNoiComponent,
    AnnunciComponent,
    CandidaturaAnnuncioComponent,
    ServiziOffertiHomeComponent,
    AbbonamentiOffertiComponent,
    AbbonamentiMagazzinoOffertiComponent,
    ServizioPerRegioniComponent,
    AbbonamentoComponent,
    AbbonamentoMagazzinoComponent,
    PagamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   // {provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
