import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liste-abonnes',
  templateUrl: './liste-abonnes.page.html',
  styleUrls: ['./liste-abonnes.page.scss'],
})
export class ListeAbonnesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Back(): void {
    window.history.back()
  }
}
