import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterPlatsPage } from './ajouter-plats.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterPlatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterPlatsPageRoutingModule {}
