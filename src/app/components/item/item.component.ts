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
  term: string;
  totalElements: number = 0;
  currentItem = null;
  currentIndex = -1;
  //here
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
//here

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.retrieveItems();
    // this.getItemList();
    // this.loadItems({page: "4", size: "2"});
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
//here
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

  retrieveItems() {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);

    this.inventoryService.getItemsRequest(params)
      .subscribe(
        response => {
          const {items, totalItems} = response;
          this.itemList = items;
          this.count = totalItems;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )

  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveItems();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveItems();
  }
//here

  setActiveItem(item, index) {
    this.currentItem = item;
    this.currentIndex = index;
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
