import {Component, Input, OnInit} from '@angular/core';
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

  @Input() itemDetails = {
    name: '',
    description: '',
    brand: '',
    unit: '',
    group: '',
    location: '',
    warehouse: '',
    min: '',
    max: '',
    reorderPoint: '',
    entryDate: '',
    departureDate: '',
    ultimateValue: ''
  }

  Warehouse: any = [];
  Group: any = [];
  Unit: any = [];
  Location: any = [];

  constructor(private inventoryService: InventoryService, private router: Router) {
  }

  ngOnInit() {
    this.getWarehouses();
    this.getUnitList();
    this.getGroupList();
    this.getLocationList();
  }

  getWarehouses() {
    return this.inventoryService.getWarehouses().subscribe((data: {}) => {
      this.Warehouse = data;
      console.log(data)
      console.log(this.Warehouse)
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


  submitItem(dataItem) {
    this.inventoryService.createItem(this.itemDetails).subscribe(data => {
      this.router.navigate(['/item']);
    })
  }
}
