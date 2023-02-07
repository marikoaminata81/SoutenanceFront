import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCategoriePageRoutingModule } from './liste-categorie-routing.module';

import { ListeCategoriePage } from './liste-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCategoriePageRoutingModule
  ],
  declarations: [ListeCategoriePage]
})
export class ListeCategoriePageModule {}
