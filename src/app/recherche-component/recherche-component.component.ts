import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-recherche-component',
  templateUrl: './recherche-component.component.html',
  styleUrls: ['./recherche-component.component.scss'],
})
export class RechercheComponentComponent implements OnInit {
  @Input() message: any;
  segment = 0;
    selectedSlide: any;
    @ViewChild('slides', { static: false })
    slider!: IonSlides;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
closeModal() {
  this.modalController.dismiss();
}


options = {
  slidesPerView: 1.5,
  centered: true,
  spaceBetweenView:10
}

sliderOptions ={
initialSlide: 0,
slidesPerView: 1,
speed:400
}


  
async segmentChanged(_event: any){
  console.log(this.segment)
  this.slider.slideTo(this.segment);
  //await this.selectedSlide.slideTo(this.segment); 
  }
 

 async slidesChanged(slides: IonSlides) {
 this.selectedSlide = slides;
 slides.getActiveIndex().then( selectedIndex =>{
 this.segment = selectedIndex; 
  });
  
}
}
