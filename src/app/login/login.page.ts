import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // constructor( private router: Router) { }
  selectedSegment: string='connexion';

 
  constructor( private router: Router) { }

  segmentChanged(ev:any){
    console.log(ev.target.value);
    this.selectedSegment=ev.target.value;
  }
  ngOnInit() {
  }

  navigateToSegment(){
    selectedSegment: 'connexion';
  }

}
