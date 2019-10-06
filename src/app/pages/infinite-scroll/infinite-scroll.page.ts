import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {
  data:any[] = Array(50)

  @ViewChild(IonInfiniteScroll,null) infiniteScroll:IonInfiniteScroll

  constructor() { }

  ngOnInit() {
  }

  loadData(event){
    console.log('Cargando siguientes')

    setTimeout(() => {
      if(this.data.length > 100){
        event.target.complete()
        this.infiniteScroll.disabled = true
        return
      }
      const newArr = Array(20)
      this.data.push(...newArr)
      event.target.complete()
    },1000)
  }
}
