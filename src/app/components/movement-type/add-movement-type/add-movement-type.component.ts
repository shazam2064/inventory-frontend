import {Component, Input, OnInit} from '@angular/core';
import {throwError} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-movement-type',
  templateUrl: './add-movement-type.component.html',
  styleUrls: ['./add-movement-type.component.css']
})
export class AddMovementTypeComponent implements OnInit {

  newMovementType: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {
    this.newMovementType = new FormGroup({
      'name' : new FormControl('',
        [ Validators.required, Validators.minLength(4)]
      )
    });
  }
  get name() { return this.newMovementType.get('name'); }


  submitMovementType() {
    if (this.newMovementType.valid) {
      console.log('Your movement type has been created. Thank you!');
      this.inventoryService.createMovementType(this.newMovementType.value).subscribe(
        data => {
          this.newMovementType.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['movement-type']);
    } else {
      console.log('Please fill out the form before submitting >:( ');
    }
  }


}


// import {Component, Input, OnInit} from '@angular/core';
// import {throwError} from 'rxjs';
// import {FormControl, FormGroup, Validators} from '@angular/forms';
// import {InventoryService} from '../../../services/inventory.service';
// import {Router} from '@angular/router';
//
// @Component({
//   selector: 'app-add-movement-type',
//   templateUrl: './add-movement-type.component.html',
//   styleUrls: ['./add-movement-type.component.css']
// })
// export class AddMovementTypeComponent implements OnInit {
//
//   @Input() movementTypeDetails = {name: ''}
//
//   constructor(private inventoryService: InventoryService, private router: Router) {}
//
//   ngOnInit() {}
//
//   submitMovementType(dataMovementType) {
//     this.inventoryService.createMovementType(this.movementTypeDetails).subscribe((data: {}) => {
//       this.router.navigate(['/movement-type'])
//     })
//   }
//
//
// }
