import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilVisiteursiteurPageRoutingModule } from './profil-visiteursiteur-routing.module';

import { ProfilVisiteursiteurPage } from './profil-visiteursiteur.page';
import { TabsPageModule } from '../tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilVisiteursiteurPageRoutingModule,
    TabsPageModule
  ],
  declarations: [ProfilVisiteursiteurPage]
})
export class ProfilVisiteursiteurPageModule {}
