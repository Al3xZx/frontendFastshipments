import {Component, Input, OnInit} from '@angular/core';
import {AbbonamentoMagazzinoSottoscritto} from '../../support-class/ClassiSupporto';

@Component({
  selector: 'app-abbonamento-mag-sottoscr',
  templateUrl: './abbonamento-mag-sottoscr.component.html',
  styleUrls: ['./abbonamento-mag-sottoscr.component.css']
})
export class AbbonamentoMagSottoscrComponent implements OnInit {

  @Input() abbonamentoMagSottoscritto: AbbonamentoMagazzinoSottoscritto;


  constructor() { }

  ngOnInit(): void {
  }

}
