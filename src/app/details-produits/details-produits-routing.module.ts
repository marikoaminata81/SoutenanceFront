import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsProduitsPage } from './details-produits.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsProduitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsProduitsPageRoutingModule {}
