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
      this.validMessage = "Your unit has been created. Thank you!";
      this.router.navigate(['unit']);
      this.inventoryService.createUnit(this.newUnit.value).subscribe(
        data => {
          this.newUnit.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the form before submitting >:( ";
    }
  }

}
