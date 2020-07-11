import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from "../../../services/inventory.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { throwError } from "rxjs";

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  public warehouseDetails;
  updatedWarehouse: FormGroup;
  id = this.route.snapshot.params['id'];
  warehouseData: any = {};

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.getWarehouse(this.route.snapshot.params.id);
    this.updatedWarehouse = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.inventoryService.getWarehouse(this.id).subscribe((data: {}) => {
      this.warehouseData = data;
      console.log(this.warehouseData)
    });
    this.updatedWarehouse = new FormGroup({
      'name' : new FormControl('',
        [Validators.required, Validators.minLength(4)]
      )
    });
  }

  get name() {
    return this.updatedWarehouse.get('name');
  }


  deleteWarehouse(id: string) {
    this.inventoryService.deleteWarehouse(id).subscribe(
      data => {
        this.warehouseDetails = data;
      },
      err => console.error(err),
      () => console.log('warehouse loaded'),
    );
    this.router.navigate(['warehouse']);
  }

  getWarehouse(id: string) {
    this.inventoryService.getWarehouse(id).subscribe(
      data => {
        this.warehouseDetails = data;
      },
      err => console.error(err),
      () => console.log('warehouse loaded'),
    );
  }

  updateWarehouse(id:string) {
    if (this.updatedWarehouse.valid) {
      console.log('Your warehouse has been updated. Thank you!');
      this.inventoryService.updateWarehouse(id, this.updatedWarehouse.value).subscribe(
        data => {
          this.updatedWarehouse.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['warehouse']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}


// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { InventoryService } from "../../../services/inventory.service";
// import { FormControl, FormGroup, Validators } from "@angular/forms";
//
// @Component({
//   selector: 'app-warehouse-edit',
//   templateUrl: './warehouse-edit.component.html',
//   styleUrls: ['./warehouse-edit.component.css']
// })
// export class WarehouseEditComponent implements OnInit {
//
//   updatedWarehouse: FormGroup;
//   id = this.route.snapshot.params['id'];
//   warehouseData: any = {};
//
//   constructor(
//     private inventoryService: InventoryService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {
//   }
//
//   ngOnInit() {
//     this.inventoryService.getWarehouse(this.id).subscribe((data: {}) => {
//       this.warehouseData = data;
//       console.log(this.warehouseData)
//     });
//     this.updatedWarehouse = new FormGroup({
//       'name' : new FormControl('',
//         [Validators.required, Validators.minLength(4)]
//       )
//     });
//   }
//
//   get name() {
//     return this.updatedWarehouse.get('name');
//   }
//
//
//   deleteWarehouse(id) {
//     if (window.confirm('Are you sure, you want to delete?')) {
//       this.inventoryService.deleteWarehouse(id).subscribe(data => {
//         this.router.navigate(['/warehouse']);
//       })
//     }
//   }
//
//
//   updateWarehouse() {
//     if (window.confirm('Are you sure, you want to update?')) {
//       this.inventoryService.updateWarehouse(this.id, this.updatedWarehouse).subscribe(data => {
//         this.router.navigate(['/warehouse']);
//       })
//     }
//   }
//
// }
