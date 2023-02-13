import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanierPagePage } from './panier-page.page';

const routes: Routes = [
  {
    path: '',
    component: PanierPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanierPagePageRoutingModule {}
