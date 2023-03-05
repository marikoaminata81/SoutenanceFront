import { Component } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-tab5',
  templateUrl: './tab5.page.html',
  styleUrls: ['./tab5.page.scss'],
})
export class Tab5Page {
 video: any ;


  currentUser: any;

  constructor(private storageService: StorageService,private userService: UserService) { }

  ngOnInit(): void {
    this.currentUser = this.storageService.getUser();
    this.userService.videoforUser(this.currentUser.id).subscribe(data=>{
      this.video = data;
    })
  }

 selectedSegment: string='video';
  segmentChanged(ev:any){
    console.log(ev.target.value);
    this.selectedSegment=ev.target.value;
  }




}
