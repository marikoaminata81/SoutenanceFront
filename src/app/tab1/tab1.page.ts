import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { VideoPlayer } from '@ionic-native/video-player/ngx';
import { ModalController} from '@ionic/angular';
import { UserService } from '../service/user.service';
import { VideoServiceService } from '../service/video-service.service';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  slideOpts = {
    direction: 'vertical'
  };
  
  allvideo:any[]=[];


 
  constructor(private modalController: ModalController, private videoServiceService:VideoServiceService,private http : HttpClient){}

  ngOnInit():void{
    // this.http.get('http://localhost:8080/api/v1/video/all').subscribe(data => {
    //  this.allvideo=data;
    // });
    this.videoServiceService.getAll().subscribe(data => {
      this.allvideo=data;
      console.log(this.allvideo);
    });
  }
  
 

}


