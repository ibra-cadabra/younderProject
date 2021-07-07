import { Component, OnInit } from '@angular/core';
import {Commande} from "../models/commande";
import {CommandeService} from "../services/commande.service";
import {Produit} from "../models/produit";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-commande',
  templateUrl: './single-commande.component.html',
  styleUrls: ['./single-commande.component.scss']
})
export class SingleCommandeComponent implements OnInit {

  data='';
  commande: Commande | undefined;
  id: number = 0;
  nom = '';
  prenom: string =''
  numero: number = 0;
  date: string = '';
  montant: number = 0;
  produits: Produit[] = [];

  constructor(private commandeService: CommandeService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.produits = this.commandeService.produits;
  }

}
