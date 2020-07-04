import {Component, Input, OnInit} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  @Input() warehouseDetails = {name: ''}

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {}

  submitWarehouse(dataWarehouse) {
    this.inventoryService.createWarehouse(this.warehouseDetails).subscribe((data: {}) => {
      this.router.navigate(['/warehouse'])
    })
  }

}
