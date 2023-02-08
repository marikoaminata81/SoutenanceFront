import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ListeCommandeComponentComponent } from '../liste-commande-component/liste-commande-component.component';

@Component({
  selector: 'app-panier-component',
  templateUrl: './panier-component.component.html',
  styleUrls: ['./panier-component.component.scss'],
})
export class PanierComponentComponent implements OnInit {
  @Input() message: any;
  constructor(private modalController:ModalController,private router:Router) { }

  ngOnInit() {}
closeModal() {
  this.modalController.dismiss();
}
open(){
  this.ShowModal();
}

async ShowModal(){
  
const modal = await this.modalController.create({
  component: ListeCommandeComponentComponent,
  
  cssClass: 'liste-commande-component'
});
await modal.present();
}
}
