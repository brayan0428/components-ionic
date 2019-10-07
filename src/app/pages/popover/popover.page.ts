import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverInfoComponent } from 'src/app/components/popover-info/popover-info.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor(private popOverCtrl: PopoverController) { }

  ngOnInit() {
  }

  async mostrarPop(e){
    const popover = await this.popOverCtrl.create({
      component: PopoverInfoComponent,
      event: e,
      mode: 'ios'
    });
    await popover.present();
  }
}
