import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SaisirCommandeComponent} from "./saisir-commande/saisir-commande.component";
import {HistoriqueCommandesComponent} from "./historique-commandes/historique-commandes.component";
import {SingleCommandeComponent} from "./single-commande/single-commande.component";
import {CreditEnCoursComponent} from "./credit-en-cours/credit-en-cours.component";
import {SaisirUnCreditComponent} from "./saisir-un-credit/saisir-un-credit.component";
import {VoirCreditEnCoursComponent} from "./voir-credit-en-cours/voir-credit-en-cours.component";
import {DetailsDuCreditComponent} from "./details-du-credit/details-du-credit.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'histoCommand', component: HistoriqueCommandesComponent},
  {path: 'singleCommand', component: SingleCommandeComponent},
  {path: 'creditEnCours', component: CreditEnCoursComponent},
  {path: 'showCreditEnCours', component: VoirCreditEnCoursComponent},
  {path: 'detailsCredit', component: DetailsDuCreditComponent},
  {path: 'saisirCredit', component: SaisirUnCreditComponent},
  {path: 'saveCommand', component: SaisirCommandeComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
