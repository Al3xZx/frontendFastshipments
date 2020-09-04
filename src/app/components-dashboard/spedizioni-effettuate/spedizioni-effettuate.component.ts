import { Component, OnInit } from '@angular/core';
import {Indirizzo, Spedizione} from '../../support-class/ClassiSupporto';
import {SpedizioneService} from '../../services/data/spedizione.service';
import {AccountingService} from '../../services/data/accounting.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-spedizioni-effettuate',
  templateUrl: './spedizioni-effettuate.component.html',
  styleUrls: ['./spedizioni-effettuate.component.css']
})
export class SpedizioniEffettuateComponent implements OnInit {

  spedizioniEffettuate: Spedizione[];
  moreInfo: boolean[]

  constructor(private spedizioneService: SpedizioneService,
              private accountingService: AccountingService,
              private router: Router) { }

  ngOnInit(): void {
    this.getSpedizioni();
  }

  private getSpedizioni() {
    this.spedizioneService.spedizioneEffettuate(this.accountingService.loggedUser()).subscribe(
      response =>{
        this.spedizioniEffettuate = response;
        this.moreInfo = new Array(response.length)
        for(let i = 0; i<response.length; i++){
          this.moreInfo[i]=false;
        }
      }
    )
  }

  prelevaIndirizzi(spedizione: Spedizione) {
    var indirizzoS = spedizione.indirizzoDestinatario;
    var arSplit = indirizzoS.split(/\s?[a-zA-Z]+:\s/);
    //console.log(indirizzoS)
    spedizione.indirizzoDestinazione = new Indirizzo(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5],arSplit[6],arSplit[7])
    arSplit= spedizione.mittente.indirizzo.split(/\s?[a-zA-Z]+:\s/);
    spedizione.mittente.indirizzoCliente = new Indirizzo(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5],arSplit[6],arSplit[7]);
  }

  ricerca(spedizione: Spedizione){
    //console.log(this.codiceSpedizione)
    sessionStorage.setItem("idSpedizione",spedizione.idSpedizione.toString());
    this.router.navigate(["/infoSpedizione"])
  }
}
