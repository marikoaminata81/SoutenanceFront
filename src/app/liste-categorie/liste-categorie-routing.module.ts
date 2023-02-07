import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCategoriePage } from './liste-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: ListeCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeCategoriePageRoutingModule {}
