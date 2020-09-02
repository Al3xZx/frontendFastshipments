import { Component, OnInit } from '@angular/core';
import {
  Abbonamento,
  AbbonamentoMagazzino,
  CartaCredito,
  Cliente,
  Hub,
  Indirizzo,
  IndirizzoHub,
  Spedizione
} from '../../support-class/ClassiSupporto';
import {AccountingService} from '../../services/data/accounting.service';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';
import {AbbonamentoService} from '../../services/data/abbonamento.service';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit {

  abbonamentoMagazzino: AbbonamentoMagazzino;
  abbonamento: Abbonamento;
  spedizione: Spedizione;
  cliente :Cliente;
  tipoPagamento: string;
  hubScelto: Hub;
  hubDisponibili: Hub[];
  totaleSpedizione: number;
  imponibile: number;


  constructor(private accountingService: AccountingService,
              public abbonamentoMagazzinoService: AbbonamentoMagazzinoService,
              private abbonamentoService: AbbonamentoService) { }

  ngOnInit(): void {
    this.prelevaDati()
    this.prelevaDatiCliente()
  }

  prelevaDati() {
    if (sessionStorage.getItem("ABBONAMENTO")){
      this.abbonamento = JSON.parse(sessionStorage.getItem("ABBONAMENTO"))
      sessionStorage.removeItem("ABBONAMENTO")
      //console.log("ABBONAMENTO "+  JSON.stringify(this.abbonamento))
    }else if (sessionStorage.getItem("ABBONAMENTO_MAGAZZINO")) {
      this.abbonamentoMagazzino = JSON.parse(sessionStorage.getItem("ABBONAMENTO_MAGAZZINO"))
      sessionStorage.removeItem("ABBONAMENTO_MAGAZZINO")
      this.getHubDispnibili();
      //console.log("ABBONAMENTO_MAGAZZINO "+  JSON.stringify(this.abbonamentoMagazzino))
    }else if (sessionStorage.getItem("SPEDIZIONE")) {
      this.spedizione = JSON.parse(sessionStorage.getItem("SPEDIZIONE"))
      sessionStorage.removeItem("SPEDIZIONE")
      this.spedizione.pesoTassabile = this.spedizione.volume*300;
      this.imponibile = this.spedizione.pesoTassabile/100;
      this.totaleSpedizione = ((this.imponibile*22)/100)+this.imponibile;
    }
  }

  private prelevaDatiCliente() {
    this.cliente = JSON.parse(sessionStorage.getItem("CLIENTE"));
    // var indirizzoS = this.cliente.indirizzo;
    // var arSplit = indirizzoS.split(/\s?[a-zA-Z]+:\s/);
    // this.cliente.indirizzoCliente = new Indirizzo(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5],arSplit[6],arSplit[7])
  }

  getHubDispnibili(){
    this.abbonamentoMagazzinoService.hubDisponibili().subscribe(
      response => {
        this.hubDisponibili = response;
        console.log(this.hubDisponibili)
      }
    )
  }

  prelevaIndirizzo(h: Hub): IndirizzoHub{
    var indirizzoHubS = h.indirizzo;
    var arSplit = indirizzoHubS.split(/\s?[a-zA-Z]+:\s/);
    return new IndirizzoHub(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5]);
  }
}
