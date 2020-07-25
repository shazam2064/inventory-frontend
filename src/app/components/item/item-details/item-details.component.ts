import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';
import {Item} from "../../../models/item.model";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  public itemList;
  public itemDetails;
  term: string;
  totalElements: number = 0;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadItems({page: "4", size: "2"})
    this.itemDetails = new Item(
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
    this.getItem(this.route.snapshot.params.id);
    // this.getItemList();
  }

  reload() {
    setTimeout(() => {
        window.location.reload()
      },
      300);
  }

  toggle(event) {
    console.log(event.target.id);
  }

  getItem(id: string) {
    this.inventoryService.getItem(id).subscribe(
      data => {
        this.itemDetails = data;
      },
      err => console.error(err),
      () => console.log('Item loaded'),
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
