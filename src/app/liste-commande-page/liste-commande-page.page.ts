import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-commande-page',
  templateUrl: './liste-commande-page.page.html',
  styleUrls: ['./liste-commande-page.page.scss'],
})
export class ListeCommandePagePage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  fermer(){
  
    this.router.navigateByUrl("/detail-commande")
  }
  Back(): void {
    window.history.back()
  }
}
