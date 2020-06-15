import { Component, OnInit } from '@angular/core';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean;
  auth: LoginComponent;

  constructor() { }

  ngOnInit() {
    // if (this.auth.isAuthenticatedLogin == true) {
    //   this.isAuthenticated = true;
    // }
    // else {
    //   this.isAuthenticated = false;
    // }
  }

}
