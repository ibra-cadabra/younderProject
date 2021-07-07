import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Produit} from "../models/produit";
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {Commande} from "../models/commande";
import {CommandeService} from "../services/commande.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-saisir-commande',
  templateUrl: './saisir-commande.component.html',
  styleUrls: ['./saisir-commande.component.scss']
})
export class SaisirCommandeComponent implements OnInit {
  commandSubs = new Subscription();
  commands: Commande[] = [];
  form!: FormGroup;
  panier: Produit[] = [];
  produits: Produit[] = [];

  nomClientControls = new FormControl('', Validators.required);
  prenomClientControls = new FormControl('', Validators.required);
  telephoneClientControls = new FormControl('', Validators.required);

  nomProduitControls = new FormControl('', Validators.required);
  qualiteProduitControls = new FormControl('', Validators.required);
  tailleProduitControls = new FormControl('', Validators.required);
  montantProduitControls = new FormControl('', Validators.required);

  nomProduit = ['Bazin', 'Broder', 'Tissu', 'Wax'];
  qualiteBazin = ['Getzner', 'Riche', 'Moins riche', 'Attaché', 'Teinté'];
  qualiteTissu = ['Super 100', 'Dormen', 'Léger', 'Hollandais'];
  qualiteBroder = ['Autruche'];
  qualiteWax = ['Blog Wax', 'Hollandais'];

  panierView = true;
  commandeView = false;
  contactView = false;
  idCommand = 0;
  montantTotal: number = 0;
  date = new Date();
  loading = false;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
              config: NgbModalConfig,
              private commandeService : CommandeService,
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

      nomProduit: ['', Validators.required],
      qualiteProduit: ['', Validators.required],
      tailleProduit: ['', Validators.required],
      montantProduit: ['', Validators.required]
    });
    this.commandeService.getAll().then(
      value => {
        this.commands = this.commandeService.commandes;
      }
    );
  }

  open(content: any) {
    this.modalService.open(content);
  }
  prixTotal(): void {
    this.montantTotal = 0;
    for (let value of this.produits) {
      this.montantTotal = this.montantTotal + value.prix;
    }
  }
  removeProdFromPanier(prod: Produit): void {

    this.produits.forEach(((value, index) => {
      if (value == prod) {
        this.produits.splice(index, 1);
      }
    }));
    this.prixTotal();
  }
  orderView(): void {
    this.panierView = true;
    this.commandeView = false;
  }
  saveOrder(){
    this.loading = true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    let annee = this.date.getFullYear();
    let mois = String(this.date.getMonth() + 1).padStart(2, '0');
    let jour = String(this.date.getDate()).padStart(2, '0');
    let date = jour+'/'+mois+'/'+annee;
    let commande = new Commande(
      this.commands.length + 1,
      this.form.value.nomClient.toUpperCase(),
      this.form.value.prenomClient.toUpperCase(),
      this.form.value.telephoneClient,
      this.produits,
      this.montantTotal,
      date);
    this.saveCommand(commande);
  }
  saveCommand(commande: Commande) {
    this.commands.push(commande);
    this.commandeService.create(this.commands).then(
        value => {
          alert('Enregistré avec succès !');
          this.loading = false;
          this.router.navigate(['/home']);
        }
    );
  }
  onSubmit(): void {
    let produit: Produit = new Produit();
    produit.id = this.commands.length + 1;
    produit.nomProduit = this.form.value.nomProduit;
    produit.qualiteProduit = this.form.value.qualiteProduit;
    produit.prix = this.form.value.montantProduit;
    produit.tailleProduit = this.form.value.tailleProduit;
    this.produits.push(produit);
    this.panierView = false;
    this.commandeView = true;
    this.contactView = true;
    this.prixTotal();
  }
}
