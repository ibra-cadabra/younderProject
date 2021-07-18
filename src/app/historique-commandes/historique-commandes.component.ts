import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Commande} from "../models/commande";
import {CommandeService} from "../services/commande.service";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {Produit} from "../models/produit";
import {Router} from "@angular/router";

@Component({
  selector: 'app-historique-commandes',
  templateUrl: './historique-commandes.component.html',
  styleUrls: ['./historique-commandes.component.scss']
})
export class HistoriqueCommandesComponent implements OnInit, AfterViewInit {
  loading: boolean=true;
  displayedColumns = ['Id','Date', 'Nom Client', 'Prénom Client', 'Téléphone', 'Montant', 'Details'];
  dataSource = new MatTableDataSource<Commande>();
  commands: Commande[] = [];
  produits: Produit[] = [];
  currentCommand?: Commande;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) private paginator!: MatPaginator;

  constructor(private commandeService: CommandeService,
              private router: Router) {
    //this.dataSource.data = this.commands.slice();
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCommandById(id: number){
    this.commands.forEach((value) => {
      if(value.id === id){
        this.commandeService.produits=value.listeProduits;
        this.router.navigate(['/singleCommand']);
      }
    });
  }

  ngOnInit(): void {
    this.commandeService.getAll().then(
      () => {
        this.commands = this.commandeService.commandes;
        this.dataSource.data = this.commands as Commande[];
        this.loading=false;
      }
    );
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
