import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movement-header',
  templateUrl: './movement-header.component.html',
  styleUrls: ['./movement-header.component.css']
})
export class MovementHeaderComponent implements OnInit {

  public movementHeaderList;
  term: string;


  constructor(private inventoryService: InventoryService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getMovementHeaderList();
  }

  getMovementHeaderList() {
    this.inventoryService.getMovementHeaders().subscribe(
      data => {
        this.movementHeaderList = data;
      },
      err => console.error(err),
      () => console.log('movement headers loaded')
    );
  }

}
