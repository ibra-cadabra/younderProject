import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Commande} from "../models/commande";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Produit} from "../models/produit";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {CommandeService} from "../services/commande.service";
import {Router} from "@angular/router";
import {CreditService} from "../services/credit.service";
import {CreditClient} from "../models/creditClient";

@Component({
  selector: 'app-credit-en-cours',
  templateUrl: './credit-en-cours.component.html',
  styleUrls: ['./credit-en-cours.component.scss']
})
export class CreditEnCoursComponent implements OnInit {
  creditSubs = new Subscription();
  creditClients: CreditClient[] = [];
  form!: FormGroup;

  nomClientControls = new FormControl('', Validators.required);
  prenomClientControls = new FormControl('', Validators.required);
  telephoneClientControls = new FormControl('', Validators.required);
  montantCreditControls = new FormControl('', Validators.required);

  idCommand = 0;
  montantTotal: number = 0;
  date = new Date();
  loading = false;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
              config: NgbModalConfig,
              private creditService : CreditService,
              private modalService: NgbModal,
              private router: Router) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      nomClient: ['', Validators.required],
      prenomClient: ['', Validators.required],
      telephoneClient: ['', Validators.required],
      montantCredit: ['', Validators.required]
    });
    this.creditService.getAllCreditEnCours().then(
      value => {
        this.creditClients = this.creditService.creditEnCours;
        console.log('Get crédit en cours ' + value);
      }
    );
  }

  open(content: any) {
    this.modalService.open(content);
  }

  onSubmit(): void {

  }
}
