import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsProduitsPageRoutingModule } from './details-produits-routing.module';

import { DetailsProduitsPage } from './details-produits.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsProduitsPageRoutingModule
  ],
  declarations: [DetailsProduitsPage]
})
export class DetailsProduitsPageModule {}
