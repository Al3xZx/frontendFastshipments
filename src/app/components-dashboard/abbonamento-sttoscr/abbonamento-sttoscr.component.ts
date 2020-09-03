import {Component, Input, OnInit} from '@angular/core';
import {AbbonamentoSottoscritto} from '../../support-class/ClassiSupporto';
import {Router} from '@angular/router';

@Component({
  selector: 'app-abbonamento-sttoscr',
  templateUrl: './abbonamento-sttoscr.component.html',
  styleUrls: ['./abbonamento-sttoscr.component.css']
})
export class AbbonamentoSttoscrComponent implements OnInit {

  @Input() abbonamentoSottoscritto: AbbonamentoSottoscritto

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  richiestaSpedizione() {
    sessionStorage.setItem("ABBONAMENTO_SOTTOSCR", JSON.stringify(this.abbonamentoSottoscritto));
    this.router.navigate(["/dashboard/richiestaSpedizione"]);
  }
}
