import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import {LoginComponent} from '../components/login/login.component';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient, private router: Router){}

  isAuthenticated:boolean;
  public passInputField: LoginComponent;
  public isAuth: LoginComponent;


  // login() {
  //   if (this.passInputField.passwordInput == '2020') {
  //     this.router.navigate(['']);
  //     this.isAuthenticated = true;
  //   }else {
  //          console.log('enter user name and password');
  //       }
  // }

}
