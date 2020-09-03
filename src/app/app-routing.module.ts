import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ErrorComponent} from './components-message/error/error.component';
import {LoginComponent} from './components-accounting/login/login.component';
import {RegistrazioneComponent} from './components-accounting/registrazione/registrazione.component';
import {DashboardComponent} from './components-dashboard/dashboard/dashboard.component';
import {RouteGuardService} from './services/route-guard/route-guard.service';
import {InfoSpedizioneComponent} from './info-spedizione/info-spedizione.component';
import {RouteGuardInfoSpedizioneService} from './services/route-guard/route-guard-info-spedizione.service';
import {ProfiloAziendaleComponent} from './profilo-aziendale/profilo-aziendale.component';
import {ContattiComponent} from './contatti/contatti.component';
import {HomeLavoraConNoiComponent} from './components-lavora-con-noi/home-lavora-con-noi/home-lavora-con-noi.component';
import {ServiziOffertiHomeComponent} from './components-servizi-offerti/servizi-offerti-home/servizi-offerti-home.component';
import {RiepilogoComponent} from './components-sottoscrizione/riepilogo/riepilogo.component';
import {RichiestaRitiroMerciComponent} from './components-dashboard/richiesta-ritiro-merci/richiesta-ritiro-merci.component';
import {SpedizioneMerciComponent} from './components-dashboard/spedizione-merci/spedizione-merci.component';
import {ElencoMerciMagazzinoComponent} from './components-dashboard/elenco-merci-magazzino/elenco-merci-magazzino.component';
import {RichiestaSpedizioneAbbonamentoComponent} from './components-dashboard/richiesta-spedizione-abbonamento/richiesta-spedizione-abbonamento.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'index', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'profilo', component: ProfiloAziendaleComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'lavoraConNoi', component: HomeLavoraConNoiComponent},
  {path: 'serviziOfferti', component: ServiziOffertiHomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardService]},
  {path: 'dashboard/richiestaRitiroMerci', component: RichiestaRitiroMerciComponent, canActivate: [RouteGuardService]},
  {path: 'dashboard/elencoMerciMagazzino', component: ElencoMerciMagazzinoComponent, canActivate: [RouteGuardService]},
  {path: 'dashboard/spedizione_merci', component: SpedizioneMerciComponent, canActivate: [RouteGuardService]},
  {path: 'dashboard/richiestaSpedizione', component: RichiestaSpedizioneAbbonamentoComponent, canActivate: [RouteGuardService]},
  {path: 'riepilogoOrdine', component: RiepilogoComponent, canActivate: [RouteGuardService]},
  {path: 'infoSpedizione', component: InfoSpedizioneComponent, canActivate: [RouteGuardInfoSpedizioneService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
