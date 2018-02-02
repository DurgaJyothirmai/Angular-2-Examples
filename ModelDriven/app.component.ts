import { Component } from '@angular/core';
import { FormGroup, FormControl}  from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm : FormGroup;
  constructor() {
	  this.myForm = new FormGroup({
		  'fname': new FormControl(),
		  'lname': new FormControl(),
	  });
  }
  
  save() {
	  console.log(this.myForm.value);
  }
}
