import { Component, OnInit } from '@angular/core';
import {AbbonamentoService} from '../../services/data/abbonamento.service';
import {Abbonamento} from '../../support-class/ClassiSupporto';

@Component({
  selector: 'app-abbonamenti-offerti',
  templateUrl: './abbonamenti-offerti.component.html',
  styleUrls: ['./abbonamenti-offerti.component.css']
})
export class AbbonamentiOffertiComponent implements OnInit {

  abbonamentiDisponibili: Abbonamento[];

  constructor(private abbonamentoService: AbbonamentoService) { }

  ngOnInit(): void {
    this.prelevaAbbonamenti();
  }

  prelevaAbbonamenti() {
    this.abbonamentoService.abbonamentiDisponibili().subscribe(
      response =>{
        this.abbonamentiDisponibili = response;
      },error => {

      }
    )
  }
}
