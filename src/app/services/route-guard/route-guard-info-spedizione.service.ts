import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardInfoSpedizioneService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    let ret =  (sessionStorage.getItem('idSpedizione') != null) ? true : false;
    if(!ret){
      this.router.navigate(['/home']);
    }
    return ret;
  }
}
