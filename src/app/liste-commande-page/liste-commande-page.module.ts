import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCommandePagePageRoutingModule } from './liste-commande-page-routing.module';

import { ListeCommandePagePage } from './liste-commande-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeCommandePagePageRoutingModule
  ],
  declarations: [ListeCommandePagePage]
})
export class ListeCommandePagePageModule {}
