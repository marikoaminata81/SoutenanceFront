import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeAbonnesPageRoutingModule } from './liste-abonnes-routing.module';

import { ListeAbonnesPage } from './liste-abonnes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeAbonnesPageRoutingModule
  ],
  declarations: [ListeAbonnesPage]
})
export class ListeAbonnesPageModule {}
