import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InventoryService} from "../../services/inventory.service";


@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  public warehouseList;
  term: string;
  totalElements: number = 0;
  currentWarehouse = null;
  currentIndex = -1;
  //here
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
//here

  setActiveItem(item, index) {
    this.currentWarehouse = item;
    this.currentIndex = index;
  }

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getWarehouseList();
    this.retrieveWarehouses();
  }

  getRequestParams(searchName, page, pageSize) {
    // tslint:disable-next-line:prefer-const
    let params = {};

    if (searchName) {
      params[`name`] = searchName;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveWarehouses() {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);

    this.inventoryService.getWarehousesRequest(params)
      .subscribe(
        response => {
          const {warehouses, totalWarehouses} = response;
          this.warehouseList = warehouses;
          this.count = totalWarehouses;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )

  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveWarehouses();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveWarehouses();
  }


  getWarehouseList() {
    this.inventoryService.getWarehouses().subscribe(
      data => {
        const { warehouses } = data;
        this.warehouseList = warehouses;
      },
      err => console.error(err),
      () => console.log('warehouses loaded')
    );
  }

}
