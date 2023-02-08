import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCommandePage } from './liste-commande.page';

const routes: Routes = [
  {
    path: '',
    component: ListeCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeCommandePageRoutingModule {}
