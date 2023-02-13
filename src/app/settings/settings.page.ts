import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertModalAjoutProduitComponent } from '../alert-modal-ajout-produit/alert-modal-ajout-produit.component';
import { AlertModalCommandeComponent } from '../alert-modal-commande/alert-modal-commande.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private modalController: ModalController){}

  ngOnInit(){}
  
  valider(){
    this.ShowModal("Profil modifié avec succès","" );
  }
  
  async ShowModal(msg: string,tt: string){
    
  const modal = await this.modalController.create({
    component: AlertModalCommandeComponent,
    componentProps:{message:{message:msg,title:tt } },
    cssClass: 'alert-modal-commande'
  });
  await modal.present();
  }
  Back(): void {
    window.history.back()
  }

}
