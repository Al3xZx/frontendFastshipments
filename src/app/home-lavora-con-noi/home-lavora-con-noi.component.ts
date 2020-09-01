import { Component, OnInit } from '@angular/core';
import {Annuncio} from '../support-class/ClassiSupporto';
import {AnnunciService} from '../services/data/annunci.service';

@Component({
  selector: 'app-home-lavora-con-noi',
  templateUrl: './home-lavora-con-noi.component.html',
  styleUrls: ['./home-lavora-con-noi.component.css']
})
export class HomeLavoraConNoiComponent implements OnInit {
  selMenu = 0;
  annunciDisponibili: Annuncio[];

  constructor(private annuncioService: AnnunciService) { }

  ngOnInit(): void {
  }

  visualizzaAnnunci() {
    console.log('Annunci')
    this.annuncioService.getAnnunci().subscribe(
      result =>{
        this.annunciDisponibili = result;
      },
      error => {

      }
    )
  }
}
