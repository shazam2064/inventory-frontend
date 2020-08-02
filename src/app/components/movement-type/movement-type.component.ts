import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InventoryService} from "../../services/inventory.service";


@Component({
  selector: 'app-movement-type',
  templateUrl: './movement-type.component.html',
  styleUrls: ['./movement-type.component.css']
})
export class MovementTypeComponent implements OnInit {

  public movementTypeList;
  term: string;
  totalElements: number = 0;
  currentMovementType = null;
  currentIndex = -1;
  //here
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
//here

  setActiveItem(item, index) {
    this.currentMovementType = item;
    this.currentIndex = index;
  }

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getMovementTypeList();
    this.retrieveMovementTypes();
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

  retrieveMovementTypes() {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);

    this.inventoryService.getMovementTypesRequest(params)
      .subscribe(
        response => {
          const {movementTypes, totalMovementTypes} = response;
          this.movementTypeList = movementTypes;
          this.count = totalMovementTypes;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )

  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveMovementTypes();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveMovementTypes();
  }


  getMovementTypeList() {
    this.inventoryService.getMovementTypes().subscribe(
      data => {
        const { movementTypes } = data;
        this.movementTypeList = movementTypes;
      },
      err => console.error(err),
      () => console.log('movement types loaded')
    );
  }

}
