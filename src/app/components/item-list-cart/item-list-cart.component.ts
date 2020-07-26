import {Component, OnInit} from '@angular/core';
import {InventoryService} from '../../services/inventory.service';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Item} from '../../models/item.model';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-item-list-cart',
  templateUrl: './item-list-cart.component.html',
  styleUrls: ['./item-list-cart.component.css']
})
export class ItemListCartComponent implements OnInit {

  public itemList;
  public itemDetails;
  newItem:  FormGroup;
  public details;


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
    this.newItem = new  FormGroup({
      'name': new FormControl('', [ Validators.required]),
      'quantity': new FormControl('', [ Validators.required])
    });
  }
  get name() { return this.newItem.get('name'); }
  get quantity() { return this.newItem.get('quantity'); }

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

  submitItem() {
    if (this.newItem.valid) {
      console.log("Your item has been created. Thank you!");
      sessionStorage.setItem('newItem', JSON.stringify(this.newItem.value));
      this.details = sessionStorage.getItem('newItem');
      console.log(this.details);

    } else {
      console.log("Please fill out the form before submitting >:( ");
    }
  }

}
