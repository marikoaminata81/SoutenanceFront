import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-alert-modal-ajout-produit',
  templateUrl: './alert-modal-ajout-produit.component.html',
  styleUrls: ['./alert-modal-ajout-produit.component.scss'],
})
export class AlertModalAjoutProduitComponent implements OnInit {
  @Input() message: any;
  constructor(private modalController:ModalController,private router:Router) { }

  ngOnInit() {}
closeModal() {
  this.modalController.dismiss();
  this.router.navigateByUrl("/details-produits")
}

}
