import { Component, OnInit } from '@angular/core';
import { InventoryService } from "../../../services/inventory.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-item-list-cart-details',
  templateUrl: './item-list-cart-details.component.html',
  styleUrls: ['./item-list-cart-details.component.css']
})
export class ItemListCartDetailsComponent implements OnInit {

  public itemDetails;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getItem(this.route.snapshot.params.id);
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

}
