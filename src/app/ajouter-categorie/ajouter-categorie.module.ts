import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterCategoriePageRoutingModule } from './ajouter-categorie-routing.module';

import { AjouterCategoriePage } from './ajouter-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterCategoriePageRoutingModule
  ],
  declarations: [AjouterCategoriePage]
})
export class AjouterCategoriePageModule {}
