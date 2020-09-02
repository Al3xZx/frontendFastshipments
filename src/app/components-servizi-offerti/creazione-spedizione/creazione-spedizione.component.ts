import { Component, OnInit } from '@angular/core';
import {Cliente, Hub, Indirizzo, IndirizzoHub, Spedizione} from '../../support-class/ClassiSupporto';
import {Router} from '@angular/router';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';

@Component({
  selector: 'app-creazione-spedizione',
  templateUrl: './creazione-spedizione.component.html',
  styleUrls: ['./creazione-spedizione.component.css']
})
export class CreazioneSpedizioneComponent implements OnInit {

  nome: string;
  cognome: string;

  //dati per Indirizzo
  regione: string;
  citta: string;
  provincia: string;
  via: string;
  civico: string;

  volume: number;
  h: number;
  p: number;
  l: number;

  spedizione: Spedizione;
  hubDisponibili: Hub[];
  errMsg: string;

  constructor(private router : Router, private abbonamentoMagazzinoService: AbbonamentoMagazzinoService) { }

  ngOnInit(): void {
  }

  procedi() {
    var indirizzoDestinazione = new Indirizzo(this.regione, this.citta, this.provincia, this.nome, this.cognome,this.via, this.civico);
    this.volume = this.h*this.p*this.l;
    this.spedizione = new Spedizione(indirizzoDestinazione, this.volume);
    var continuaMit = false
    var continuaDest = false
    var cliente: Cliente
    cliente = JSON.parse(sessionStorage.getItem("CLIENTE"))
    this.abbonamentoMagazzinoService.hubDisponibili().subscribe(
      response => {
        this.hubDisponibili = response;
        for(let i = 0; i < this.hubDisponibili.length; i++){
          if(this.prelevaIndirizzo(this.hubDisponibili[i]).regione.toUpperCase() === indirizzoDestinazione.regione.toUpperCase())
            continuaDest = true;
          if(this.prelevaIndirizzo(this.hubDisponibili[i]).regione.toUpperCase() === cliente.indirizzoCliente.regione.toUpperCase())
            continuaMit = true;
        }
        if(continuaDest && continuaMit) {
          sessionStorage.setItem("SPEDIZIONE", JSON.stringify(this.spedizione));
          this.router.navigate(["/riepilogoOrdine"]);
        }else if(!continuaMit){
          this.errMsg = "non è possibile effettuare questa spedizione dalla tua regione"
        }else if(!continuaDest){
          this.errMsg = "non è possibile consegnare questa spedizione nella regione di destinazione"
        }else{
          this.errMsg = "non è possibile consegnare/ritirare questa spedizione nella regione di destinazione e partenza"
        }
      }
    )
  }

  prelevaIndirizzo(h: Hub): IndirizzoHub{
    var indirizzoHubS = h.indirizzo;
    var arSplit = indirizzoHubS.split(/\s?[a-zA-Z]+:\s/);
    return new IndirizzoHub(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5]);
  }
}
