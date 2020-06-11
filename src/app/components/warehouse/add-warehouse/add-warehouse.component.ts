import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {throwError} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  newWarehouse: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {
    this.newWarehouse = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  submitWarehouse() {
    if (this.newWarehouse.valid) {
      console.log('Your warehouse has been created. Thank you!');
      this.router.navigate(['warehouse']);
      this.inventoryService.createWarehouse(this.newWarehouse.value).subscribe(
        data => {
          this.newWarehouse.reset();
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
