import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilVisiteursiteurPage } from './profil-visiteursiteur.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilVisiteursiteurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilVisiteursiteurPageRoutingModule {}
