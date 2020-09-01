import { Component, OnInit } from '@angular/core';
import {AbbonamentoMagazzino} from '../../support-class/ClassiSupporto';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';

@Component({
  selector: 'app-abbonamenti-magazzino-offerti',
  templateUrl: './abbonamenti-magazzino-offerti.component.html',
  styleUrls: ['./abbonamenti-magazzino-offerti.component.css']
})
export class AbbonamentiMagazzinoOffertiComponent implements OnInit {

  abbonamentiDisponibili: AbbonamentoMagazzino[];

  constructor(private abbonamentoService: AbbonamentoMagazzinoService) { }

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
