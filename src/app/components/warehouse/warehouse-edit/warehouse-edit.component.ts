import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';
import {WarehouseService} from '../../../services/warehouse.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  public warehouseDetails;
  updatedWarehouse: FormGroup;

  constructor(private inventoryService: WarehouseService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getWarehouse(this.route.snapshot.params.id);
    this.updatedWarehouse = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }


  deleteWarehouse(id: string) {
    this.inventoryService.deleteWarehouse(id).subscribe(
      data => {
        this.warehouseDetails = data;
      },
      err => console.error(err),
      () => console.log('warehouse loaded'),
    );
    this.router.navigate(['warehouse']);
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


  updateWarehouse(id:string) {
    if (this.updatedWarehouse.valid) {
      console.log('Your warehouse has been updated. Thank you!');
      this.inventoryService.updateWarehouse(id, this.updatedWarehouse.value).subscribe(
        data => {
          this.updatedWarehouse.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['warehouse']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}
