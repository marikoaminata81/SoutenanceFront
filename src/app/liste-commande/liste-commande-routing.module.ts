import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeCommandePage } from './liste-commande.page';
import { TabsPageModule } from "../tabs/tabs.module";
const routes: Routes = [
  {
    path: '',
    component: ListeCommandePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,TabsPageModule],
})
export class ListeCommandePageRoutingModule {}
