import { Component, OnInit } from '@angular/core';
import {AccountingService} from '../services/data/accounting.service';
import {SpedizioneService} from '../services/data/spedizione.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ricerca-spedizione',
  templateUrl: './ricerca-spedizione.component.html',
  styleUrls: ['./ricerca-spedizione.component.css']
})
export class RicercaSpedizioneComponent implements OnInit {
  codiceSpedizione: string;
  error: string;
  msg = "Inserisci il codice della spedizione";

  constructor(private spedizioneService: SpedizioneService, private router: Router) { }

  ngOnInit(): void {
  }

  ricerca(){
    console.log(this.codiceSpedizione)
    sessionStorage.setItem("idSpedizione",this.codiceSpedizione);
    this.router.navigate(["/infoSpedizione"])
  }

}
