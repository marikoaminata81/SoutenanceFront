import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mainscreen',
  templateUrl: './mainscreen.page.html',
  styleUrls: ['./mainscreen.page.scss'],
})
export class MainscreenPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  // loginPage(){
  //   this.route.navigate(['login']) 
  //  }

  //  menu(){
  //   this.route.("/tabs") 
  //  }
}
