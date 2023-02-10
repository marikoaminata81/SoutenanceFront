import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterPlatsPageRoutingModule } from './ajouter-plats-routing.module';

import { AjouterPlatsPage } from './ajouter-plats.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterPlatsPageRoutingModule
  ],
  declarations: [AjouterPlatsPage]
})
export class AjouterPlatsPageModule {}
