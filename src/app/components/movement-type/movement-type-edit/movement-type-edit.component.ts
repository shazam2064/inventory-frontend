import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from "../../../services/inventory.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { throwError } from "rxjs";

@Component({
  selector: 'app-movement-type-edit',
  templateUrl: './movement-type-edit.component.html',
  styleUrls: ['./movement-type-edit.component.css']
})
export class MovementTypeEditComponent implements OnInit {

  public movementTypeDetails;
  updatedMovementType: FormGroup;
  id = this.route.snapshot.params['id'];
  movementTypeData: any = {};

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getMovementType(this.route.snapshot.params.id);
    this.updatedMovementType = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.inventoryService.getMovementType(this.id).subscribe((data: {}) => {
      this.movementTypeData = data;
      console.log(this.movementTypeData)
    });
    this.updatedMovementType = new FormGroup({
      'name' : new FormControl('',
        [Validators.required, Validators.minLength(4)]
      )
    });
  }

  get name() {
    return this.updatedMovementType.get('name');
  }


  deleteMovementType(id: string) {
    this.inventoryService.deleteMovementType(id).subscribe(
      data => {
        this.movementTypeDetails = data;
      },
      err => console.error(err),
      () => console.log('movement-type loaded'),
    );
    this.router.navigate(['movement-type']);
  }

  getMovementType(id: string) {
    this.inventoryService.getMovementType(id).subscribe(
      data => {
        this.movementTypeDetails = data;
      },
      err => console.error(err),
      () => console.log('movement-type loaded'),
    );
  }

  updateMovementType(id:string) {
    if (this.updatedMovementType.valid) {
      console.log('Your movement-type has been updated. Thank you!');
      this.inventoryService.updateMovementType(id, this.updatedMovementType.value).subscribe(
        data => {
          this.updatedMovementType.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['movement-type']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
      window.confirm('Please fill out the form before submitting >:( ');
    }
  }

}


// import {Component, OnInit} from '@angular/core';
// import {InventoryService} from '../../../services/inventory.service';
// import {ActivatedRoute, Router} from '@angular/router';
//
// @Component({
//   selector: 'app-movement-header-edit',
//   templateUrl: './movement-header-edit.component.html',
//   styleUrls: ['./movement-header-edit.component.css']
// })
// export class MovementHeaderEditComponent implements OnInit {
//
//   id = this.route.snapshot.params['id'];
//   movementTypeData: any = {};
//   MovementType: any = [];
//
//   constructor(
//     private inventoryService: InventoryService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {
//   }
//
//   ngOnInit() {
//     this.inventoryService.getMovementType(this.id).subscribe((data: {}) => {
//       this.movementTypeData = data;
//     });
//   }
//
//
//   deleteMovementType(id) {
//     if (window.confirm('Are you sure, you want to delete?')) {
//       this.inventoryService.deleteMovementType(id).subscribe(data => {
//         // this.getMovementTypeList();
//         this.router.navigate(['/movement-type']);
//       })
//     }
//   }
//
//   getMovementTypeList() {
//     return this.inventoryService.getMovementTypes().subscribe((data: {}) => {
//       this.MovementType = data;
//     })
//   }
//
//   updateMovementType() {
//     if(window.confirm('Are you sure, you want to update?')){
//       this.inventoryService.updateMovementType(this.id, this.movementTypeData).subscribe(data => {
//         this.router.navigate(['/movement-type']);
//       })
//     }
//   }
// }
