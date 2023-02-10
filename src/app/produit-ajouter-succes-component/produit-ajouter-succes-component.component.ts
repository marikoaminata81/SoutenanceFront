import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-produit-ajouter-succes-component',
  templateUrl: './produit-ajouter-succes-component.component.html',
  styleUrls: ['./produit-ajouter-succes-component.component.scss'],
})
export class ProduitAjouterSuccesComponentComponent implements OnInit {

  @Input() message: any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
closeModal() {
  this.modalController.dismiss();
}
}
