import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.page.html',
  styleUrls: ['./login1.page.scss'],
})
export class Login1Page implements OnInit {

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
