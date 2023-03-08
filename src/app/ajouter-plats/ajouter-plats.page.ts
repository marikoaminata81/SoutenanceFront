import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProduitAjouterSuccesComponentComponent } from '../produit-ajouter-succes-component/produit-ajouter-succes-component.component';
import { CategorieServiceService } from '../service/categorie-service.service';
import { TokenserviceService } from '../service/tokenservice.service';

@Component({
  selector: 'app-ajouter-plats',
  templateUrl: './ajouter-plats.page.html',
  styleUrls: ['./ajouter-plats.page.scss'],
})
export class AjouterPlatsPage implements OnInit {

  form: any = {};
  urlImage: any;
  description: any;
  reference: any;
  prix: any;
  datefab: any;
  dateperem: any;
  allCategories: any;
  cleEtrangerCat :any;
  Categories:any;

  Cat:any
  constructor(private modalController: ModalController,private router:Router,private route: ActivatedRoute, private categorieService: CategorieServiceService, private tokenService: TokenserviceService,private http : HttpClient) { }
 

  ngOnInit() {
    
  this.categorieService.getAll().subscribe(data => {
    this.allCategories=data;
    console.log(this.allCategories)
  });
  }
  valider(){
    this.ShowModal("Plat soumis avec succès","" );
  }
  
  async ShowModal(msg: string,tt: string){
    
  const modal = await this.modalController.create({
    component: ProduitAjouterSuccesComponentComponent,
    componentProps:{message:{message:msg,title:tt } },
    cssClass: 'alert-modal-commande'
  });
  await modal.present();
  }
 
  recupererIdCategorie(nom:string){
    this.allCategories.forEach((e:{nom:string;categorie_id:number}) => {
    if (e.nom == nom) {
      this.cleEtrangerCat = e.categorie_id;
    }
    });
    return this.cleEtrangerCat;
  }
 

  handleImageInputChange(event:any) { 
    this.urlImage = event.target.files[0];
    console.log(this.urlImage);
  }

  ChangeCategorie(e:any){
    this.Cat=e.detail.value
    console.log(this.Cat);
  }

  uploadPhotoProduit() {
    const formData = new FormData();
   
    formData.append('nom', this.form.nom);
    formData.append('imagecouverture', this.urlImage);
    formData.append('description', this.form.description);
    formData.append('categorie', this.Cat.id);
    formData.append('reference', this.form.reference);
    formData.append('prix', this.form.prix);
console.log("Voir s'il recupère le lien ---------------",this.urlImage);
   
    this.http.post('http://localhost:8080/api/v1/plat/create', formData).subscribe(
      (response) => {
        console.log(response);
        console.log(this.form.Categories)
        console.log("Success");
      },
      (error) => {
        
        console.log("error");
        console.log(error);
      }
    );
  }
}
