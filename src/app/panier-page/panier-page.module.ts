import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanierPagePageRoutingModule } from './panier-page-routing.module';

import { PanierPagePage } from './panier-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanierPagePageRoutingModule
  ],
  declarations: [PanierPagePage]
})
export class PanierPagePageModule {}
