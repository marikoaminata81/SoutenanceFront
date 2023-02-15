import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterCategoriePage } from './ajouter-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterCategoriePageRoutingModule {}
