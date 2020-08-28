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

}
