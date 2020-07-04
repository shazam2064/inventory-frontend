import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-group-edit',
  templateUrl: './group-edit.component.html',
  styleUrls: ['./group-edit.component.css']
})
export class GroupEditComponent implements OnInit {
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
  }


  deleteGroup(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.inventoryService.deleteGroup(id).subscribe(data => {
        // this.getGroupList();
        this.router.navigate(['/group']);
      })
    }
  }

  getGroupList() {
    return this.inventoryService.getGroups().subscribe((data: {}) => {
      this.Group = data;
    })
  }


  updateGroup() {
    if(window.confirm('Are you sure, you want to update?')){
      this.inventoryService.updateGroup(this.id, this.groupData).subscribe(data => {
        this.router.navigate(['/group']);
      })
    }
  }

}
