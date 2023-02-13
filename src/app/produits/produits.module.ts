import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProduitsPageRoutingModule } from './produits-routing.module';

import { ProduitsPage } from './produits.page';
import { TabsPageModule } from '../tabs/tabs.module';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProduitsPageRoutingModule,
    TabsPageModule,
    TabsPageRoutingModule
  ],
  declarations: [ProduitsPage]
})
export class ProduitsPageModule {}
