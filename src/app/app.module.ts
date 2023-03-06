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
import { ProduitAjouterSuccesComponentComponent } from './produit-ajouter-succes-component/produit-ajouter-succes-component.component';
import { TabsPageModule } from './tabs/tabs.module';
import { httpInterceptorProviders } from './helper/http.interceptor';




import { HttpClientModule } from '@angular/common/http';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
// import { AuthServiceService } from './service/authservice.service';
// import { StorageService } from './service/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    AlertModalCommandeComponent,
    AlertModalAjoutProduitComponent,
  ProduitAjouterSuccesComponentComponent,
],
  imports: [BrowserModule, 
    IonicModule.forRoot(),
     AppRoutingModule,
     FormsModule,
     HttpClientModule
    
],
  providers: [httpInterceptorProviders,
    VideoPlayer,HttpClient,
    { 
    provide: RouteReuseStrategy,
    useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {
}