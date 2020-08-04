import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Item } from "../../../models/item.model";

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
  public warehouseData;
  public groupData;
  public locationData;
  public unitData;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.itemDetails = new Item(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      1,
      3,
      2,
      new Date(),
      new Date(),
      4
    );
    this.getItem(this.route.snapshot.params.id);
    this.getWarehouseList();
    this.getUnitList();
    this.getGroupList();
    this.getLocationList();

    this.updatedItem = new FormGroup({
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

  get name() { return this.updatedItem.get('name'); }
  get description() { return this.updatedItem.get('description'); }
  get brand() { return this.updatedItem.get('brand'); }
  get warehouses() { return this.updatedItem.get('warehouses'); }
  get groups() { return this.updatedItem.get('groups'); }
  get units() { return this.updatedItem.get('units'); }
  get locations() { return this.updatedItem.get('locations'); }
  get minV() { return this.updatedItem.get('min'); }
  get maxV() { return this.updatedItem.get('max'); }
  get reorderPoint() { return this.updatedItem.get('reorderPoint'); }
  get entryDate() { return this.updatedItem.get('entryDate'); }
  get departureDate() { return this.updatedItem.get('departureDate'); }
  get ultimateValue() { return this.updatedItem.get('ultimateValue'); }

  getWarehouseList() {
    return this.inventoryService.getWarehouses().subscribe(
      data => {
        const { warehouses } = data;
        this.warehouseList = warehouses;
        console.log(warehouses);
      }
    )
  }

  getUnitList() {
    this.inventoryService.getUnits().subscribe(
      data => {
        const { units } = data;
        this.unitList = units;
        console.log('unit: ' + data);
      },
      err => console.error(err),
      () => console.log('units loaded')
    );
  }

  getGroupList() {
    this.inventoryService.getGroups().subscribe(
      data => {
        const { groups } = data;
        this.groupList = groups;
        console.log('group: ' + data);
      },
      err => console.error(err),
      () => console.log('groups loaded')
    );
  }


  getLocationList() {
    this.inventoryService.getLocations().subscribe(
      data => {
        const { locations } = data;
        this.locationList = locations;
        console.log('location: ' + data);
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

  getGroupId(id: string) {
    this.inventoryService.getGroup(id).subscribe((data: {}) => {
      this.groupData = data;
    });
  }

  getUnitId(id: string) {
    this.inventoryService.getUnit(id).subscribe((data: {}) => {
      this.unitData = data;
    });
  }

  getWarehouseId(id: string) {
    this.inventoryService.getWarehouse(id).subscribe((data: {}) => {
      this.warehouseData = data;
      console.log(this.warehouseData)
    });
  }

  getLocationId(id:string) {
    this.inventoryService.getLocation(id).subscribe((data: {}) => {
      this.locationData = data;
    });
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
      window.confirm('Please fill out the form before submitting >:( ');
    }
  }

}
