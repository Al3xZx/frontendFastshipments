import {Component, Input, OnInit} from '@angular/core';
import {Annuncio} from '../support-class/ClassiSupporto';
import {AnnunciService} from '../services/data/annunci.service';

@Component({
  selector: 'app-annunci',
  templateUrl: './annunci.component.html',
  styleUrls: ['./annunci.component.css']
})
export class AnnunciComponent implements OnInit {

  @Input() annunci: Annuncio[]
  annuncioScelto: Annuncio;

  constructor(private annunciService: AnnunciService) { }

  ngOnInit(): void {
  }


  candidatura(a: Annuncio) {
    this.annuncioScelto = a;
  }
}
