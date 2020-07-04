import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../../services/inventory.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-movement-type-edit',
  templateUrl: './movement-type-edit.component.html',
  styleUrls: ['./movement-type-edit.component.css']
})
export class MovementTypeEditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  movementTypeData: any = {};
  MovementType: any = [];

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.inventoryService.getMovementType(this.id).subscribe((data: {}) => {
      this.movementTypeData = data;
    });
  }


  deleteMovementType(id) {
    if (window.confirm('Are you sure, you want to delete?')) {
      this.inventoryService.deleteMovementType(id).subscribe(data => {
        // this.getMovementTypeList();
        this.router.navigate(['/movement-type']);
      })
    }
  }

  getMovementTypeList() {
    return this.inventoryService.getMovementTypes().subscribe((data: {}) => {
      this.MovementType = data;
    })
  }

  updateMovementType() {
    if(window.confirm('Are you sure, you want to update?')){
      this.inventoryService.updateMovementType(this.id, this.movementTypeData).subscribe(data => {
        this.router.navigate(['/movement-type']);
      })
    }
  }
}
