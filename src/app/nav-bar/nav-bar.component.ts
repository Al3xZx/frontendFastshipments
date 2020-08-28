import { Component, OnInit } from '@angular/core';
import {AccountingService} from '../services/data/accounting.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  //userLogged = false;

  constructor(public accounting: AccountingService) { }

  ngOnInit(): void {
  }

}
