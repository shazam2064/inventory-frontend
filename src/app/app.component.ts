import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import * as Feather from 'feather-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'inventory-frontend';
  router: Router;

  ngAfterViewInit() {
    Feather.replace();
  }

}
