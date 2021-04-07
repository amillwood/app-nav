import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import Pages from './pages.interface'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public pages = Pages
  @ViewChild(IonSlides) slides: IonSlides;
  constructor(private modalController:ModalController, public router:Router) {}

  dismiss(){
    console.log('dismiss home modal')
    this.modalController.dismiss()
  }
  ngOnInit(){
  }
  updateSlides(){
    this.slides.update()
  }
}
