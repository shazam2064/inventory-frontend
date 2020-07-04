import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  @Input() locationDetails = {aisle: '', rack: '', shelf: ''}

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {
  }

  submitLocation(dataLocation) {
    this.inventoryService.createLocation(this.locationDetails).subscribe((data: {}) => {
      this.router.navigate(['/location'])
    })
  }

}
