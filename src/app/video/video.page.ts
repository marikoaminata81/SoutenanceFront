import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

  constructor(private modalController: ModalController){}

  ngOnInit(){}
  
  Back(): void {
    window.history.back()
  }
  
}
