import {Component, Input, OnInit} from '@angular/core';
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

  @Input() movementTypeDetails = {name: ''}

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {}

  submitMovementType(dataMovementType) {
    this.inventoryService.createMovementType(this.movementTypeDetails).subscribe((data: {}) => {
      this.router.navigate(['/movement-type'])
    })
  }


}
