import { Component } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { UserService } from '../service/user.service';
import { VideoServiceService } from '../service/video-service.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

 

  constructor(private storageService: StorageService,userService:UserService) { }

  ngOnInit(): void {
   
  }
}

