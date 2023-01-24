import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController} from '@ionic/angular';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  slideOpts = {
    direction: 'vertical'
  };

 
  constructor(private videoPlayer: VideoPlayer, public modalCtrl: ModalController) {
    this.videoPlayer.play('../assets/video.mp4').then(() => {
console.log('video completed');
}).catch(err => {
console.log(err);
});
  }

 

}


