import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {CreditClient} from "../models/creditClient";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {CreditService} from "../services/credit.service";
import {Router} from "@angular/router";
import {Credit} from "../models/credit";


@Component({
  selector: 'app-saisir-un-credit',
  templateUrl: './saisir-un-credit.component.html',
  styleUrls: ['./saisir-un-credit.component.scss']
})
export class SaisirUnCreditComponent implements OnInit {
  creditSubs = new Subscription();
  creditClients: CreditClient[] = [];
  form!: FormGroup;

  nomClientControls = new FormControl('', Validators.required);
  prenomClientControls = new FormControl('', Validators.required);
  telephoneClientControls = new FormControl('', Validators.required);
  montantCreditControls = new FormControl('', Validators.required);

  idCommand = 0;
  listeAccompte: Credit[] = [];
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
      (value) => {
        this.creditClients = this.creditService.creditEnCours;
        alert(this.creditClients.length +' Get credit En Cours ' + value);
      }
    );
  }

  open(content: any) {
    this.modalService.open(content);
  }

  onSubmit(): void {
    this.loading = true;
    this.submitted = true;
    let annee = this.date.getFullYear();
    let mois = String(this.date.getMonth() + 1).padStart(2, '0');
    let jour = String(this.date.getDate()).padStart(2, '0');
    let date = jour + '/' + mois + '/' + annee;
    let credit = new CreditClient(
      this.creditClients.length + 1,
      this.form.value.nomClient.toUpperCase(),
      this.form.value.prenomClient.toUpperCase(),
      this.form.value.telephoneClient,
      this.form.value.montantCredit,
      date,
      this.listeAccompte);
    this.creditClients.push(credit);
    this.creditService.create(this.creditClients).then(
      () => {
        this.router.navigate(['/home']).then(r => console.log(r));
      }
    );
  }

}
