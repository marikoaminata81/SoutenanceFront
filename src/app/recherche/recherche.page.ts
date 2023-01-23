import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/service.service';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.page.html',
  styleUrls: ['./recherche.page.scss'],
})
export class RecherchePage implements OnInit {
  hideIcon: boolean = false;
  options = {
      loop: true,
      autoplay: true
  }
  optionsTrends = {
      slidesPerView: 5,
      spaceBetween: 1,
      freeMode: true
  }

  trends: any = [];
  slides: any = [];

  constructor(private data: ServicesService) {
  }

  ngOnInit() {
      this.slides = this.data.getSlides();
      this.trends = this.data.getTrends();
  }

  onFocus(event: any) {
      this.hideIcon = true;
  }

  lossFocus(event: any) {
      this.hideIcon = false;
  }

}
