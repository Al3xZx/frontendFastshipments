import { Component, OnInit } from '@angular/core';
import {AccountingService} from '../../services/data/accounting.service';

@Component({
  selector: 'app-servizi-offerti-home',
  templateUrl: './servizi-offerti-home.component.html',
  styleUrls: ['./servizi-offerti-home.component.css']
})
export class ServiziOffertiHomeComponent implements OnInit {
  selMenu = 0;

  constructor(public accountingService: AccountingService) { }

  ngOnInit(): void {
    this.selMenu = 0;
  }

}
