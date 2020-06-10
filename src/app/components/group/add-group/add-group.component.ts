import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  newGroup: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {
    this.newGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  submitGroup() {
    if (this.newGroup.valid) {
      this.validMessage = "Your group has been created. Thank you!";
      this.router.navigate(['group']);
      this.inventoryService.createGroup(this.newGroup.value).subscribe(
        data => {
          this.newGroup.reset();
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
