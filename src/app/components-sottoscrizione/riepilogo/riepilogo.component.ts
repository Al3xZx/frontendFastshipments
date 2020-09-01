import { Component, OnInit } from '@angular/core';
import {CartaCredito} from '../../support-class/ClassiSupporto';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrls: ['./riepilogo.component.css']
})
export class RiepilogoComponent implements OnInit {

  idAbbonamentoMagazzino: number;
  idAbbonamento: number;
  idCliente: number;
  cartaCredito: CartaCredito;


  constructor() { }

  ngOnInit(): void {
    this.prelevaDati()
  }

  prelevaDati() {
    if (sessionStorage.getItem("ID_ABBONAMENTO")){
      this.idAbbonamento = +sessionStorage.getItem("ID_ABBONAMENTO")
      sessionStorage.removeItem("ID_ABBONAMENTO")
      console.log("ABBONAMENTO"+ this.idAbbonamento)
    }else if (sessionStorage.getItem("ID_ABBONAMENTO_MAGAZZINO")) {
      this.idAbbonamentoMagazzino = +sessionStorage.getItem("ID_ABBONAMENTO_MAGAZZINO")
      sessionStorage.removeItem("ID_ABBONAMENTO_MAGAZZINO")
      console.log("ABBONAMENTO_MAGAZZINO"+ this.idAbbonamentoMagazzino)
    }
    else
      this.prelevaDatiSpedizione()
  }

  private prelevaDatiSpedizione() {

  }
}
