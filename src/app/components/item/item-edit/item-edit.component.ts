import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InventoryService } from '../../../services/inventory.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from "../../../models/item.model";

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  isSubmitted = false;
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

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {
  }

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
      'name': new FormControl('',
        [Validators.required, Validators.minLength(4)]
      ),
      'description': new FormControl('',
        [Validators.required, Validators.minLength(10)]
      ),
      'brand': new FormControl('',
        [Validators.required, Validators.minLength(2)]
      ),
      'unit': new FormControl('',
        [Validators.required]
      ),
      'group': new FormControl('',
        [Validators.required]
      ),
      'location': new FormControl('',
        [Validators.required]
      ),
      'warehouse': new FormControl('',
        [Validators.required]
      ),
      'min': new FormControl('',
        [Validators.required]
      ),
      'max': new FormControl('',
        [Validators.required]
      ),
      'reorderPoint': new FormControl('',
        [Validators.required]
      ),
      'entryDate': new FormControl('',
        [Validators.required]
      ),
      'departureDate': new FormControl('',
        [Validators.required]
      ),
      'ultimateValue': new FormControl('',
        [Validators.required]
      )
    });
  }

  get name() {
    return this.updatedItem.get('name');
  }

  get description() {
    return this.updatedItem.get('description');
  }

  get brand() {
    return this.updatedItem.get('brand');
  }

  get warehouse() {
    return this.updatedItem.get('warehouse');
  }

  get group() {
    return this.updatedItem.get('group');
  }

  get unit() {
    return this.updatedItem.get('unit');
  }

  get location() {
    return this.updatedItem.get('location');
  }

  get minV() {
    return this.updatedItem.get('min');
  }

  get maxV() {
    return this.updatedItem.get('max');
  }

  get reorderPoint() {
    return this.updatedItem.get('reorderPoint');
  }

  get entryDate() {
    return this.updatedItem.get('entryDate');
  }

  get departureDate() {
    return this.updatedItem.get('departureDate');
  }

  get ultimateValue() {
    return this.updatedItem.get('ultimateValue');
  }

  getWarehouseList() {
    return this.inventoryService.getWarehouses().subscribe(
      data => {
        this.warehouseList = data;
        console.log(data);
      }
    )
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

  getItem(id: string) {
    this.inventoryService.getItem(id).subscribe(
      data => {
        this.itemDetails = data;
      },
      err => console.error(err),
      () => console.log('item loaded'),
    );
  }

  changeWarehouse(e) {
    console.log(e.value)
    this.warehouse.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeUnit(e) {
    console.log(e.value)
    this.unit.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeLocation(e) {
    console.log(e.value)
    this.location.setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeGroup(e) {
    console.log(e.value)
    this.group.setValue(e.target.value, {
      onlySelf: true
    })
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


  updateItem(id: string) {
    this.isSubmitted = true;
    if (!this.updatedItem.valid) {
      console.log('Please fill out the form before submitting >:( ');
      window.confirm('Please fill out the form before submitting >:( ');
      return false;
    } else {
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
    }

  }

}
