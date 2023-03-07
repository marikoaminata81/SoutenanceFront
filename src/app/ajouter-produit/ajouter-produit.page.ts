import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProduitAjouterSuccesComponentComponent } from '../produit-ajouter-succes-component/produit-ajouter-succes-component.component';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { TokenserviceService } from '../service/tokenservice.service';
import { VideoServiceService } from '../service/video-service.service';
import { CategorieServiceService } from '../service/categorie-service.service';
@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.page.html',
  styleUrls: ['./ajouter-produit.page.scss'],
})
export class AjouterProduitPage implements OnInit {


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
    this.ShowModal("Produit soumis avec succès","" );
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
    console.log(this.form.datefab)

    let dateFabrication=new Date(this.form.datefab);
    let datePeremption=new Date(this.form.dateperem)
    

    formData.append('nom', this.form.nom);
    formData.append('imagecouverture', this.urlImage);
    formData.append('description', this.form.description);
    formData.append('categorie', this.Cat.id);
    formData.append('reference', this.form.reference);
    formData.append('prix', this.form.prix);
    formData.append('datefab', dateFabrication.getDate()+'/'+(dateFabrication.getMonth()+1)+'/'+dateFabrication.getFullYear());
    formData.append('dateperem', datePeremption.getDate()+'/'+(datePeremption.getMonth()+1)+'/'+datePeremption.getFullYear());

    console.log(dateFabrication.getDate()+'/'+(dateFabrication.getMonth()+1)+'/'+dateFabrication.getFullYear())

    console.log(datePeremption.getDate()+'/'+(datePeremption.getMonth()+1)+'/'+datePeremption.getFullYear())
    console.log("Voir s'il recupère le lien ---------------",this.urlImage);
   
    this.http.post('http://localhost:8080/api/v1/produit/create', formData).subscribe(
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
