import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public itemList;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.getItem(this.route.snapshot.params.id);
    this.getItemList()
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

  getItem(id:string) {
    this.inventoryService.getItem(id).subscribe(
      data => {
        this.itemList = data;
      },
      err => console.error(err),
      () => console.log('item loaded')
    );
  }

}
