import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn:'root'
})

export class LoginService {
  private showForgotPWForm = false;
  private forgotPWFormListener = new Subject<boolean>();

  getFPWFormListener(){
    return this.forgotPWFormListener.asObservable();
  }

  toggleFPWForm(){
    this.showForgotPWForm = !this.showForgotPWForm
    this.forgotPWFormListener.next(this.showForgotPWForm)
  }

}
