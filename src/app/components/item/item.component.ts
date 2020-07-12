import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';
import {Item} from "../../models/item.model";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public itemList;
  public itemAutomatically;
  public warehouseData;
  public groupData;
  public locationData;
  public unitData;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.itemAutomatically = new Item(
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
    this.getItemList();
    this.getItemAutomatically();
  }

  getItemList() {
    this.inventoryService.getItems().subscribe(
      data => {
        this.itemList = data;
      },
      err => console.error(err),
      () => console.log('items loaded')
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


  getItemAutomatically() {
    this.inventoryService.getItemAuto().subscribe(
      data => {
        this.itemAutomatically = data;
      },
      err => console.error(err),
      () => console.log('Auto item loaded')
    );
  }

}
