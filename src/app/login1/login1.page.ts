import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icredentials } from '../Interface/icredentials';
import { IcredentialsInscription } from '../Interface/icredentialsInscription';
import { AuthserviceService } from '../service/authservice.service';
import { TokenserviceService } from '../service/tokenservice.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {
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
 constructor(private router:Router,private route: ActivatedRoute, private authService: AuthserviceService, private tokenService: TokenserviceService) { }

 ngOnInit() {
 }
 onSubmit(): void{
   console.log(this.form)
   this.authService.login(this.form).subscribe(
     data => { 
     console.log(data.accessToken)
     this.tokenService.saveToken(data.accessToken)
   },
     err => console.log(err),
     //this.router.navigate(['/accueil'])
   );
  // this.router.navigate(['/home'])
 
 }

 onSubmit1(): void{
   console.log(this.form1)
   this.authService.login(this.form1).subscribe(
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







