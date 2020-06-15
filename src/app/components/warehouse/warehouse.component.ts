import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WarehouseService} from '../../services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  public warehouseList;

  constructor(private warehouseService: WarehouseService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getWarehouseList();
  }

  getWarehouseList() {
    this.warehouseService.getWarehouses().subscribe(
      data => {
        this.warehouseList = data;
      },
      err => console.error(err),
      () => console.log('warehouses loaded')
    );
  }

}
