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
import {AnnunciComponent} from './components-lavora-con-noi/annunci/annunci.component';
import {ServiziOffertiHomeComponent} from './components-servizi-offerti/servizi-offerti-home/servizi-offerti-home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'index', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registrazione', component: RegistrazioneComponent},
  {path: 'profilo', component: ProfiloAziendaleComponent},
  {path: 'contatti', component: ContattiComponent},
  {path: 'lavoraConNoi', component: HomeLavoraConNoiComponent},
  // {path: 'lavoraConNoi/annunci', component: AnnunciComponent},
  {path: 'serviziOfferti', component: ServiziOffertiHomeComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [RouteGuardService]},
  {path: 'infoSpedizione', component: InfoSpedizioneComponent, canActivate: [RouteGuardInfoSpedizioneService]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
