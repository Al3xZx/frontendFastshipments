import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  nome: string;
  cognome: string;
  email: string;
  genere: boolean;

  username: string;
  password: string;
  ripPsw: string

  nazione: string;
  regione: string;
  citta: string;

  errRegistrazione: string;
  succReg: string;

  constructor() { }

  ngOnInit(): void {
  }

  registra() {

  }
}
