import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { VideoServiceService } from '../service/video-service.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {
  id!: number;
  video: any;
  isLike!: boolean;
  constructor(private modalController: ModalController, private videoService: VideoServiceService, private route: ActivatedRoute,private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getVideo()
    this.getVideoLike();
  }
  getVideo(){
    this.videoService.getbyid(this.id).subscribe(data => {
      this.video = data;
    })
  }
  getVideoLike() {
    this.videoService.VerifierPostLikeByUser(this.id, 2).subscribe((data) => {
      this.isLike = data;
      console.log(this.isLike);
    })
  }
  LikeVideo() {
    this.videoService.LikeVideo(this.id).subscribe((data) => {
      console.log(data);
      this.isLike=true
      this.getVideoLike()
      this.getVideo()
      // this.changeDetectorRef.detectChanges();
      })
  }
  UnLikeVideo() {
    this.videoService.unLikeVideo(this.id).subscribe((data) => {
      console.log(data);
      this.isLike=false
      this.getVideoLike()
      this.getVideo()
      
      // this.changeDetectorRef.detectChanges();
     })
  }
  Back(): void {
    window.history.back()
  }

}
