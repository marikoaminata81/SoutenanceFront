import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { TokenserviceService } from '../service/tokenservice.service';
import { VideoServiceService } from '../service/video-service.service';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.page.html',
  styleUrls: ['./commentaires.page.scss'],
})
export class CommentairesPage implements OnInit {
  form: any = {};
  contenue: any;
  videoServiceService: any;
  allcommentaire: any;
  constructor(private modalController: ModalController,private router:Router,private route: ActivatedRoute, private videoService: VideoServiceService, private tokenService: TokenserviceService,private http : HttpClient) { }
 

  ngOnInit() {
    this.videoServiceService.AfficherCommentaireParVideo(this.currentUser).subscribe((data: any) => {
      this.allcommentaire=data;
      console.log(this.allcommentaire);
    });
  }
  currentUser(currentUser: any) {
    throw new Error('Method not implemented.');
  }
Back() :void{
  window.history.back()
}


commentaire() {
  const formData = new FormData();
  formData.append('contenue', this.form.contenue);
 
  console.log("Voir s'il recupère le lien ---------------",this.contenue);
  
  this.http.post('http://localhost:8080/api/v1/video/posts/${postId}/comments', formData).subscribe(
    (response) => {
      console.log("Success");
    },
    (error) => {
      console.log(error);
    }
  );
}


}

