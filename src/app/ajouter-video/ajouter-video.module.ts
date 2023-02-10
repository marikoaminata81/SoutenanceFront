import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjouterVideoPageRoutingModule } from './ajouter-video-routing.module';

import { AjouterVideoPage } from './ajouter-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjouterVideoPageRoutingModule
  ],
  declarations: [AjouterVideoPage]
})
export class AjouterVideoPageModule {}
