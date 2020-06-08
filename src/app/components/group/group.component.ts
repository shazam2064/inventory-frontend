import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

  public groupList

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getGroupList();
  }

  getGroupList() {
    this.inventoryService.getGroups().subscribe(
      data => {
        this.groupList = data;
      },
      err => console.error(err),
      () => console.log('groups loaded')
    );
  }

}
