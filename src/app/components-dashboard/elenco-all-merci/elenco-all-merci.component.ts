import {Component, Input, OnInit} from '@angular/core';
import {AbbonamentoMagazzinoSottoscritto, Hub, IndirizzoHub, Merce} from '../../support-class/ClassiSupporto';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';
import {AccountingService} from '../../services/data/accounting.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-elenco-all-merci',
  templateUrl: './elenco-all-merci.component.html',
  styleUrls: ['./elenco-all-merci.component.css']
})
export class ElencoAllMerciComponent implements OnInit {


  merci: Merce[];
  warMsg: string;

  private allMerci: Merce[];

  constructor(private abbonamentoMagazzinoService: AbbonamentoMagazzinoService,
              private accountingService: AccountingService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
      this.abbonamentoMagazzinoService.allMerci(this.accountingService.loggedUser()).subscribe(
        response => {
          this.allMerci = response;
          this.merci = response
          if (response.length === 0)
            this.warMsg = "non ci sono merci registrate"
        },
        error => {

        }
      )
  }

  prelevaIndirizzo(h: Hub): IndirizzoHub{
    var indirizzoHubS = h.indirizzo;
    var arSplit = indirizzoHubS.split(/\s?[a-zA-Z]+:\s/);
    return new IndirizzoHub(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5]);
  }
}
