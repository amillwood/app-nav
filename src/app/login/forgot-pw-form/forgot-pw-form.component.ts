import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-forgot-pw-form',
  templateUrl: './forgot-pw-form.component.html',
  styleUrls: ['./forgot-pw-form.component.scss'],
})
export class ForgotPwFormComponent implements OnInit {

  constructor( public loginService:LoginService) { }

  ngOnInit() {}

  onCancel(){
    this.loginService.toggleFPWForm()
  }

}
