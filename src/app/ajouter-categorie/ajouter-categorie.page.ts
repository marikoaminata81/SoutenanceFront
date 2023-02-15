import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProduitAjouterSuccesComponentComponent } from '../produit-ajouter-succes-component/produit-ajouter-succes-component.component';

@Component({
  selector: 'app-ajouter-categorie',
  templateUrl: './ajouter-categorie.page.html',
  styleUrls: ['./ajouter-categorie.page.scss'],
})
export class AjouterCategoriePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  valider(){
    this.ShowModal("Catégorie créer avec succès","" );
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
