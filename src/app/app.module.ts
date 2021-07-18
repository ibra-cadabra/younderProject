import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TooltipModule} from "ngx-bootstrap/tooltip";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HeaderComponent} from './header/header.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment";
import {AngularFireDatabaseModule} from "@angular/fire/database";
import {HomeComponent} from './home/home.component';
import {SaisirCommandeComponent} from './saisir-commande/saisir-commande.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {HttpClientModule} from "@angular/common/http";
import {VenteProduitComponent} from './vente-produit/vente-produit.component';
import {HistoriqueCommandesComponent} from './historique-commandes/historique-commandes.component';
import {MatSortModule} from "@angular/material/sort";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CommandeService} from "./services/commande.service";
import { SingleCommandeComponent } from './single-commande/single-commande.component';
import { EnregistrerCreditComponent } from './enregistrer-credit/enregistrer-credit.component';
import { CreditEnCoursComponent } from './credit-en-cours/credit-en-cours.component';
import { SaisirUnCreditComponent } from './saisir-un-credit/saisir-un-credit.component';
import { VoirCreditEnCoursComponent } from './voir-credit-en-cours/voir-credit-en-cours.component';
import { DetailsDuCreditComponent } from './details-du-credit/details-du-credit.component';
import {CreditService} from "./services/credit.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SaisirCommandeComponent,
    VenteProduitComponent,
    HistoriqueCommandesComponent,
    SingleCommandeComponent,
    EnregistrerCreditComponent,
    CreditEnCoursComponent,
    SaisirUnCreditComponent,
    VoirCreditEnCoursComponent,
    DetailsDuCreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    TooltipModule.forRoot(),
    NgbModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
  providers: [
    CommandeService,
    CreditService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
