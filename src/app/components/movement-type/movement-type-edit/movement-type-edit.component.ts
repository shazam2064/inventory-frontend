import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-movement-type-edit',
  templateUrl: './movement-type-edit.component.html',
  styleUrls: ['./movement-type-edit.component.css']
})
export class MovementTypeEditComponent implements OnInit {

  public movementTypeDetails;
  updatedMovementType: FormGroup;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getMovementType(this.route.snapshot.params.id);

    this.updatedMovementType = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  getMovementType(id: string) {
    this.inventoryService.getMovementType(id).subscribe(
      data => {
        this.movementTypeDetails = data;
      },
      err => console.error(err),
      () => console.log('movement type loaded'),
    );
  }

  deleteMovementType(id: string) {
    this.inventoryService.deleteMovementType(id).subscribe(
      data => {
        this.movementTypeDetails = data;
      },
      err => console.error(err),
      () => console.log('movement type loaded'),
    );
  }


  updateMovementType(id: string) {
    if (this.updatedMovementType.valid) {
      console.log('Your movement type has been updated. Thank you!');
      this.inventoryService.updateMovementType(id, this.updatedMovementType.value).subscribe(
        data => {
          this.updatedMovementType.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['movement-type']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}
