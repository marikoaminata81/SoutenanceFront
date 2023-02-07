import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.page.html',
  styleUrls: ['./liste-categorie.page.scss'],
})
export class ListeCategoriePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  slideOpts = {
    direction: 'horizontal',
    autoplay:true,
    
  };

}
