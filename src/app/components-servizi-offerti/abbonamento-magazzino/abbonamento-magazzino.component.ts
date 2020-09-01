import {Component, Input, OnInit, Output} from '@angular/core';
import {AbbonamentoMagazzino} from '../../support-class/ClassiSupporto';
import {AccountingService} from '../../services/data/accounting.service';
import {AbbonamentoService} from '../../services/data/abbonamento.service';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-abbonamento-magazzino',
  templateUrl: './abbonamento-magazzino.component.html',
  styleUrls: ['./abbonamento-magazzino.component.css']
})
export class AbbonamentoMagazzinoComponent implements OnInit {

  @Input() abbonamento: AbbonamentoMagazzino;
 errMsg : string;

  constructor(private accountingService: AccountingService,
              private abbonamentoService: AbbonamentoMagazzinoService,
              private router: Router) { }

  ngOnInit(): void {
  }

  sottoscrivi() {
    if(!this.accountingService.isLogged()) this.errMsg = "è necessario essere registrato per sottoscrivere un abbonamento"
    else{
        sessionStorage.setItem("ID_ABBONAMENTO_MAGAZZINO", this.abbonamento.idAbbonamento.toString());
        this.router.navigate(["/riepilogoOrdine"]);
    }
  }

}
