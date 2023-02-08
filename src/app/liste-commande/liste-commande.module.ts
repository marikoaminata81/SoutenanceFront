import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCommandePageRoutingModule } from './liste-commande-routing.module';

import { ListeCommandePage } from './liste-commande.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCommandePageRoutingModule
  ],
  declarations: [ListeCommandePage]
})
export class ListeCommandePageModule {}
