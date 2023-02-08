import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CommentairComponentComponent } from '../commentair-component/commentair-component.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor(private modalController: ModalController){}

  ngOnInit(){}
  
  open(){
    this.ShowModal();
  }
  
  async ShowModal(){
    
  const modal = await this.modalController.create({
    component: CommentairComponentComponent,
    
    cssClass: 'commentair-component'
  });
  await modal.present();
  }
  
}
