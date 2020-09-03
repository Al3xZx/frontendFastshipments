import {Component, Input, OnInit} from '@angular/core';
import {AbbonamentoMagazzinoSottoscritto, Hub, IndirizzoHub} from '../../support-class/ClassiSupporto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-abbonamento-mag-sottoscr',
  templateUrl: './abbonamento-mag-sottoscr.component.html',
  styleUrls: ['./abbonamento-mag-sottoscr.component.css']
})
export class AbbonamentoMagSottoscrComponent implements OnInit {

  @Input() abbonamentoMagSottoscritto: AbbonamentoMagazzinoSottoscritto;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  prelevaIndirizzo(h: Hub): IndirizzoHub{
    var indirizzoHubS = h.indirizzo;
    var arSplit = indirizzoHubS.split(/\s?[a-zA-Z]+:\s/);
    return new IndirizzoHub(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5]);
  }

  richiestaRitiroMerci() {
    sessionStorage.setItem("ABBONAMENTO_MAG_SOTTOSCR", JSON.stringify(this.abbonamentoMagSottoscritto));
    this.router.navigate(["/dashboard/richiestaRitiroMerci"]);
  }

  elencoMerciMagazzino() {
    sessionStorage.setItem("ABBONAMENTO_MAG_SOTTOSCR", JSON.stringify(this.abbonamentoMagSottoscritto));
    this.router.navigate(["/dashboard/elencoMerciMagazzino"]);
  }
}
