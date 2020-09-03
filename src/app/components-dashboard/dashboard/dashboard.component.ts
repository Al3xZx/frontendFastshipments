import { Component, OnInit } from '@angular/core';
import {Cliente} from '../../support-class/ClassiSupporto';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selMenu = 0;
  cliente: Cliente;

  constructor() { }

  ngOnInit(): void {
    this.cliente = JSON.parse(sessionStorage.getItem("CLIENTE"));
  }

}
