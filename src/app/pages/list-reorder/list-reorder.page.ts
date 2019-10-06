import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {
  superheroes = ["Aquaman","Batman","Superman","Hulk"]
  constructor() { }

  ngOnInit() {
  }

  reorder(event){
    event.detail.complete()
  }
}
