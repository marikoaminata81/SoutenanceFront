import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentairesPage } from './commentaires.page';

const routes: Routes = [
  {
    path: '',
    component: CommentairesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentairesPageRoutingModule {}
