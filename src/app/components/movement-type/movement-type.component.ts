import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movement-type',
  templateUrl: './movement-type.component.html',
  styleUrls: ['./movement-type.component.css']
})
export class MovementTypeComponent implements OnInit {

  public movementTypeList;

  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovementTypeList();
  }

  getMovementTypeList() {
    this.inventoryService.getMovementTypes().subscribe(
      data => {
        this.movementTypeList = data;
      },
      err => console.error(err),
      () => console.log('movement types loaded')
    );
  }

}
