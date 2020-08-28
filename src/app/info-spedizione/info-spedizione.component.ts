import { Component, OnInit } from '@angular/core';
import {SpedizioneService} from '../services/data/spedizione.service';
import {Spedizione} from '../support-class/ClassiSupporto';
import {Router} from '@angular/router';


@Component({
  selector: 'app-info-spedizione',
  templateUrl: './info-spedizione.component.html',
  styleUrls: ['./info-spedizione.component.css']
})
export class InfoSpedizioneComponent implements OnInit {

  codiceSpedizione: string;
  spedizione: Spedizione;
  error: string

  constructor(private spedizioneService: SpedizioneService, private router: Router) { }

  ngOnInit(): void {
    this.visualizzaInfo();
  }


  visualizzaInfo() {
    this.codiceSpedizione = sessionStorage.getItem('idSpedizione');
    //sessionStorage.removeItem('idSpedizione'); //todo DA ATTIVARE DOPO I TEST!!!!!!
    this.spedizioneService.ricerca(this.codiceSpedizione).subscribe(
      response =>{
        this.spedizione = response;
        console.log(this.spedizione);
      },error =>{
        this.error = error.error.message;
      }
    )
  }

}
