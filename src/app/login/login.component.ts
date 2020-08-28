import { Component, OnInit } from '@angular/core';
import {AccountingService} from '../services/data/accounting.service';
import {Router} from '@angular/router';
import {AccountCliente, Cliente} from '../support-class/ClassiSupporto';

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
        this.router.navigate(["/dashboard"])

      },
      error =>{
        this.errMsg = "errore di autenticazione, riprova ad inserire i dati!";
        setTimeout( ()=>{this.errMsg = null }, 2500);
      }
    )
  }
}
