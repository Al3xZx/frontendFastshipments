import {Component, Input, OnInit} from '@angular/core';
import {Abbonamento} from '../../support-class/ClassiSupporto';
import {AccountingService} from '../../services/data/accounting.service';
import {AbbonamentoService} from '../../services/data/abbonamento.service';

@Component({
  selector: 'app-abbonamento',
  templateUrl: './abbonamento.component.html',
  styleUrls: ['./abbonamento.component.css']
})
export class AbbonamentoComponent implements OnInit {

  @Input() abbonamento: Abbonamento
  errMsg: string;

  constructor(private accountingService: AccountingService, private abbonamentoService: AbbonamentoService) { }

  ngOnInit(): void {
  }

  sottoscrivi() {
    if(!this.accountingService.isLogged()) this.errMsg = "è necessario essere registrato per sottoscrivere un abbonamento"
    else{
      sessionStorage.setItem("idAbbonamento", this.abbonamento.idAbbonamento.toString());

    }
  }
}
