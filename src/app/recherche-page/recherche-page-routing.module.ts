import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecherchePagePage } from './recherche-page.page';

const routes: Routes = [
  {
    path: '',
    component: RecherchePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecherchePagePageRoutingModule {}
