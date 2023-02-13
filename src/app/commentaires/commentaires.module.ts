import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentairesPageRoutingModule } from './commentaires-routing.module';

import { CommentairesPage } from './commentaires.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommentairesPageRoutingModule
  ],
  declarations: [CommentairesPage]
})
export class CommentairesPageModule {}
