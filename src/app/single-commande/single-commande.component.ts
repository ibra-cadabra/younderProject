import {Component, OnInit} from '@angular/core';
import {Commande} from "../models/commande";
import {CommandeService} from "../services/commande.service";
import {Produit} from "../models/produit";

@Component({
  selector: 'app-single-commande',
  templateUrl: './single-commande.component.html',
  styleUrls: ['./single-commande.component.scss']
})
export class SingleCommandeComponent implements OnInit {

  produits: Produit[] = [];

  constructor(private commandeService: CommandeService) { }

  ngOnInit(): void {
    this.produits = this.commandeService.produits;
  }

}
