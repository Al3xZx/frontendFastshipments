import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Annuncio, Candidato} from '../../support-class/ClassiSupporto';

@Injectable({
  providedIn: 'root'
})
export class AnnunciService {

  server = "localhost";
  port = '8080';

  constructor(private httpClient: HttpClient) { }


  getAnnunci(){
    return this.httpClient.get<Annuncio[]>(`http://${this.server}:${this.port}/annuncio/all_annunci`);
  }

  registraCandidatura(candidato: Candidato, idAnnuncio: number){
    return this.httpClient.post<Candidato>(`http://${this.server}:${this.port}/annuncio/aggiungi_candidato/${idAnnuncio}`,candidato);
  }
}
