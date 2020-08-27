import { Component, OnInit } from '@angular/core';
import {AccountCliente, Cliente, Indirizzo} from '../support-class/ClassiSupporto';
import {AccountingService} from '../services/data/accounting.service';

@Component({
  selector: 'app-registrazione',
  templateUrl: './registrazione.component.html',
  styleUrls: ['./registrazione.component.css']
})
export class RegistrazioneComponent implements OnInit {

  //dati per Cliente
  telefono: string;
  email: string;
  ragioneSociale: string;
  pIva: number;
  cf: string;
  nome: string;
  cognome: string;

  //dati per Indirizzo
  regione: string;
  citta: string;
  provincia: string;
  via: string;
  civico: string;

  //dati per AccountCliente
  username: Cliente;
  password: string;
  ripPsw: string
  accountCliente: AccountCliente;

  errRegistrazione: string;
  succReg: string;

  privato = true;


  constructor(private account: AccountingService) { }

  ngOnInit(): void {
  }

  registra() {
    var indirizzo = new Indirizzo(this.regione, this.citta, this.provincia, this.via, this.civico, this.nome, this.cognome);
    var cliente = new Cliente(this.telefono, this.email, this.ragioneSociale, this.pIva, this.cf, this.nome, this.cognome, indirizzo);
    this.account.registraUtente(cliente,this.password).subscribe(
      response => {
        console.log(response);
        this.accountCliente = response;
        this.succReg = "registrazione avvenuta con successo!"
      },error => {
        this.errRegistrazione = error.error.message;
      }
    )
  }

  impostaTipo(tipo: boolean) {
    this.privato = this.nome = this.cognome = this.cf = this.privato = this.ragioneSociale = this.pIva = null;
    this.privato = tipo;
  }
}
