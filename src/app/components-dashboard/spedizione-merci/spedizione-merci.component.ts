import { Component, OnInit } from '@angular/core';
import {Cliente, Hub, Indirizzo, IndirizzoHub, Merce, Spedizione} from '../../support-class/ClassiSupporto';
import {Router} from '@angular/router';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';
import {SpedizioneService} from '../../services/data/spedizione.service';

@Component({
  selector: 'app-spedizione-merci',
  templateUrl: './spedizione-merci.component.html',
  styleUrls: ['./spedizione-merci.component.css']
})
export class SpedizioneMerciComponent implements OnInit {

  merciDaSpedire: Merce[];

  nome: string;
  cognome: string;

  //dati per Indirizzo
  regione: string;
  citta: string;
  provincia: string;
  via: string;
  civico: string;

  spedizione: Spedizione;
  hubDisponibili: Hub[];
  errMsg: string;
  succMsg: string;

  constructor(private router : Router,
              private abbonamentoMagazzinoService: AbbonamentoMagazzinoService,
              private spedizioneService: SpedizioneService
              ) { }

  ngOnInit(): void {
    this.merciDaSpedire = JSON.parse(sessionStorage.getItem('MERCI_SELEZIONATE'))
    sessionStorage.removeItem('MERCI_SELEZIONATE')
    console.log(this.merciDaSpedire)
  }

  procedi() {
    var indirizzoDestinazione = new Indirizzo(this.regione, this.citta, this.provincia, this.nome, this.cognome,this.via, this.civico);
    this.spedizione = new Spedizione(indirizzoDestinazione, null);
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
          this.effettuaSpedizione(cliente, indirizzoDestinazione);
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

  effettuaSpedizione(cliente, indirizzoDestinazione) {
    var idMerciDaSpedire = new Array(this.merciDaSpedire.length)
    for(let i = 0; i < this.merciDaSpedire.length; i++){
      idMerciDaSpedire[i] = this.merciDaSpedire[i].idMerce;
    }
    this.spedizioneService.spedizioneDaMagazzino(this.merciDaSpedire[0].abbonamentoMagazzinoSottoscritto.idAbbonamento,
      cliente.idCliente, {"indirizzo": indirizzoDestinazione, "idMerci": idMerciDaSpedire}).subscribe(
      response =>{
        this.succMsg = "la spedizione numero "+ response.idSpedizione+" è stata registata nei nostri sistemi"
      },error => {
        this.errMsg = error.error.message;
      }
    )
  }
}
