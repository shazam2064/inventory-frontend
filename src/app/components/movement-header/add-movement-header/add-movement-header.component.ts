import {Component, Input, OnInit} from '@angular/core';
import {throwError} from 'rxjs';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-movement-header',
  templateUrl: './add-movement-header.component.html',
  styleUrls: ['./add-movement-header.component.css']
})
export class AddMovementHeaderComponent implements OnInit {

  newMovementHeader: FormGroup;
  validMessage: string = '';

  constructor(private inventoryService: InventoryService, private router: Router) {
  }

  ngOnInit() {
    this.newMovementHeader = new FormGroup({
      'dateMovHeader': new FormControl('',
        [Validators.required,]
      ),
      'hourMovHeader': new FormControl('',
        [Validators.required]
      ),
      'total': new FormControl('',
        [Validators.required]
      ),
      'docType': new FormControl('',
        [Validators.required, Validators.minLength(4)]
      ),
      'numDoc': new FormControl('',
        [Validators.required]
      ),
    });
  }

  get dateMovHeader() {
    return this.newMovementHeader.get('dateMovHeader');
  }

  get hourMovHeader() {
    return this.newMovementHeader.get('hourMovHeader');
  }

  get total() {
    return this.newMovementHeader.get('total');
  }

  get docType() {
    return this.newMovementHeader.get('docType');
  }

  get numDoc() {
    return this.newMovementHeader.get('numDoc');
  }


  submitMovementHeader() {
    if (this.newMovementHeader.valid) {
      console.log('Your movement header has been created. Thank you!');
      this.inventoryService.createMovementHeader(this.newMovementHeader.value).subscribe(
        data => {
          this.newMovementHeader.reset();
          return true;

        },
        error => {
          return throwError(error);
        }
      );
      this.router.navigate(['movement-header']);
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
//   selector: 'app-add-movement-header',
//   templateUrl: './add-movement-header.component.html',
//   styleUrls: ['./add-movement-header.component.css']
// })
// export class AddMovementHeaderComponent implements OnInit {
//
//   @Input() movementHeaderDetails = {name: ''}
//
//   constructor(private inventoryService: InventoryService, private router: Router) {}
//
//   ngOnInit() {}
//
//   submitMovementHeader(dataMovementHeader) {
//     this.inventoryService.createMovementHeader(this.movementHeaderDetails).subscribe((data: {}) => {
//       this.router.navigate(['/movement-header'])
//     })
//   }
//
//
// }
