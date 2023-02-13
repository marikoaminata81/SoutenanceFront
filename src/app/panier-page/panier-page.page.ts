import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panier-page',
  templateUrl: './panier-page.page.html',
  styleUrls: ['./panier-page.page.scss'],
})
export class PanierPagePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  count = 0;

  increment() {
    this.count++;
  }
  
  decrement() {
    this.count--;
  }
  Back(): void {
    window.history.back()
  }
}
