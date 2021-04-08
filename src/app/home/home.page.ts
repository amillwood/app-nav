import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides, ModalController, NavParams } from '@ionic/angular';
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
    this.modalController.dismiss()
  }
  ngOnInit(){
  }
  updateSlides(){
    this.slides.update()
  }
}
