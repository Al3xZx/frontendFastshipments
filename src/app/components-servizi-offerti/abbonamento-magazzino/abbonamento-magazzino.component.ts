import {Component, Input, OnInit, Output} from '@angular/core';
import {AbbonamentoMagazzino} from '../../support-class/ClassiSupporto';
import {AccountingService} from '../../services/data/accounting.service';
import {AbbonamentoService} from '../../services/data/abbonamento.service';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';

@Component({
  selector: 'app-abbonamento-magazzino',
  templateUrl: './abbonamento-magazzino.component.html',
  styleUrls: ['./abbonamento-magazzino.component.css']
})
export class AbbonamentoMagazzinoComponent implements OnInit {

  @Input() abbonamento: AbbonamentoMagazzino;
 errMsg : string;

  constructor(private accountingService: AccountingService, private abbonamentoService: AbbonamentoMagazzinoService) { }

  ngOnInit(): void {
  }

  sottoscrivi() {
    if(!this.accountingService.isLogged()) this.errMsg = "è necessario essere registrato per sottoscrivere un abbonamento"
    else{

    }
  }

}
