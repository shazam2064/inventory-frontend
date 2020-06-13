import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-add-unit',
  templateUrl: './add-unit.component.html',
  styleUrls: ['./add-unit.component.css']
})
export class AddUnitComponent implements OnInit {

  newUnit: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {

    this.newUnit = new FormGroup({
      name: new FormControl('', Validators.required)
    });

  }

  submitUnit() {
    if (this.newUnit.valid) {
      console.log("Your unit has been created. Thank you!");
      this.inventoryService.createUnit(this.newUnit.value).subscribe(
        data => {
          this.newUnit.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['unit']);
    } else {
      console.log("Please fill out the form before submitting >:( ");
    }
  }

}
