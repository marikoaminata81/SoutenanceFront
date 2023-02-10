import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProduitAjouterSuccesComponentComponent } from '../produit-ajouter-succes-component/produit-ajouter-succes-component.component';

@Component({
  selector: 'app-ajouter-video',
  templateUrl: './ajouter-video.page.html',
  styleUrls: ['./ajouter-video.page.scss'],
})
export class AjouterVideoPage implements OnInit {
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  valider(){
    this.ShowModal("Vidéo publié avec succès","" );
  }
  
  async ShowModal(msg: string,tt: string){
    
  const modal = await this.modalController.create({
    component: ProduitAjouterSuccesComponentComponent,
    componentProps:{message:{message:msg,title:tt } },
    cssClass: 'alert-modal-commande'
  });
  await modal.present();
  }

}
