import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterProduitPage } from './ajouter-produit.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterProduitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterProduitPageRoutingModule {}
