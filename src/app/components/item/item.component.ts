import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { ActivatedRoute } from '@angular/router';
import { Item } from "../../models/item.model";

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
  term: string;
  totalElements: number = 0;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.getItemList();
    this.loadItems({page: "4", size: "2"})
    this.getItemAutomatically();
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

  getLocationId(id: string) {
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

  loadItems(request) {
    this.inventoryService.getItemsRequest(request)
      .subscribe(data => {
        this.itemList = data;
        this.totalElements = data['totalElements'];
      }, error => {
        console.error(error);
      })

  }
}
