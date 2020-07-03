import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';
import {InventoryService} from "../../../services/inventory.service";


@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  warehouseData: any = {};
  Warehouse: any = [];
  public warehouseDetails;

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inventoryService.getWarehouse(this.id).subscribe((data: {}) => {
      this.warehouseData = data;
    });
  }


  deleteWarehouse(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.inventoryService.deleteWarehouse(id).subscribe(data => {
        // this.getWarehouseList();
        this.router.navigate(['/warehouse']);
      })
    }
  }

  getWarehouseList() {
    return this.inventoryService.getWarehouses().subscribe((data: {}) => {
      this.Warehouse = data;
    })
  }


  updateWarehouse() {
    if(window.confirm('Are you sure, you want to update?')){
      this.inventoryService.updateWarehouse(this.id, this.warehouseData).subscribe(data => {
        this.router.navigate(['/warehouse']);
      })
    }
  }

}
