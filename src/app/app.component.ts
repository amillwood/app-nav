import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HomePage } from './home/home.page'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  public showHomeButton=false;
  public homeModal;
  constructor(public modalController: ModalController, public router:Router) {}
  ngOnInit(){

  }

  async presentModal(){
    const homeModal = await this.modalController.create({
      component:HomePage,
    })
    return await homeModal.present();

  }
  onToggleHome(){

  }
}
