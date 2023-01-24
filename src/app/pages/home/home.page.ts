import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  constructor() { }

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

  ngOnInit() {
  }

}
