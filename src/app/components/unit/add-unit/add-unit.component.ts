import {Component, Input, OnInit} from '@angular/core';
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

  @Input() unitDetails = { name: ''}

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {
  }

  submitUnit(dataUnit) {
    this.inventoryService.createUnit(this.unitDetails).subscribe((data: {}) => {
      this.router.navigate(['/unit'])
    })
  }

}
