import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

  public unitDetails;
  updatedUnit: FormGroup;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getUnit(this.route.snapshot.params.id);

    this.updatedUnit = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  getUnit(id: string) {
    this.inventoryService.getUnit(id).subscribe(
      data => {
        this.unitDetails = data;
      },
      err => console.error(err),
      () => console.log('unit loaded'),
    );
  }

  deleteUnit(id: string) {
    this.inventoryService.deleteUnit(id).subscribe(
      data => {
        this.unitDetails = data;
      },
      err => console.error(err),
      () => console.log('unit loaded'),
    );
  }


  updateUnit() {
    if (this.updatedUnit.valid) {
      console.log('Your unit has been updated. Thank you!');
      this.router.navigate(['unit']);
      this.inventoryService.updateUnit(this.updatedUnit.value, this.updatedUnit).subscribe(
        data => {
          this.updatedUnit.reset();
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
