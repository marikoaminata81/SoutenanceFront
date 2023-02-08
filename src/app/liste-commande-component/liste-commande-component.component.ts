import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-liste-commande-component',
  templateUrl: './liste-commande-component.component.html',
  styleUrls: ['./liste-commande-component.component.scss'],
})
export class ListeCommandeComponentComponent implements OnInit {

  @Input() message: any;
  constructor(private modalController:ModalController) { }
  ngOnInit() {}
closeModal() {
  this.modalController.dismiss();
}
}
