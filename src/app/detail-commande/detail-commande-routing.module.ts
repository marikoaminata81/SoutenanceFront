import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCommandePage } from './detail-commande.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCommandePageRoutingModule {}
