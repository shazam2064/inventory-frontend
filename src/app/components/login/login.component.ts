import { Component } from '@angular/core';
import {User} from '../../models/user.model';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent {

  public user : User;

  constructor(private loginService: LoginService, private router: Router) {
  }

  onKey(event) {
    const inputValue = event.target.value;

  }

  // validateLogin() {
  //   if(this.user.password == this.inputValue) {
  //     this.router.navigate(['']);
  //     } else {
  //     console.log('enter user name and password');
  //   }
  // }

}
