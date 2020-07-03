import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {InventoryService} from '../../../services/inventory.service';
import {Router} from '@angular/router';
import {throwError} from 'rxjs';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent implements OnInit {

  @Input() groupDetails = {name: ''}

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit() {}

  submitGroup(dataGroup) {
    this.inventoryService.createGroup(this.groupDetails).subscribe((data: {}) => {
      this.router.navigate(['/group'])
    })
  }

}
