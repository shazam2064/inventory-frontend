import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../../services/inventory.service';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  newWarehouse: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {
  }

  ngOnInit() {
    this.newWarehouse = new FormGroup({
      'name' : new FormControl('',
        [ Validators.required, Validators.minLength(4)]
      )
    });
  }
  get name() { return this.newWarehouse.get('name'); }

  submitWarehouse() {
    if (this.newWarehouse.valid) {
      console.log('Your warehouse has been created. Thank you!');
      this.inventoryService.createWarehouse(this.newWarehouse.value).subscribe(
        data => {
          this.newWarehouse.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['warehouse']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
      window.confirm('Please fill out the form before submitting >:( ');
    }
  }

}


// import {Component, Input, OnInit} from '@angular/core';
// import {InventoryService} from '../../../services/inventory.service';
// import {Router} from '@angular/router';
//
//
// @Component({
//   selector: 'app-add-warehouse',
//   templateUrl: './add-warehouse.component.html',
//   styleUrls: ['./add-warehouse.component.css']
// })
// export class AddWarehouseComponent implements OnInit {
//
//   @Input() warehouseDetails = {name: ''}
//
//   constructor(private inventoryService: InventoryService, private router: Router) {}
//
//   ngOnInit() {}
//
//   submitWarehouse(dataWarehouse) {
//     this.inventoryService.createWarehouse(this.warehouseDetails).subscribe((data: {}) => {
//       this.router.navigate(['/warehouse'])
//     })
//   }
//
// }
