import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterProduitPageRoutingModule } from './ajouter-produit-routing.module';

import { AjouterProduitPage } from './ajouter-produit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterProduitPageRoutingModule
  ],
  declarations: [AjouterProduitPage]
})
export class AjouterProduitPageModule {}
