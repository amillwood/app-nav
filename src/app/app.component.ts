import { animate, animateChild, group, keyframes, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HomePage } from './home/home.page'
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations:[
    // ANGULAR PROVIDED CODE
    trigger('routeAnimations', [
      transition('HomePage => *', [
        style({ position: 'relative' }),
        query(':enter', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 0
          })
        ]),
        query(':leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            opacity: 1
          })
        ]),
        query(':leave', animateChild()),
        group([
          query(':leave', [
            animate('300ms ease-out', style({
              opacity:1,
              top:'100%',
              width:'0%',
              height:'0%',
              'background-color' :"blue"
            }))
          ]),
          query(':enter', [
            animate('300ms ease-out', style({ opacity: 1 }))
          ])
        ]),
        query(':enter', animateChild()),
      ]),
      ]),
    /// END ANGULAR PROVIDED CODE

    trigger('homeButton',[
      state('collapsed',style({
        backgroundColor: 'var(--ion-color-primary)',
        width: '0',
        height: '0',
        borderRadius: '0 100% 0 0'
      })),
      state('open',style({
        backgroundColor: 'var(--ion-color-primary)',
        width:'100%',
        height:'100%',
        borderRadius:'0 0 0 0'
      })),

      transition('collapsed => open',[
      style({
        backgroundColor: 'var(--ion-color-primary)',
        width: '0%',
        height: '0%',
        borderRadius: '0 100% 0 0'
      }),
      animate(100,
        style({
        backgroundColor: 'var(--ion-color-primary)',
        width: '100%',
        height: '100%',
        borderRadius: '0 100% 0 0'
      })),
      animate(50,style({
        backgroundColor: 'var(--ion-color-primary)',
        width: '100%',
        height: '100%',
        borderRadius: '0 0 0 0'
      })),
    ]),
    transition('open => collapsed',[
      style({
        backgroundColor: 'var(--ion-color-primary)',
        width: '100%',
        height: '100%',
        borderRadius: '0 0 0 0'
      }),
      animate(50,
        style({
        backgroundColor: 'var(--ion-color-primary)',
        width: '100%',
        height: '100%',
        borderRadius: '0 100% 0 0'
      })),
      animate(100,style({
        backgroundColor: 'var(--ion-color-primary)',
        width: '0%',
        height: '0%',
        borderRadius: '0 100% 0 0'
      })),
    ])


    ])
  ]
})
export class AppComponent implements OnInit{
  public showHomeButton=false;
  public homeModal;
  public homeState='collapsed';
  constructor(public modalController: ModalController, public router:Router) {}
  ngOnInit(){

  }

  async presentModal(){
    const homeModal = await this.modalController.create({
      component:HomePage,
      animated: false
    })
    homeModal.onDidDismiss().then(()=>{this.homeState="collapsed"})
    return await homeModal.present();

  }
  onToggleHome(){
    console.log(this.router.url)
    this.homeState =='collapsed' ? this.homeState="open": this.homeState="collapsed"
  }
  onFinishAnimation(){
    if(this.homeState==='open'){
      this.presentModal()
    }
  }
  prepareRoute(outlet: RouterOutlet) {

    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
