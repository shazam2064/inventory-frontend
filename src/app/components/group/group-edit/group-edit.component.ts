import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {

  public groupDetails;
  updatedGroup: FormGroup;

  constructor(private inventoryService: InventoryService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getGroup(this.route.snapshot.params.id);
    this.updatedGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  getGroup(id: string) {
    this.inventoryService.getGroup(id).subscribe(
      data => {
        this.groupDetails = data;
      },
      err => console.error(err),
      () => console.log('group loaded'),
    );
  }

  deleteGroup(id: string) {
    this.inventoryService.deleteGroup(id).subscribe(
      data => {
        this.groupDetails = data;
      },
      err => console.error(err),
      () => console.log('group loaded'),
    );
  }


  updateGroup() {
    if (this.updatedGroup.valid) {
      console.log('Your group has been updated. Thank you!');
      this.router.navigate(['group']);
      this.inventoryService.updateGroup(this.updatedGroup.value, this.updatedGroup).subscribe(
        data => {
          this.updatedGroup.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}
