import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertModalCommandeComponent } from './alert-modal-commande/alert-modal-commande.component';
import { AlertModalAjoutProduitComponent } from './alert-modal-ajout-produit/alert-modal-ajout-produit.component';
import { PanierComponentComponent } from './panier-component/panier-component.component';
import { RechercheComponentComponent } from './recherche-component/recherche-component.component';
import { CommentairComponentComponent } from './commentair-component/commentair-component.component';
import { ListeCommandeComponentComponent } from './liste-commande-component/liste-commande-component.component';
import { ProduitAjouterSuccesComponentComponent } from './produit-ajouter-succes-component/produit-ajouter-succes-component.component';


@NgModule({
  declarations: [
    AppComponent,
    AlertModalCommandeComponent,
    AlertModalAjoutProduitComponent,
    PanierComponentComponent,
  RechercheComponentComponent,
  CommentairComponentComponent,
  ListeCommandeComponentComponent,
  ProduitAjouterSuccesComponentComponent,
],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule,

],
  providers: [
    VideoPlayer,
    { 
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
