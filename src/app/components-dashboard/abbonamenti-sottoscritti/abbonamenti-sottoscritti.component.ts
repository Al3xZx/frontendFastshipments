import { Component, OnInit } from '@angular/core';
import {AbbonamentoSottoscritto} from '../../support-class/ClassiSupporto';
import {AccountingService} from '../../services/data/accounting.service';
import {AbbonamentoService} from '../../services/data/abbonamento.service';

@Component({
  selector: 'app-abbonamenti-sottoscritti',
  templateUrl: './abbonamenti-sottoscritti.component.html',
  styleUrls: ['./abbonamenti-sottoscritti.component.css']
})
export class AbbonamentiSottoscrittiComponent implements OnInit {

  abbonamentiSottoscritti: AbbonamentoSottoscritto[];

  constructor(private accountingService: AccountingService,
              private abbonamentoService: AbbonamentoService) { }

  ngOnInit(): void {
    this.prelevaAbbonamenti();
  }

  private prelevaAbbonamenti() {
    this.abbonamentoService.abbonamentiSottoscritti(this.accountingService.loggedUser()).subscribe(
      response => {
        this.abbonamentiSottoscritti = response;
      },error => {

      }
    )
  }
}
