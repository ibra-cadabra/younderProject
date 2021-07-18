import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Commande} from "../models/commande";
import {Produit} from "../models/produit";
import {MatSort, Sort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {CommandeService} from "../services/commande.service";
import {Router} from "@angular/router";
import {CreditService} from "../services/credit.service";
import {CreditClient} from "../models/creditClient";

@Component({
  selector: 'app-voir-credit-en-cours',
  templateUrl: './voir-credit-en-cours.component.html',
  styleUrls: ['./voir-credit-en-cours.component.scss']
})
export class VoirCreditEnCoursComponent implements OnInit, AfterViewInit {
  loading: boolean=true;
  displayedColumns = ['Id','Date', 'Nom Client', 'Prénom Client', 'Téléphone', 'Montant','Restant', 'Details'];
  dataSource = new MatTableDataSource<CreditClient>();

  credits: CreditClient[] = [];
  creditsEnCours: CreditClient[] = [];
  montantRestant: number = 0;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) private paginator!: MatPaginator;

  constructor(private creditService: CreditService,
              private router: Router) {
  }

  doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  getCommandById(id: number){
    this.creditsEnCours.forEach((value) => {
      if(value.id === id){
        this.creditService.currentCredit=value;
        this.router.navigate(['/detailsCredit']);
      }
    });
  }

  ngOnInit(): void {
    this.creditService.getAllCreditEnCours().then(
      () => {
        this.creditsEnCours = this.creditService.creditEnCours;
        this.dataSource.data = this.creditsEnCours as CreditClient[];
        this.loading=false;
      });
  }
}
