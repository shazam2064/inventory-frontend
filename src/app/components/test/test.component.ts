// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, Validators } from "@angular/forms";
//
// @Component({
//   selector: 'app-test',
//   templateUrl: './test.component.html',
//   styleUrls: ['./test.component.css']
// })
// export class TestComponent {
//
//   isSubmitted = false;
//
//   // City Names
//   City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan']
//
//   constructor(public fb: FormBuilder) { }
//
//   /*########### Form ###########*/
//   registrationForm = this.fb.group({
//     cityName: ['', [Validators.required]]
//   })
//
//
//   // Choose city using select dropdown
//   changeCity(e) {
//     console.log(e.value)
//     this.cityName.setValue(e.target.value, {
//       onlySelf: true
//     })
//   }
//
//   // Getter method to access formcontrols
//   get cityName() {
//     return this.registrationForm.get('cityName');
//   }
//
//   /*########### Template Driven Form ###########*/
//   onSubmit() {
//     this.isSubmitted = true;
//     if (!this.registrationForm.valid) {
//       return false;
//     } else {
//       alert(JSON.stringify(this.registrationForm.value))
//     }
//
//   }
//
// }


import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { InventoryService } from "../../services/inventory.service";
import { Router } from "@angular/router";
import { throwError } from "rxjs";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {

  newItem: FormGroup;
  public warehouseList;
  public unitList;
  public groupList;
  public locationList;
  isSubmitted = false;

  constructor(private inventoryService: InventoryService, private router: Router, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getWarehouseList();
    this.getUnitList();
    this.getGroupList();
    this.getLocationList();
    this.newItem = new FormGroup({
      'name': new FormControl('',
        [Validators.required, Validators.minLength(4)]
      ),
      'description': new FormControl('',
        [Validators.required, Validators.minLength(10)]
      ),
      'brand': new FormControl('',
        [Validators.required, Validators.minLength(2)]
      ),
      'unit': new FormControl('',
        [Validators.required]
      ),
      'group': new FormControl('',
        [Validators.required]
      ),
      'location': new FormControl('',
        [Validators.required]
      ),
      'warehouse': new FormControl('',
        [Validators.required]
      ),
      'min': new FormControl('',
        [Validators.required]
      ),
      'max': new FormControl('',
        [Validators.required]
      ),
      'reorderPoint': new FormControl('',
        [Validators.required]
      ),
      'entryDate': new FormControl('',
        [Validators.required]
      ),
      'departureDate': new FormControl('',
        [Validators.required]
      ),
      'ultimateValue': new FormControl('',
        [Validators.required]
      )
    });
  }

  get name() {
    return this.newItem.get('name');
  }

  get description() {
    return this.newItem.get('description');
  }

  get brand() {
    return this.newItem.get('brand');
  }

  get warehouse() {
    return this.newItem.get('warehouse');
  }

  get group() {
    return this.newItem.get('group');
  }

  get unit() {
    return this.newItem.get('unit');
  }

  get location() {
    return this.newItem.get('location');
  }

  get minV() {
    return this.newItem.get('min');
  }

  get maxV() {
    return this.newItem.get('max');
  }

  get reorderPoint() {
    return this.newItem.get('reorderPoint');
  }

  get entryDate() {
    return this.newItem.get('entryDate');
  }

  get departureDate() {
    return this.newItem.get('departureDate');
  }

  get ultimateValue() {
    return this.newItem.get('ultimateValue');
  }

  changeWarehouse(e) {
    console.log('e value ' + e.value)
    this.warehouse.setValue(e.target.value, {
      onlySelf: true
    })
  }

  getWarehouseList() {
    return this.inventoryService.getWarehouses().subscribe(
      data => {
        this.warehouseList = data;
        console.log(data);
      }
    )
  }

  getUnitList() {
    this.inventoryService.getUnits().subscribe(
      data => {
        this.unitList = data;
        console.log('unit: ' + data);
      },
      err => console.error(err),
      () => console.log('units loaded')
    );
  }

  getGroupList() {
    this.inventoryService.getGroups().subscribe(
      data => {
        this.groupList = data;
        console.log('group: ' + data);
      },
      err => console.error(err),
      () => console.log('groups loaded')
    );
  }


  getLocationList() {
    this.inventoryService.getLocations().subscribe(
      data => {
        this.locationList = data;
        console.log('location: ' + data);
      },
      err => console.error(err),
      () => console.log('locations loaded')
    );
  }

  submitItem() {
    this.isSubmitted = true;
    if (!this.newItem.valid) {
      return false;
    } else {
      alert(JSON.stringify(this.newItem.value))
    }
  }

  submitItem2() {
    this.isSubmitted = true;
    if (!this.newItem.valid) {
      return false;
    } else {
      console.log("Your item has been created. Thank you!");
      this.router.navigate(['item']);
    }
  }


}


