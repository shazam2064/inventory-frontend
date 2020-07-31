import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../../services/inventory.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models/item.model';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-item-list-cart',
  templateUrl: './item-list-cart.component.html',
  styleUrls: ['./item-list-cart.component.css']
})
export class ItemListCartComponent implements OnInit {

  public itemList;
  public itemDetails;
  newItem: FormGroup;
  public itemName;
  public itemQuantity;
  currentItem = null;
  currentIndex = -1;

  constructor(private inventoryService: InventoryService, private router: Router) {
  }

  ngOnInit() {
    this.getItemList();
    this.itemDetails = new Item(
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      1,
      3,
      2,
      new Date(),
      new Date(),
      4
    );
    this.newItem = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'quantity': new FormControl('', [Validators.required])
    });
  }

  get name() {
    return this.newItem.get('name');
  }

  get quantity() {
    return this.newItem.get('quantity');
  }

  setActiveItem(item, index) {
    this.currentItem = item;
    this.currentIndex = index;
  }

  getItemList() {
    this.inventoryService.getItems().subscribe(
      data => {
        this.itemList = data;
        console.log('item: ' + data);
      },
      err => console.error(err),
      () => console.log('items loaded')
    );
  }

  getItem(id: string) {
    this.inventoryService.getItem(id).subscribe(
      data => {
        this.itemDetails = data;
      },
      err => console.error(err),
      () => console.log('Item loaded'),
    );
  }

  submitItem() {
    if (this.newItem.valid) {
      console.log("Your item has been created. Thank you!");
      sessionStorage.setItem('newItem', this.name.value);
      this.itemName = sessionStorage.getItem('newItem');
      sessionStorage.setItem('newQuantity', this.quantity.value);
      this.itemQuantity = sessionStorage.getItem('newQuantity');

    } else {
      console.log("Please fill out the form before submitting >:( ");
    }
  }

}
