import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  public unitList;
  term: string;
  totalElements: number = 0;
  currentUnit = null;
  currentIndex = -1;
  //here
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
//here

  setActiveItem(item, index) {
    this.currentUnit = item;
    this.currentIndex = index;
  }


  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUnitList();
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

  retrieveUnits() {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);

    this.inventoryService.getItemsRequest(params)
      .subscribe(
        response => {
          const {units, totalUnits} = response;
          this.unitList = units;
          this.count = totalUnits;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )

  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveUnits();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveUnits();
  }

  getUnitList() {
    this.inventoryService.getUnits().subscribe(
      data => {
        const { units } = data;
        this.unitList = units;
      },
      err => console.error(err),
      () => console.log('units loaded')
    );
  }

}
