import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeAbonnesPage } from './liste-abonnes.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAbonnesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeAbonnesPageRoutingModule {}
