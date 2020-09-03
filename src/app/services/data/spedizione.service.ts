import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AccountCliente, Cliente, Spedizione} from '../../support-class/ClassiSupporto';

@Injectable({
  providedIn: 'root'
})
export class SpedizioneService {

  server = "localhost";
  port = '8080';

  constructor(private httpClient: HttpClient) { }


  ricerca(idSpedizione: string){
    return this.httpClient.get<Spedizione>(`http://${this.server}:${this.port}/spedizione/ricerca_spedizione/${idSpedizione}`);
  }

  aggiungi(idCliente: number, spedizioneCartaWrap){
    return this.httpClient.post<Spedizione>(`http://${this.server}:${this.port}/spedizione/aggiungi_spedizione/${idCliente}`, spedizioneCartaWrap);
  }

  spedizioneDaMagazzino(idAbbonamentoMagazzino: number,idCliente: number, indirizzoDestAndMerci){
    return this.httpClient.post<Spedizione>(`http://${this.server}:${this.port}/spedizione/spedizioneDaMagazzino/${idAbbonamentoMagazzino}/${idCliente}`, indirizzoDestAndMerci);
  }

  spedizioneDaAbbonamento(idAbbonamento: number,idCliente: number, spedizione: Spedizione){
    return this.httpClient.post<Spedizione>(`http://${this.server}:${this.port}/spedizione/spedizioneDaAbbonamento/${idAbbonamento}/${idCliente}`, spedizione);
  }

  spedizioneEffettuate(idCliente: string){
    return this.httpClient.get<Spedizione[]>(`http://${this.server}:${this.port}/spedizione/effettuate/${idCliente}`);
  }

}
