import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {User} from '../../models/user.model';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent {

  username = 'Gabriel';
  password = '';
  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  constructor(private loginService: LoginService, private router: Router) {
  }

  handleLogin() {
    if (this.loginService.authenticate(this.username, this.password)) {
      this.router.navigate(['home', this.username])
      this.invalidLogin = false
    } else {
      this.invalidLogin = true
    }
  }


}
