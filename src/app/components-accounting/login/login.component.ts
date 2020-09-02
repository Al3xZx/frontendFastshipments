import { Component, OnInit } from '@angular/core';
import {AccountingService} from '../../services/data/accounting.service';
import {Router} from '@angular/router';
import {AccountCliente, Cliente, Indirizzo} from '../../support-class/ClassiSupporto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errMsg: string;

  clienteLoggato: Cliente;

  password='';
  codCliente: number;

  constructor(private autenticazione: AccountingService, private router: Router) { }

  ngOnInit(): void {
  }

  accedi() {//todo da sistemare
    var cliente = new Cliente(null, null, null,null,null,null,null,null);
    cliente.idCliente=this.codCliente;
    this.autenticazione.autentica(new AccountCliente(cliente,this.password)).subscribe(
      response => {
        this.clienteLoggato = response;
        sessionStorage.setItem("userId", this.clienteLoggato.idCliente.toString());
        this.clienteLoggato.indirizzoCliente = this.prelevaIndirizzo(response)
        sessionStorage.setItem("CLIENTE", JSON.stringify(this.clienteLoggato));
        this.router.navigate(["/dashboard"])

      },
      error =>{
        this.errMsg = "errore di autenticazione, riprova ad inserire i dati!";
        setTimeout( ()=>{this.errMsg = null }, 2500);
      }
    )
  }

  private prelevaIndirizzo(cliente: Cliente) :Indirizzo{
    var indirizzoS = cliente.indirizzo;
    var arSplit = indirizzoS.split(/\s?[a-zA-Z]+:\s/);
    return new Indirizzo(arSplit[1],arSplit[2],arSplit[3],arSplit[4],arSplit[5],arSplit[6],arSplit[7])
  }
}
