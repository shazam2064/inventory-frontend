import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  public locationDetails;
  updatedLocation: FormGroup;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getLocation(this.route.snapshot.params.id);

    this.updatedLocation = new FormGroup({
      'aisle': new FormControl('',
        [Validators.required]
      ),
      'rack': new FormControl('',
        [Validators.required]
      ),
      'shelf': new FormControl('',
        [Validators.required]
      )
    });
  }

  get aisle() {
    return this.updatedLocation.get('aisle');
  }
  get rack() {
    return this.updatedLocation.get('rack');
  }
  get shelf() {
    return this.updatedLocation.get('shelf');
  }

  getLocation(id: string) {
    this.inventoryService.getLocation(id).subscribe(
      data => {
        this.locationDetails = data;
      },
      err => console.error(err),
      () => console.log('location loaded'),
    );
  }

  deleteLocation(id: string) {
    this.inventoryService.deleteLocation(id).subscribe(
      data => {
        this.locationDetails = data;
      },
      err => console.error(err),
      () => console.log('location loaded'),
    );
  }


  updateLocation(id:string) {
    if (this.updatedLocation.valid) {
      console.log('Your location has been updated. Thank you!');
      this.inventoryService.updateLocation(id, this.updatedLocation.value).subscribe(
        data => {
          this.updatedLocation.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['location']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
      window.confirm('Please fill out the form before submitting >:( ');
    }
  }

}
