import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {

  public toggleFPWSub: Subscription;

  constructor(public loginService: LoginService) { }

  ngOnInit() {

  }

  onForgotPW(){
    this.loginService.toggleFPWForm()
  }
}
