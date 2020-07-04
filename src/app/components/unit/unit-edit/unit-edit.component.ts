import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {InventoryService} from "../../../services/inventory.service";


@Component({
  selector: 'app-unit-edit',
  templateUrl: './unit-edit.component.html',
  styleUrls: ['./unit-edit.component.css']
})
export class UnitEditComponent implements OnInit {

  id = this.route.snapshot.params['id'];
  unitData: any = {};
  Unit: any = [];

  constructor(
    private inventoryService: InventoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.inventoryService.getUnit(this.id).subscribe((data: {}) => {
      this.unitData = data;
    });
  }


  deleteUnit(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.inventoryService.deleteUnit(id).subscribe(data => {
        // this.getUnitList();
        this.router.navigate(['/unit']);
      })
    }
  }

  getUnitList() {
    return this.inventoryService.getUnits().subscribe((data: {}) => {
      this.Unit = data;
    })
  }


  updateUnit() {
    if(window.confirm('Are you sure, you want to update?')){
      this.inventoryService.updateUnit(this.id, this.unitData).subscribe(data => {
        this.router.navigate(['/unit']);
      })
    }
  }

}
