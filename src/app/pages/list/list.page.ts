import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista',null) lista:IonList;

  users:Observable<any>;
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers()
  }

  trash(user){
    console.log('trash', user)
    this.lista.closeSlidingItems()
  }
}
