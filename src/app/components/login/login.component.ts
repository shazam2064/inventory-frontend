import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import {User} from '../../models/user.model';
import { Router } from "@angular/router";
import { FormControl, FormGroup, Validators } from "@angular/forms";

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
  userEmail = new FormGroup({
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])
  });

  constructor(private loginService: LoginService, private router: Router) {
  }

  get primEmail(){
    return this.userEmail.get('email')
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
