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
  displayedColumns = ['Date', 'Nom Client', 'Prénom Client', 'Téléphone', 'Montant', 'Details', 'id'];
  dataSource = new MatTableDataSource<Commande>();
  commands: Commande[] = [];
  produits: Produit[] = [];
  currentCommand?: Commande;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) private paginator!: MatPaginator;

  constructor(private commandeService: CommandeService,
              private router: Router) {
    this.dataSource.data = this.commands.slice();
  }
  sortData(sort: Sort){
    const data = this.commands.slice();
    if(!sort.active || sort.direction === ''){
      this.dataSource.data = data;
      return;
    }
    this.dataSource.data = data.sort((a, b) => {
      const isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'date': return compare(a.date, b.date,isAsc);
        case 'nomClient': return compare(a.nomClient, b.nomClient,isAsc);
        case 'prenomClient': return compare(a.prenomClient, b.prenomClient,isAsc);
        case 'numeroTelephone': return compare(a.numeroTelephone, b.numeroTelephone,isAsc);
        case 'montant': return compare(a.montant, b.montant,isAsc);
        default: return 0;
      }
    });
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
/*        value.listeProduits.forEach(
          (value1) => {
            this.produits.push(value1);
          });*/
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
