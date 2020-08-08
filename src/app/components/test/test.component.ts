import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent  {
  myForm = new FormGroup({
    'firstName':new FormControl('',Validators.required)

  })
  //getter method
  get firstName(){
     return this.myForm.get('firstName');
  }

}





