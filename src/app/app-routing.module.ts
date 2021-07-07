import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SaisirCommandeComponent} from "./saisir-commande/saisir-commande.component";
import {HistoriqueCommandesComponent} from "./historique-commandes/historique-commandes.component";
import {SingleCommandeComponent} from "./single-commande/single-commande.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'histoCommand', component: HistoriqueCommandesComponent},
  {path: 'singleCommand', component: SingleCommandeComponent},
  {path: 'saveCommand', component: SaisirCommandeComponent},
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
