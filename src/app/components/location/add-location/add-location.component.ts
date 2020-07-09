import { Component, Input, OnInit } from '@angular/core';
import { InventoryService } from '../../../services/inventory.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { throwError } from "rxjs";

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  newLocation: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {
  }

  ngOnInit() {
    this.newLocation = new FormGroup({
      'aisle': new FormControl('',
        [Validators.required]
      ),
      'rack': new FormControl('',
        [Validators.required]
      ),
      'shelf': new FormControl('',
        [Validators.required]
      )
    });
  }
  get aisle() {
    return this.newLocation.get('aisle');
  }
  get rack() {
    return this.newLocation.get('rack');
  }
  get shelf() {
    return this.newLocation.get('shelf');
  }

  submitLocation() {
    if (this.newLocation.valid) {
      console.log('Your location has been created. Thank you!');
      this.inventoryService.createLocation(this.newLocation.value).subscribe(
        data => {
          this.newLocation.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['location']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}


// import {Component, Input, OnInit} from '@angular/core';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {InventoryService} from '../../../services/inventory.service';
// import {Router} from '@angular/router';
// import { throwError } from 'rxjs';
//
// @Component({
//   selector: 'app-add-location',
//   templateUrl: './add-location.component.html',
//   styleUrls: ['./add-location.component.css']
// })
// export class AddLocationComponent implements OnInit {
//
//   @Input() locationDetails = {aisle: '', rack: '', shelf: ''}
//
//   constructor(private inventoryService: InventoryService, private router: Router) {}
//
//   ngOnInit() {
//   }
//
//   submitLocation(dataLocation) {
//     this.inventoryService.createLocation(this.locationDetails).subscribe((data: {}) => {
//       this.router.navigate(['/location'])
//     })
//   }
//
// }
