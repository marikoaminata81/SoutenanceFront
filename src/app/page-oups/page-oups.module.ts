import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageOupsPageRoutingModule } from './page-oups-routing.module';

import { PageOupsPage } from './page-oups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageOupsPageRoutingModule
  ],
  declarations: [PageOupsPage]
})
export class PageOupsPageModule {}
