import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  public warehouseDetails;
  updatedWarehouse: FormGroup;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {

    this.getWarehouse(this.route.snapshot.params.id);

    this.updatedWarehouse = new FormGroup({
      name: new FormControl('', Validators.required)
    });

  }


  getWarehouse(id: string) {
    this.inventoryService.getWarehouse(id).subscribe(
      data => {
        this.warehouseDetails = data;
      },
      err => console.error(err),
      () => console.log('warehouse loaded'),
    );
  }

  deleteWarehouse(id: string) {
    this.inventoryService.deleteWarehouse(id).subscribe(
      data => {
        this.warehouseDetails = data;
      },
      err => console.error(err),
      () => console.log('warehouse loaded'),
    );
  }


  updateWarehouse() {
    if (this.updatedWarehouse.valid) {
      console.log('Your warehouse has been updated. Thank you!');
      // this.router.navigate(['warehouse']);
      this.inventoryService.updateWarehouse(this.updatedWarehouse.value).subscribe(
        data => {
          this.updatedWarehouse.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}
