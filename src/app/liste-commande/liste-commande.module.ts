import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeCommandePageRoutingModule } from './liste-commande-routing.module';

import { ListeCommandePage } from './liste-commande.page';
import { TabsPageModule } from "../tabs/tabs.module";

@NgModule({
    declarations: [ListeCommandePage],
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ListeCommandePageRoutingModule,
        TabsPageModule
    ]
})
export class ListeCommandePageModule {}
