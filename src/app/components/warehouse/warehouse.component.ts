import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  public warehouseList;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getWarehouseList();
  }


  getWarehouseList() {
    this.inventoryService.getWarehouses().subscribe(
      data => {
        this.warehouseList = data;
      },
      err => console.error(err),
      () => console.log('warehouses loaded')
    );
  }

}
