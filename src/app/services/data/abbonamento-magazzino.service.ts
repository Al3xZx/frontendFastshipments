import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {
  AbbonamentoMagazzino,
  AbbonamentoMagazzinoSottoscritto,
  AbbonamentoSottoscritto,
  CartaCredito,
  Hub, Merce
} from '../../support-class/ClassiSupporto';

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

  sottoscriviAbbonamento(idCliente: number, idAbbonamento: number, idHub: number, cartaCredito: CartaCredito){
    return this.httpClient.post<AbbonamentoMagazzinoSottoscritto>(`http://${this.server}:${this.port}/abbonamento_magazzino/sottoscrivi/${idCliente}/${idAbbonamento}/${idHub}`,cartaCredito);
  }

  abbonamentiSottoscritti(idCliente: number){
    return this.httpClient.get<AbbonamentoMagazzinoSottoscritto[]>(`http://${this.server}:${this.port}/abbonamento_magazzino/sottoscritti/${idCliente}`);
  }

  richiestaRitiroMerce(idCliente: number, idAbbonamentoMagazzinoSottoscritto: number, numeroMerci: number, merce: Merce){
    return this.httpClient.post<Merce[]>(`http://${this.server}:${this.port}/abbonamento_magazzino/richiesta_ritiro/${idCliente}/${idAbbonamentoMagazzinoSottoscritto}/${numeroMerci}`,merce);
  }

  ricercaMerce(idCliente: number, descrizione: string){
    return this.httpClient.get<Merce[]>(`http://${this.server}:${this.port}/abbonamento_magazzino/ricerca_merce/${idCliente}/${descrizione}`);
  }

  merceInMagazzino(idCliente: number, idAbbonamento: number){
    return this.httpClient.get<Merce[]>(`http://${this.server}:${this.port}/abbonamento_magazzino/merce_in_magazzino/${idCliente}/${idAbbonamento}`);
  }

  allMerci(idCliente: number){
    return this.httpClient.get<Merce[]>(`http://${this.server}:${this.port}/abbonamento_magazzino/all_merce/${idCliente}`);
  }



}
