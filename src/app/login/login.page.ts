import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Icredentials } from '../Interface/icredentials';
import { AuthService } from '../service/auth.service';
import { StorageService } from '../service/storage.service';

import { TokenserviceService } from '../service/tokenservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // constructor( private router: Router) { }
  selectedSegment: string='connexion';
  

  form: any = {
    nom:null,
    prenom:null,
    username: null,
    numero: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];



  

  constructor(private router:Router,private route: ActivatedRoute,private authService: AuthService ,private tokenService: TokenserviceService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }
  onSubmit(): void {
    const { nom, prenom, username, numero, password } = this.form;

    this.authService.register( nom, prenom, username, numero, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }



  onSubmit1(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
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




 
 

