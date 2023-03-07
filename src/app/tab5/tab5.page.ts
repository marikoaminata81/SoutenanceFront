import { Component } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { UserService } from '../service/user.service';
import { VideoServiceService } from '../service/video-service.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
 //video: any ;


  currentUser: any;
  user: any;
  allvideo: any[]=[];

  constructor(private storageService: StorageService,private userService: UserService,private videoServiceService:VideoServiceService) { }

  ngOnInit(): void {
     this.currentUser = this.storageService.getUser().id;
     console.log(this.currentUser);
    // this.userService.videoforUser(this.currentUser.id).subscribe(data=>{
    //   this.video = data;
    // })
    this.videoServiceService.AfficherParUser(this.currentUser).subscribe(data => {
      this.allvideo=data;
      console.log(this.allvideo);
    });
  }

 selectedSegment: string='video';
  segmentChanged(ev:any){
    console.log(ev.target.value);
    this.selectedSegment=ev.target.value;
  }




}
