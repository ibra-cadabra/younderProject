import { Component, OnInit } from '@angular/core';
import {Credit} from "../models/credit";
import {CreditClient} from "../models/creditClient";
import {CreditService} from "../services/credit.service";

@Component({
  selector: 'app-details-du-credit',
  templateUrl: './details-du-credit.component.html',
  styleUrls: ['./details-du-credit.component.scss']
})
export class DetailsDuCreditComponent implements OnInit {
  creditsAccompte: Credit[] | undefined=[];
  currentCredit: CreditClient | undefined = new CreditClient(0,'n','n',0,0,'bb',[]);

  constructor(private creditService: CreditService) { }

  ngOnInit(): void {
    this.currentCredit = this.creditService.currentCredit;
    this.creditsAccompte = this.currentCredit?.listeAccompte;
    alert(this.currentCredit?.nomClient + ' tr');
  }

}
