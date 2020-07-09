
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {Item} from "../../../models/item.model";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  newItem: FormGroup;
  public warehouseList;
  public unitList;
  public groupList;
  public locationList;
  Warehouse: any = [];

  constructor(private inventoryService: InventoryService, private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    // this.getWarehouseList();
    this.loadWarehouses();
    this.getUnitList();
    this.getGroupList();
    this.getLocationList();
    this.newItem = new  FormGroup({
      'name':  new FormControl('',
        [ Validators.required, Validators.minLength(4)]
      ),
      'description':   new FormControl('',
        [ Validators.required, Validators.minLength(10)]
      ),
      'brand':   new FormControl('',
        [ Validators.required, Validators.minLength(2)]
      ),
      'unit':   new FormControl('',
        [ Validators.required]
      ),
      'group':   new FormControl('',
        [ Validators.required]
      ),
      'location':   new FormControl('',
        [ Validators.required]
      ),
      'warehouse':   new FormControl('',
        [ Validators.required]
      ),
      'min':   new FormControl('',
        [ Validators.required]
      ),
      'max':   new FormControl('',
        [ Validators.required]
      ),
      'reorderPoint':   new FormControl('',
        [ Validators.required]
      ),
      'entryDate':   new FormControl('',
        [ Validators.required]
      ),
      'departureDate':   new FormControl('',
        [ Validators.required]
      ),
      'ultimateValue':   new FormControl('',
        [ Validators.required]
      )
    });
  }
  get name() { return this.newItem.get('name'); }
  get description() { return this.newItem.get('description'); }
  get brand() { return this.newItem.get('brand'); }
  get warehouses() { return this.newItem.get('warehouses'); }
  get groups() { return this.newItem.get('groups'); }
  get units() { return this.newItem.get('units'); }
  get locations() { return this.newItem.get('locations'); }
  get minV() { return this.newItem.get('min'); }
  get maxV() { return this.newItem.get('max'); }
  get reorderPoint() { return this.newItem.get('reorderPoint'); }
  get entryDate() { return this.newItem.get('entryDate'); }
  get departureDate() { return this.newItem.get('departureDate'); }
  get ultimateValue() { return this.newItem.get('ultimateValue'); }

  // getWarehouseList() {
  //   this.inventoryService.getWarehouses().subscribe(
  //     data => {
  //       this.warehouseList = data;
  //       // String(data);
  //       console.log('warehouse: ' + data, data);
  //       console.log(this.warehouseList);
  //     },
  //     err => console.error(err),
  //     () => console.log('warehouses loaded')
  //   );
  // }

  loadWarehouses() {
    return this.inventoryService.getWarehouses().subscribe((data: {}) => {
      this.Warehouse = data;
      console.log(data)
      console.log(this.Warehouse)
    })
  }

  getUnitList() {
    this.inventoryService.getUnits().subscribe(
      data => {
        this.unitList = data;
        console.log('unit: ' + data);
      },
      err => console.error(err),
      () => console.log('units loaded')
    );
  }

  getGroupList() {
    this.inventoryService.getGroups().subscribe(
      data => {
        this.groupList = data;
        console.log('group: ' + data);
      },
      err => console.error(err),
      () => console.log('groups loaded')
    );
  }


  getLocationList() {
    this.inventoryService.getLocations().subscribe(
      data => {
        this.locationList = data;
        console.log('location: ' + data);
      },
      err => console.error(err),
      () => console.log('locations loaded')
    );
  }


  submitItem() {
    if (this.newItem.valid) {
      console.log("Your item has been created. Thank you!");
      this.inventoryService.createItem(this.newItem.value).subscribe(
        data => {
          this.newItem.reset();
          console.log("Check here " + data)
          return true;

        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['item']);
    } else {
      console.log("Please fill out the form before submitting >:( ");
    }
  }

}

// import { Component, Input, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { InventoryService } from '../../../services/inventory.service';
// import { Router } from '@angular/router';
// import { throwError } from 'rxjs';
// import { Item } from "../../../models/item.model";
//
// @Component({
//   selector: 'app-add-item',
//   templateUrl: './add-item.component.html',
//   styleUrls: ['./add-item.component.css']
// })
// export class AddItemComponent implements OnInit {
//
//   @Input() itemDetails = {
//     name: '',
//     description: '',
//     brand: '',
//     unit: '',
//     group: '',
//     location: '',
//     warehouse: '',
//     min: '',
//     max: '',
//     reorderPoint: '',
//     entryDate: '',
//     departureDate: '',
//     ultimateValue: ''
//   }
//
//   Warehouse: any = [];
//   Group: any = [];
//   Unit: any = [];
//   Location: any = [];
//
//   constructor(private inventoryService: InventoryService, private router: Router) {
//   }
//
//   ngOnInit() {
//     this.getWarehouses();
//     this.getUnitList();
//     this.getGroupList();
//     this.getLocationList();
//   }
//
//   getWarehouses() {
//     return this.inventoryService.getWarehouses().subscribe((data: {}) => {
//       this.Warehouse = data;
//       console.log(data)
//       console.log(this.Warehouse)
//     })
//   }
//
//   getUnitList() {
//     return this.inventoryService.getUnits().subscribe((data: {}) => {
//       this.Unit = data;
//     })
//   }
//
//   getGroupList() {
//     return this.inventoryService.getGroups().subscribe((data: {}) => {
//       this.Group = data;
//     })
//   }
//
//
//   getLocationList() {
//     return this.inventoryService.getLocations().subscribe((data: {}) => {
//       this.Location = data;
//     })
//   }
//
//
//   submitItem() {
//     this.inventoryService.createItem(this.itemDetails).subscribe(
//       data => {
//         console.log(data)
//         this.router.navigate(['item'])
//       }
//     )
//   }
//
//
// }
