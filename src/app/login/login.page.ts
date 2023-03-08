import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../service/authservice.service';
import { TokenserviceService } from '../service/tokenservice.service';
import { Icredentials } from '../Interface/icredentials';
import { IcredentialsInscription } from '../Interface/icredentialsInscription';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // constructor( private router: Router) { }
  selectedSegment: string='connexion';
  form: Icredentials = {
    username: '',
    password: ''
  }
  form1: IcredentialsInscription = {
    nom:'',
    prenom:'',
    username: '',
    numero:'',
    password: ''
  }
  currentUser: any;
  // storageService: any;
  roles: string[]=[];
  isLoggedIn= false;
  constructor(private router:Router,private route: ActivatedRoute, private authService: AuthserviceService, private tokenService: TokenserviceService, private storageService:StorageService ) { }

  ngOnInit() {
  if(this.storageService.isLoggedIn()) {
    this.isLoggedIn = false;
    this.roles = this.storageService.getUser().roles;
  }
  }
  onSubmit(): void{
    console.log("kjklljjj",this.form),
    
    this.authService.login(this.form).subscribe(
      data => { 
      console.log("byybyNN",data);
      this.currentUser=data
      this.storageService.saveUser(data);
      // this.currentUser = this.storageService.saveToken().id;
    //  this.currentUser = this.storageService.getbyid().id;
     this.roles=this.storageService.getUser().roles;
    },
      err => console.log(err),
      //this.router.navigate(['/accueil'])
    );
   // this.router.navigate(['/home'])
  
  }

  onSubmit1(): void{
    console.log(this.form1)
    this.authService.register(this.form1).subscribe(
      data => { 
      console.log(data.accessToken)
      this.tokenService.saveToken(data.accessToken)
    },
      err => console.log(err),
      //this.router.navigate(['/accueil'])
    );
   // this.router.navigate(['/home'])
  
  }


  //Changement des segments connexion et inscription
  segmentChanged(ev:any){
    console.log(ev.target.value);
    this.selectedSegment=ev.target.value;
  }
 

  navigateToSegment(){
    selectedSegment: 'connexion';
  }
  
}




 
 

