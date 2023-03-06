import { Component, OnInit } from '@angular/core';
import { VideoServiceService} from '../service/video-service.service';
import { ModalController } from '@ionic/angular';
import { ProduitAjouterSuccesComponentComponent } from '../produit-ajouter-succes-component/produit-ajouter-succes-component.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { TokenserviceService } from '../service/tokenservice.service';
import { Ivideo } from '../Interface/ivideo';

@Component({
  selector: 'app-ajouter-video',
  templateUrl: './ajouter-video.page.html',
  styleUrls: ['./ajouter-video.page.scss'],
})
export class AjouterVideoPage implements OnInit {
  constructor(private modalController: ModalController,private router:Router,private route: ActivatedRoute, private videoService: VideoServiceService, private tokenService: TokenserviceService) { }
  form: Ivideo = {
    titre: '',
    imagecouverture: '',
    url: ''
  }
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




  onSubmit(): void{
    console.log(this.form)
    this.videoService.AjoutVideo(this.form).subscribe(
      data => { 
      console.log(data.accessToken)
      this.tokenService.saveToken(data.accessToken)
    },
      err => console.log(err),
      //this.router.navigate(['/accueil'])
    );
   // this.router.navigate(['/home'])
  
  }

}
