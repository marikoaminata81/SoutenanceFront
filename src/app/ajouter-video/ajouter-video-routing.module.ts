import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjouterVideoPage } from './ajouter-video.page';

const routes: Routes = [
  {
    path: '',
    component: AjouterVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjouterVideoPageRoutingModule {}
