import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-visiteursiteur',
  templateUrl: './profil-visiteursiteur.page.html',
  styleUrls: ['./profil-visiteursiteur.page.scss'],
})
export class ProfilVisiteursiteurPage {
  selectedSegment: string='video';

 
  constructor() { }

  segmentChanged(ev:any){
    console.log(ev.target.value);
    this.selectedSegment=ev.target.value;
  }
  Back(): void {
    window.history.back()
  }
}
