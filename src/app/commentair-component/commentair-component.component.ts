import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-commentair-component',
  templateUrl: './commentair-component.component.html',
  styleUrls: ['./commentair-component.component.scss'],
})
export class CommentairComponentComponent implements OnInit {
  @Input() message: any;
  constructor(private modalController:ModalController) { }

  ngOnInit() {}
closeModal() {
  this.modalController.dismiss();
}
}
