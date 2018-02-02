import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-model2',
  templateUrl: './model2.component.html',
  styleUrls: ['./model2.component.css']
})
export class Model2Component implements OnInit {
  myForm: FormGroup; 
  constructor(public fb : FormBuilder) {
     this.myForm = this.fb.group({
		 'f_name': ['',[Validators.required,Validators.minLength(5)]],
		 'l_name': ['',Validators.required],
		 'gender': ['',Validators.required],
		 'comp_any':['',Validators.required]
	 })
  }

  ngOnInit() {
  }
  getPersonalDetails() {
	  console.log(this.myForm.value);
  }

}
