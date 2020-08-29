import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hub} from '../../support-class/ClassiSupporto';

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
}
