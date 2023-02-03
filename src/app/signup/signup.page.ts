import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  selectedSegment: string='';

 
  constructor() { }

  segmentChanged(ev:any){
    console.log(ev.target.value);
    this.selectedSegment=ev.target.value;
  }
  ngOnInit() {
  }

//   signUPUser(){
//  this.router.navigate(['login']);
//   }
}
