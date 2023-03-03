import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AlertModalAjoutProduitComponent } from '../alert-modal-ajout-produit/alert-modal-ajout-produit.component';

@Component({
  selector: 'app-details-produits',
  templateUrl: './details-produits.page.html',
  styleUrls: ['./details-produits.page.scss'],
})
export class DetailsProduitsPage implements OnInit {
  constructor(private modalController: ModalController){}

  ngOnInit(){}
  
  ValiderCommande(){
    this.ShowModal("Produit ajouter avec succès","" );
  
  }
 

  async ShowModal(msg: string,tt: string){
    
  const modal = await this.modalController.create({
    component: AlertModalAjoutProduitComponent,
    componentProps:{message:{message:msg,title:tt } },
    cssClass: 'alert-modal-commande'
  });
  await modal.present();
  }
  Back(): void {
    window.history.back()
  }
  }
  
  
  

