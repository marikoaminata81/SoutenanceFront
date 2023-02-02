import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { AlertModalCommandeComponent } from '../alert-modal-commande/alert-modal-commande.component';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.page.html',
  styleUrls: ['./detail-commande.page.scss'],
})
export class DetailCommandePage implements OnInit {  
  // constructor(private alertController: AlertController) {}

  // async presentAlert() {
  //   const alert = await this.alertController.create({
  //     header: '../../assets/34309-success.gif',
  //     subHeader: 'Important message',
  //     message: 'This is an alert!',
  //     buttons: ['OK'],
  //   });

  //   await alert.present();
  // }
  constructor(private modalController: ModalController){}

ngOnInit(){}

ValiderCommande(){
  this.ShowModal("Commande valider avec succès","" );
}

async ShowModal(msg: string,tt: string){
  
const modal = await this.modalController.create({
  component: AlertModalCommandeComponent,
  componentProps:{message:{message:msg,title:tt } },
  cssClass: 'alert-modal-commande'
});
await modal.present();
}
}


