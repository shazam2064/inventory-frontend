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
  newItems: string;
  nameItem: '';
  public itemName;
  public itemQuantity;
  currentItem = null;
  currentIndex = -1;
  Items = []

  constructor(private inventoryService: InventoryService) {
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
        const { items } = data;
        this.itemList = items;
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

  showToConsole() {
    console.log('This element was clicked');
  }

  submitItem() {
    if (this.newItem.valid) {
      console.log("Your item has been created. Thank you!");
      sessionStorage.setItem('ItemName', this.name.value);
      this.itemName = sessionStorage.getItem('newItem');
      sessionStorage.setItem('Quantity', this.quantity.value);
      this.itemQuantity = sessionStorage.getItem('newQuantity');
      sessionStorage.setItem('ItemList', JSON.stringify( this.newItem.value));
      this.newItems = sessionStorage.getItem('Items');


    } else {
      console.log("Please fill out the form before submitting >:( ");
      window.confirm('Please fill out the form before submitting >:( ');
    }
  }

}
