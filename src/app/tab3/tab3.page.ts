import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PanierComponentComponent } from '../panier-component/panier-component.component';
import { RechercheComponentComponent } from '../recherche-component/recherche-component.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

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
