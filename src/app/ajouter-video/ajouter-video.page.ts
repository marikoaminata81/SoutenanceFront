import { Component, OnInit } from '@angular/core';
import { VideoServiceService} from '../service/video-service.service';
import { ModalController } from '@ionic/angular';
import { ProduitAjouterSuccesComponentComponent } from '../produit-ajouter-succes-component/produit-ajouter-succes-component.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { TokenserviceService } from '../service/tokenservice.service';
import { Ivideo } from '../Interface/ivideo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Video } from '../model/video';
import { User } from '../model/User';
@Component({
  selector: 'app-ajouter-video',
  templateUrl: './ajouter-video.page.html',
  styleUrls: ['./ajouter-video.page.scss'],
})
export class AjouterVideoPage implements OnInit {

  constructor(private modalController: ModalController,private router:Router,private route: ActivatedRoute, private videoService: VideoServiceService, private tokenService: TokenserviceService,private http : HttpClient) { }
 


 
  ngOnInit() {
  }
  valider(){
    this.ShowModal("Vidéo publié avec succès","" );
  }
  
  async ShowModal(msg: string,tt: string){
    
  const modal = await this.modalController.create({
    component: ProduitAjouterSuccesComponentComponent,
    componentProps:{message:{message:msg,title:tt } },
    cssClass: 'alert-modal-commande'
  });
  await modal.present();
  }

  form: any = {};
  urlImage: any;
  url: any;

 

  handleImageInputChange(event:any) { 
    this.urlImage = event.target.files[0];
  }

  handleVideoInputChange(event:any) {

    this.url = event.target.files[0];
   
  }

  uploadVideoAndPhoto() {
    const formData = new FormData();
    formData.append('titre', this.form.titre);
    formData.append('imagecouverture', this.urlImage);
    console.log("Voir s'il recupère le lien ---------------",this.urlImage);
    formData.append('url', this.url);
    console.log("Voir s'il recupère le lien ---------------",this.url);

    this.http.post('http://localhost:8080/api/v1/video/posts/create', formData).subscribe(
      (response) => {
        console.log("Success");
      },
      (error) => {
        console.log(error);
      }
    );
  }


}

