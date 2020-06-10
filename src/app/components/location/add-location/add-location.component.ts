import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  newLocation: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {

    this.newLocation = new FormGroup({
      aisle: new FormControl('', Validators.required),
      rack: new FormControl('', Validators.required),
      shelf: new FormControl('', Validators.required)
    });

  }

  submitLocation() {
    if (this.newLocation.valid) {
      this.validMessage = "Your location has been created. Thank you!";
      this.router.navigate(['location']);
      this.inventoryService.createLocation(this.newLocation.value).subscribe(
        data => {
          this.newLocation.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting >:( ";
    }
  }

}
