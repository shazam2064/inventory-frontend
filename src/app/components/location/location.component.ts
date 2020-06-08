import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  public locationList

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getLocationList();
  }

  getLocationList() {
    this.inventoryService.getLocations().subscribe(
      data => {
        this.locationList = data;
      },
      err => console.error(err),
      () => console.log('locations loaded')
    );
  }
}
