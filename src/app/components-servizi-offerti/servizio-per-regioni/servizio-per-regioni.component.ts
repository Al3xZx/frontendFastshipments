import { Component, OnInit } from '@angular/core';
import {Hub, IndirizzoHub} from '../../support-class/ClassiSupporto';
import {AbbonamentoMagazzinoService} from '../../services/data/abbonamento-magazzino.service';

@Component({
  selector: 'app-servizio-per-regioni',
  templateUrl: './servizio-per-regioni.component.html',
  styleUrls: ['./servizio-per-regioni.component.css']
})
export class ServizioPerRegioniComponent implements OnInit {

  hubs : Hub[]

  constructor(private abbonamentoMagazzinoService: AbbonamentoMagazzinoService) { }

  ngOnInit(): void {
    this.prelevaHub();
  }

  private prelevaHub() {
    this.abbonamentoMagazzinoService.hubDisponibili().subscribe(
      response =>{
        this.hubs = response;
      },error => {

      }
    )
  }

  prelevaIndirizzo(h: Hub) {
    var indirizzoHubS = h.indirizzo;
    var arSplit = indirizzoHubS.split(/\s?[a-zA-Z]+:\s/);
    h.indirizzoHub = new IndirizzoHub(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5]);
  }

}
