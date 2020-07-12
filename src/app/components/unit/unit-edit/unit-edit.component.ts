import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from "../../../services/inventory.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { throwError } from "rxjs";

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

  public unitDetails;
  updatedUnit: FormGroup;
  id = this.route.snapshot.params['id'];
  unitData: any = {};

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getUnit(this.route.snapshot.params.id);
    this.updatedUnit = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.inventoryService.getUnit(this.id).subscribe((data: {}) => {
      this.unitData = data;
      console.log(this.unitData)
    });
    this.updatedUnit = new FormGroup({
      'name' : new FormControl('',
        [Validators.required, Validators.minLength(4)]
      )
    });
  }

  get name() {
    return this.updatedUnit.get('name');
  }


  deleteUnit(id: string) {
    this.inventoryService.deleteUnit(id).subscribe(
      data => {
        this.unitDetails = data;
      },
      err => console.error(err),
      () => console.log('unit loaded'),
    );
    this.router.navigate(['unit']);
  }

  getUnit(id: string) {
    this.inventoryService.getUnit(id).subscribe(
      data => {
        this.unitDetails = data;
      },
      err => console.error(err),
      () => console.log('unit loaded'),
    );
  }

  updateUnit(id:string) {
    if (this.updatedUnit.valid) {
      console.log('Your unit has been updated. Thank you!');
      this.inventoryService.updateUnit(id, this.updatedUnit.value).subscribe(
        data => {
          this.updatedUnit.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['unit']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}


// import {Component, OnInit} from '@angular/core';
// import {ActivatedRoute, Router} from '@angular/router';
// import {InventoryService} from "../../../services/inventory.service";
//
//
// @Component({
//   selector: 'app-unit-edit',
//   templateUrl: './unit-edit.component.html',
//   styleUrls: ['./unit-edit.component.css']
// })
// export class UnitEditComponent implements OnInit {
//
//   id = this.route.snapshot.params['id'];
//   unitData: any = {};
//   Unit: any = [];
//
//   constructor(
//     private inventoryService: InventoryService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}
//
//   ngOnInit() {
//     this.inventoryService.getUnit(this.id).subscribe((data: {}) => {
//       this.unitData = data;
//     });
//   }
//
//
//   deleteUnit(id) {
//     if (window.confirm('Are you sure, you want to delete?')){
//       this.inventoryService.deleteUnit(id).subscribe(data => {
//         // this.getUnitList();
//         this.router.navigate(['/unit']);
//       })
//     }
//   }
//
//   getUnitList() {
//     return this.inventoryService.getUnits().subscribe((data: {}) => {
//       this.Unit = data;
//     })
//   }
//
//
//   updateUnit() {
//     if(window.confirm('Are you sure, you want to update?')){
//       this.inventoryService.updateUnit(this.id, this.unitData).subscribe(data => {
//         this.router.navigate(['/unit']);
//       })
//     }
//   }
//
// }
