import { Component, OnInit } from '@angular/core';
import {AbbonamentoMagazzino, AbbonamentoMagazzinoSottoscritto} from '../../support-class/ClassiSupporto';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';
import {AccountingService} from '../../services/data/accounting.service';

@Component({
  selector: 'app-abbonamenti-magazzino-sottoscritti',
  templateUrl: './abbonamenti-magazzino-sottoscritti.component.html',
  styleUrls: ['./abbonamenti-magazzino-sottoscritti.component.css']
})
export class AbbonamentiMagazzinoSottoscrittiComponent implements OnInit {

  abbonamentiMagSottoscritti: AbbonamentoMagazzinoSottoscritto[];

  constructor(private abbonamentoService: AbbonamentoMagazzinoService,
              private accountingService: AccountingService) { }

  ngOnInit(): void {
    this.prelevaAbbonamenti();
  }

  private prelevaAbbonamenti() {
    this.abbonamentoService.abbonamentiSottoscritti(this.accountingService.loggedUser()).subscribe(
      response => {
        this.abbonamentiMagSottoscritti = response;
      },error => {

      }
    )
  }
}
