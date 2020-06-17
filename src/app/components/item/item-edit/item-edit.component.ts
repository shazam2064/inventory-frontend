import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  updatedItem: FormGroup;
  public warehouseList;
  public unitList;
  public groupList;
  public locationList;
  public itemDetails;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
    this.getWarehouseList();
    this.getUnitList();
    this.getGroupList();
    this.getLocationList();

    this.updatedItem = new FormGroup({
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
      ultimateValue: new FormControl('', Validators.required)
    });
  }

  getWarehouseList() {
    this.inventoryService.getWarehouses().subscribe(
      data => {
        this.warehouseList = data;
      },
      err => console.error(err),
      () => console.log('warehouses loaded')
    );
  }

  getUnitList() {
    this.inventoryService.getUnits().subscribe(
      data => {
        this.unitList = data;
      },
      err => console.error(err),
      () => console.log('units loaded')
    );
  }

  getGroupList() {
    this.inventoryService.getGroups().subscribe(
      data => {
        this.groupList = data;
      },
      err => console.error(err),
      () => console.log('groups loaded')
    );
  }


  getLocationList() {
    this.inventoryService.getLocations().subscribe(
      data => {
        this.locationList = data;
      },
      err => console.error(err),
      () => console.log('locations loaded')
    );
  }

  getItem(id: string) {
    this.inventoryService.getItem(id).subscribe(
      data => {
        this.itemDetails = data;
      },
      err => console.error(err),
      () => console.log('item loaded'),
    );
  }

  deleteItem(id: string) {
    this.inventoryService.deleteItem(id).subscribe(
      data => {
        this.itemDetails = data;
      },
      err => console.error(err),
      () => console.log('item loaded'),
    );
    this.router.navigate(['item']);
  }

  updateItem(id:string) {
    if (this.updatedItem.valid) {
      console.log('Your item has been updated. Thank you!');
      this.inventoryService.updateItem(id, this.updatedItem.value).subscribe(
        data => {
          this.updatedItem.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['item']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}
