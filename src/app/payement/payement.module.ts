import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PayementPageRoutingModule } from './payement-routing.module';

import { PayementPage } from './payement.page';
import { TabsPageModule } from '../tabs/tabs.module';
import { TabsPageRoutingModule } from '../tabs/tabs-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PayementPageRoutingModule,
    TabsPageModule,
   
  ],
  declarations: [PayementPage]
})
export class PayementPageModule {}
