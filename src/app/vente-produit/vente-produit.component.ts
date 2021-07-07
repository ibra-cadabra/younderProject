import {Component, OnInit} from '@angular/core';
import {CommandeService} from "../services/commande.service";
import {Commande} from "../models/commande";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-vente-produit',
  templateUrl: './vente-produit.component.html',
  styleUrls: ['./vente-produit.component.scss']
})
export class VenteProduitComponent implements OnInit {

  headElements = ['Date', 'Nom Client', 'Prénom Client', 'Téléphone', 'Montant', 'Produits'];
  dataSource = new MatTableDataSource<Commande>();

  commands: Commande[] = [];
  currentCommand?: Commande;

  constructor(private commandeService: CommandeService) {
  }

  ngOnInit(): void {
  }
}
