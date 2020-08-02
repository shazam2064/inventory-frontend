import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locationList;
  term: string;
  totalElements: number = 0;
  currentLocation = null;
  currentIndex = -1;
  //here
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  setActiveItem(item, index) {
    this.currentLocation = item;
    this.currentIndex = index;
  }

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getLocationList();
    this.retrieveLocations();
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

  retrieveLocations() {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);

    this.inventoryService.getLocationsRequest(params)
      .subscribe(
        response => {
          const {locations, totalLocations} = response;
          this.locationList = locations;
          this.count = totalLocations;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )

  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveLocations();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveLocations();
  }
}
