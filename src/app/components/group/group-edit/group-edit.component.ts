import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { throwError } from "rxjs";

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
  public groupDetails;
  updatedGroup: FormGroup;
  id = this.route.snapshot.params['id'];
  groupData: any = {};
  Group: any = [];

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inventoryService.getGroup(this.id).subscribe((data: {}) => {
      this.groupData = data;
    });
    this.getGroup(this.route.snapshot.params.id);
    this.updatedGroup = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.updatedGroup = new FormGroup({
      'name' : new FormControl('',
        [Validators.required, Validators.minLength(4)]
      )
    });
  }

  get name() {
    return this.updatedGroup.get('name');
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

  getGroup(id: string) {
    this.inventoryService.getGroup(id).subscribe(
      data => {
        this.groupDetails = data;
      },
      err => console.error(err),
      () => console.log('group loaded'),
    );
  }


  updateGroup(id:string) {
    if (this.updatedGroup.valid) {
      console.log('Your group has been updated. Thank you!');
      this.inventoryService.updateGroup(id, this.updatedGroup.value).subscribe(
        data => {
          this.updatedGroup.reset();
          return true;
        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['group']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }

}


// import {Component, OnInit} from '@angular/core';
// import {InventoryService} from '../../../services/inventory.service';
// import {ActivatedRoute, Router} from '@angular/router';
//
// @Component({
//   selector: 'app-group-edit',
//   templateUrl: './group-edit.component.html',
//   styleUrls: ['./group-edit.component.css']
// })
// export class GroupEditComponent implements OnInit {
//   id = this.route.snapshot.params['id'];
//   groupData: any = {};
//   Group: any = [];
//
//   constructor(
//     private inventoryService: InventoryService,
//     private router: Router,
//     private route: ActivatedRoute
//   ) {}
//
//   ngOnInit() {
//     this.inventoryService.getGroup(this.id).subscribe((data: {}) => {
//       this.groupData = data;
//     });
//   }
//
//
//   deleteGroup(id) {
//     if (window.confirm('Are you sure, you want to delete?')){
//       this.inventoryService.deleteGroup(id).subscribe(data => {
//         // this.getGroupList();
//         this.router.navigate(['/group']);
//       })
//     }
//   }
//
//   getGroupList() {
//     return this.inventoryService.getGroups().subscribe((data: {}) => {
//       this.Group = data;
//     })
//   }
//
//
//   updateGroup() {
//     if(window.confirm('Are you sure, you want to update?')){
//       this.inventoryService.updateGroup(this.id, this.groupData).subscribe(data => {
//         this.router.navigate(['/group']);
//       })
//     }
//   }
//
// }
