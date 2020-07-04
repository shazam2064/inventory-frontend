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

  id = this.route.snapshot.params['id'];
  locationData: any = {};
  Location: any = [];

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inventoryService.getLocation(this.id).subscribe((data: {}) => {
      this.locationData = data;
    });
  }


  deleteLocation(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.inventoryService.deleteLocation(id).subscribe(data => {
        // this.getLocationList();
        this.router.navigate(['/location']);
      })
    }
  }

  getLocationList() {
    return this.inventoryService.getLocations().subscribe((data: {}) => {
      this.Location = data;
    })
  }


  updateLocation() {
    if(window.confirm('Are you sure, you want to update?')){
      this.inventoryService.updateLocation(this.id, this.locationData).subscribe(data => {
        this.router.navigate(['/location']);
      })
    }
  }

}

