import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-liste-commande-component',
  templateUrl: './liste-commande-component.component.html',
  styleUrls: ['./liste-commande-component.component.scss'],
})
export class ListeCommandeComponentComponent implements OnInit {

  @Input() message: any;
  constructor(private modalController:ModalController, private router:Router) { }
  ngOnInit() {}
closeModal() {
  this.modalController.dismiss();
}
fermer(){
  this.modalController.dismiss();
  this.router.navigateByUrl("/detail-commande")
}
}
