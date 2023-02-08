import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PanierComponentComponent } from '../panier-component/panier-component.component';
import { RechercheComponentComponent } from '../recherche-component/recherche-component.component';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private modalController: ModalController){}

  ngOnInit(){}
  
  panier(){
    this.ShowModal();
  }
  
  async ShowModal(){
    
  const modal = await this.modalController.create({
    component: PanierComponentComponent,
    
    cssClass: 'panier-component'
  });
  await modal.present();
  }

  recherche(){
    this.ShowModal1( );
  }
  
  async ShowModal1(){
    
  const modal = await this.modalController.create({
    component: RechercheComponentComponent,
    
    cssClass: 'recherche-component'
  });
  await modal.present();
  }
  

}
