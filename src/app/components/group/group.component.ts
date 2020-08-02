import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {InventoryService} from "../../services/inventory.service";


@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  public groupList;
  term: string;
  totalElements: number = 0;
  currentGroup = null;
  currentIndex = -1;
  //here
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];
//here

  setActiveItem(item, index) {
    this.currentGroup = item;
    this.currentIndex = index;
  }

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getGroupList();
    this.retrieveGroups();
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

  retrieveGroups() {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);

    this.inventoryService.getGroupsRequest(params)
      .subscribe(
        response => {
          const {groups, totalGroups} = response;
          this.groupList = groups;
          this.count = totalGroups;
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )

  }

  handlePageChange(event) {
    this.page = event;
    this.retrieveGroups();
  }

  handlePageSizeChange(event) {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveGroups();
  }


  getGroupList() {
    this.inventoryService.getGroups().subscribe(
      data => {
        const { groups } = data;
        this.groupList = groups;
      },
      err => console.error(err),
      () => console.log('groups loaded')
    );
  }

}
