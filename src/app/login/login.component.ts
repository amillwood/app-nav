import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public form: 'Login'| 'Register';
  public toggleRegisterText: 'Login' | 'Register';
  // public header: 'Login' | 'Register';
  public toggleFPWSub: Subscription;
  public showFPWForm = false;

  constructor(public loginService:LoginService) { }

  ngOnInit() {
    this.toggleFPWSub = this.loginService.getFPWFormListener().subscribe(value=>{
      this.showFPWForm=value
    })
    this.toggleRegisterText="Register";
    // this.header='Login'
    this.form='Login';
  }
  onToggleRegister(){
    this.form = <'Login'|'Register'>this.toggleRegisterText
    // this.header = this.toggleRegisterText
    this.toggleRegisterText = this.toggleRegisterText === "Register" ? "Login" : "Register"

  }
}
