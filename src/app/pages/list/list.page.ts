import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  @ViewChild('lista',null) lista:IonList;

  users:Observable<any>;
  constructor(private dataService:DataService, private toastCtrl:ToastController) { }

  ngOnInit() {
    this.users = this.dataService.getUsers()
  }

  trash(user){
    this.presentToast('Eliminado exitosamente')
    this.lista.closeSlidingItems()
  }

  async presentToast(msg) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
