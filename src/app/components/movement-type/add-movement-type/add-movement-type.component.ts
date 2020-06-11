import { Component, OnInit } from '@angular/core';
import {throwError} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-movement-type',
  templateUrl: './add-movement-type.component.html',
  styleUrls: ['./add-movement-type.component.css']
})
export class AddMovementTypeComponent implements OnInit {

  newMovementType: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {

    this.newMovementType = new FormGroup({
      name: new FormControl('', Validators.required)
    });

  }

  submitMovementType() {
    if (this.newMovementType.valid) {
      console.log("Your Movement Type has been created. Thank you!");
      this.router.navigate(['movement-type']);
      this.inventoryService.createMovementType(this.newMovementType.value).subscribe(
        data => {
          this.newMovementType.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      )
    } else {
      console.log("Please fill out the form before submitting >:( ");
    }
  }

}
