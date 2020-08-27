import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountCliente, Cliente} from '../../support-class/ClassiSupporto';

@Injectable({
  providedIn: 'root'
})
export class AccountingService {

  server = "localhost";
  port = '8080';

  constructor(private httpClient: HttpClient) { }


  autentica(account: AccountCliente){
    return this.httpClient.post<Cliente>(`http://${this.server}:${this.port}/accounting/verifica_accesso`, account);
  }

  loggedUser(): number{
    return Number(sessionStorage.getItem('userId'));
  }

  isLogged(): boolean{
    return (sessionStorage.getItem('userId') != null) ? true : false;
  }

  logoutUser(){
    sessionStorage.removeItem('userId');
  }

  registraUtente(cliente: Cliente, password: string){
    return this.httpClient.post<AccountCliente>(`http://${this.server}:${this.port}/accounting/registra_utente/${password}`, cliente);
  }
}
