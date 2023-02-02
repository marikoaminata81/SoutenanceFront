import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AlertModalCommandeComponent } from './alert-modal-commande/alert-modal-commande.component';

@NgModule({
  declarations: [AppComponent,AlertModalCommandeComponent],
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
