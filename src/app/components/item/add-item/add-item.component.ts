import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {
    this.getWarehouseList();
    this.getUnitList();
    this.getGroupList();
    this.getLocationList();
    this.newItem = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      brand: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required),
      group: new FormControl('', Validators.required),
      location: new FormControl('', Validators.required),
      warehouse: new FormControl('', Validators.required),
      min: new FormControl('', Validators.required),
      max: new FormControl('', Validators.required),
      reorderPoint: new FormControl('', Validators.required),
      // entryDate: new FormControl('', Validators.required),
      // departureDate: new FormControl('', Validators.required),
      ultimateValue: new FormControl('', Validators.required)
    });
  }

  getWarehouseList() {
    this.inventoryService.getWarehouses().subscribe(
      data => {
        this.warehouseList = data;
        String(data);
        console.log('warehouse: ' , data);
      },
      err => console.error(err),
      () => console.log('warehouses loaded')
    );
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
