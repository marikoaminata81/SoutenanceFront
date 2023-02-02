import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-modal-commande',
  templateUrl: './alert-modal-commande.component.html',
  styleUrls: ['./alert-modal-commande.component.scss'],
})
export class AlertModalCommandeComponent implements OnInit {
@Input() message: any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
closeModal() {
  this.modalController.dismiss();
}
}
