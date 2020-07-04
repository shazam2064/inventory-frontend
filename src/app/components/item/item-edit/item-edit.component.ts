import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  itemData: any = {};
  Item: any = [];
  Warehouse: any = [];
  Group: any = [];
  Unit: any = [];
  Location: any = [];
  updatedItem: FormGroup;
  public warehouseList;
  public unitList;
  public groupList;
  public locationList;
  public itemDetails;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.inventoryService.getItem(this.id).subscribe((data: {}) => {
      this.itemData = data;
    });

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
    return this.inventoryService.getWarehouses().subscribe((data: {}) => {
      this.Warehouse = data;
    })
  }

  getUnitList() {
    return this.inventoryService.getUnits().subscribe((data: {}) => {
      this.Unit = data;
    })
  }

  getGroupList() {
    return this.inventoryService.getGroups().subscribe((data: {}) => {
      this.Group = data;
    })
  }


  getLocationList() {
    return this.inventoryService.getLocations().subscribe((data: {}) => {
      this.Location = data;
    })
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

  deleteItem(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.inventoryService.deleteItem(id).subscribe(data => {
        // this.getItemList();
        this.router.navigate(['/item']);
      })
    }
  }

  getItemList() {
    return this.inventoryService.getItems().subscribe((data: {}) => {
      this.Item = data;
    })
  }


  updateItem() {
    if(window.confirm('Are you sure, you want to update?')){
      this.inventoryService.updateItem(this.id, this.itemData).subscribe(data => {
        this.router.navigate(['/item']);
      })
    }
  }

}


