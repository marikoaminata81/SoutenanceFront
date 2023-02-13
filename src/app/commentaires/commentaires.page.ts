import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commentaires',
  templateUrl: './commentaires.page.html',
  styleUrls: ['./commentaires.page.scss'],
})
export class CommentairesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
Back() :void{
  window.history.back()
}
}
