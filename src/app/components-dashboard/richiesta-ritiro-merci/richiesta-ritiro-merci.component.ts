import {Component, Input, OnInit} from '@angular/core';
import {AbbonamentoMagazzinoSottoscritto, Merce} from '../../support-class/ClassiSupporto';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';

@Component({
  selector: 'app-richiesta-ritiro-merci',
  templateUrl: './richiesta-ritiro-merci.component.html',
  styleUrls: ['./richiesta-ritiro-merci.component.css']
})
export class RichiestaRitiroMerciComponent implements OnInit {

  abbonamentoMagSottoscritto: AbbonamentoMagazzinoSottoscritto;

  merce: Merce;
  qta: number;
  volume:number;
  descrizione: string
  errMsg: string;
  succMsg: string;
  h: number;
  p: number;
  l: number;

  constructor(private abbonamentoMagazzinoService: AbbonamentoMagazzinoService) { }


  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
    this.abbonamentoMagSottoscritto = JSON.parse(sessionStorage.getItem("ABBONAMENTO_MAG_SOTTOSCR"));
    //console.log(JSON.stringify(this.abbonamentoMagSottoscritto));
    sessionStorage.removeItem("ABBONAMENTO_MAG_SOTTOSCR");
  }

  richiediRitiro(){
    this.volume = (this.l*this.p*this.h);
    this.merce = new Merce();
    this.merce.volume = this.volume;
    this.merce.descrizione = this.descrizione;
    console.log("idCliente: "+this.abbonamentoMagSottoscritto.cliente.idCliente+", idAbbonamento: "+ this.abbonamentoMagSottoscritto.idAbbonamento+",qta: " +this.qta+", " +JSON.stringify(this.merce));
    this.abbonamentoMagazzinoService.richiestaRitiroMerce(
      this.abbonamentoMagSottoscritto.cliente.idCliente, this.abbonamentoMagSottoscritto.idAbbonamento, this.qta, this.merce).subscribe(
      response =>{
          this.succMsg = "la richiesta è stata registrata"
      }, error => {
        this.errMsg = error.error.message;
      }
    )
  }

}
