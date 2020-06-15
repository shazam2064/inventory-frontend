import { Component } from '@angular/core';
import {User} from '../../models/user.model';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  isAuthenticatedLogin: boolean;
  passwordInput: any;

  passwordInputField(event) {
    this.passwordInput = event.target.value;
  }

  constructor(private router: Router, private loginService: LoginService) {
    this.isAuthenticatedLogin = false;
  }


  login() {
    if (this.passwordInput == '2020') {
      this.router.navigate(['']);
      this.isAuthenticatedLogin = true;
    } else {
      console.log('enter user name and password');
    }
  }




}
