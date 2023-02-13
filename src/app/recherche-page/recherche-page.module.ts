import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecherchePagePageRoutingModule } from './recherche-page-routing.module';

import { RecherchePagePage } from './recherche-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecherchePagePageRoutingModule
  ],
  declarations: [RecherchePagePage]
})
export class RecherchePagePageModule {}
