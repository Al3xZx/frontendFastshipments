import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Abbonamento, AbbonamentoSottoscritto, CartaCredito, Hub} from '../../support-class/ClassiSupporto';

@Injectable({
  providedIn: 'root'
})
export class AbbonamentoService {

  server = "localhost";
  port = '8080';

  constructor(private httpClient: HttpClient) { }

  abbonamentiDisponibili(){
    return this.httpClient.get<Abbonamento[]>(`http://${this.server}:${this.port}/abbonamento/all_abbonamenti`);
  }

  sottoscriviAbbonamento(idCliente: number, idAbbonamento: number, cartaCredito: CartaCredito){
    return this.httpClient.post<AbbonamentoSottoscritto>(`http://${this.server}:${this.port}/abbonamento//sottoscrivi/${idCliente}/${idAbbonamento}`,cartaCredito);
  }

}
