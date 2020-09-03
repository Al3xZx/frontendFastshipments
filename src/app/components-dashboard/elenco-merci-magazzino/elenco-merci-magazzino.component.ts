import {Component, Input, OnInit} from '@angular/core';
import {AbbonamentoMagazzinoSottoscritto, Merce} from '../../support-class/ClassiSupporto';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';
import {AccountingService} from '../../services/data/accounting.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-elenco-merci-magazzino',
  templateUrl: './elenco-merci-magazzino.component.html',
  styleUrls: ['./elenco-merci-magazzino.component.css']
})
export class ElencoMerciMagazzinoComponent implements OnInit {

  abbonamentoMagSottoscritto: AbbonamentoMagazzinoSottoscritto;

  idMerci: number[]

  merci: Merce[];
  warMsg: string;

  sel: boolean[]

  qta: number[];
  selezionate = 0;

  private allMerci: Merce[];

  constructor(private abbonamentoMagazzinoService: AbbonamentoMagazzinoService,
              private accountingService: AccountingService,
              private router: Router) { }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo() {
      this.abbonamentoMagSottoscritto = JSON.parse(sessionStorage.getItem('ABBONAMENTO_MAG_SOTTOSCR'))
      sessionStorage.removeItem('ABBONAMENTO_MAG_SOTTOSCR')
      this.abbonamentoMagazzinoService.merceInMagazzino(this.accountingService.loggedUser(), this.abbonamentoMagSottoscritto.idAbbonamento).subscribe(
        response => {
          this.merci = response
          if (response.length === 0)
            this.warMsg = "non ci sono ancora merci che sono state stoccate"
          this.qta = new Array(response.length)
          this.sel = new Array(response.length)
          for(let i = 0; i< response.length; i++){
            this.sel[i]=false;
            this.qta[i] = 1;
          }

        },
        error => {

        }
      )
  }


  richiediSpedizione() {
    var merciSelezionate: Merce[];
    merciSelezionate = new Array(this.selezionate);
    let j = 0;
    for(let i = 0; i<this.merci.length && j < this.selezionate; i++){
      if(this.sel[i]) {
        merciSelezionate[j] = this.merci[i];
        j++;
      }
    }
    sessionStorage.setItem("MERCI_SELEZIONATE", JSON.stringify(merciSelezionate))
    this.router.navigate(['/dashboard/spedizione_merci'])

  }

  aggingiMerce(descrizione: string, qta: number) {

  }

  cambia(i: number) {
    if(this.sel[i]) {
      this.sel[i] = false;
      this.selezionate --;
      console.log(this.merci[i].idMerce+" "+this.merci[i].descrizione+" deselezionata")
    }
    else {
      this.sel[i] = true;
      this.selezionate++;
      console.log(this.merci[i].idMerce+" "+this.merci[i].descrizione+" selezionata")
    }
    //this.verificaSelezioni();
    console.log(this.sel)
    console.log("selezionate: "+ this.selezionate)
  }

  // verificaSelezioni() :boolean{
  //   for(let i = 0; i < this.sel.length; i++){
  //     if(this.sel[i]) {
  //       this.continua = true;
  //       return true;
  //     }
  //   }
  //   this.continua = false;
  //   return false;
  // }
}
