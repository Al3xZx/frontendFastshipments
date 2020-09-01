import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbbonamentoMagazzino, Hub} from '../../support-class/ClassiSupporto';

@Injectable({
  providedIn: 'root'
})
export class AbbonamentoMagazzinoService {

  server = "localhost";
  port = '8080';

  constructor(private httpClient: HttpClient) { }

  hubDisponibili(){
    return this.httpClient.get<Hub[]>(`http://${this.server}:${this.port}/abbonamento_magazzino/hub_disponibili`);
  }

  abbonamentiDisponibili(){
    return this.httpClient.get<AbbonamentoMagazzino[]>(`http://${this.server}:${this.port}/abbonamento_magazzino/all_abbonamenti_magazzino`);
  }
}
