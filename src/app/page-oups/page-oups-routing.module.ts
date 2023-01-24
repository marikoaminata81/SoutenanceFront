import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageOupsPage } from './page-oups.page';

const routes: Routes = [
  {
    path: '',
    component: PageOupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageOupsPageRoutingModule {}
