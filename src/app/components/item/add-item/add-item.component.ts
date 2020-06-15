import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  newItem: FormGroup;

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {
    this.newItem = new FormGroup({
      aisle: new FormControl('', Validators.required),
      rack: new FormControl('', Validators.required),
      shelf: new FormControl('', Validators.required)
    });
  }

  submitItem() {
    if (this.newItem.valid) {
      console.log("Your item has been created. Thank you!");
      this.inventoryService.createItem(this.newItem.value).subscribe(
        data => {
          this.newItem.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['item']);
    } else {
      console.log("Please fill out the form before submitting >:( ");
    }
  }

}
