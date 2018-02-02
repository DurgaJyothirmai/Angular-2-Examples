import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-firstcomp',
  templateUrl: './firstcomp.component.html',
  styleUrls: ['./firstcomp.component.css']
})
export class FirstcompComponent implements OnInit {
 
  @Output() information = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  employeeInfo() {
	  var empDetails = [
	  {
		  "Name" : "Phani",
		  "Company" : "TCS",
		  "Location" : "Mumbai"
	  },
	  {
		  "Name" : "Roshan",
		  "Company" : "TCS",
		  "Location" : "Chennai"
	  },
	  {
		  "Name" : "Kumar",
		  "Company" : "Wipro",
		  "Location" : "Lucknow"
	  },
	  {
		  "Name" : "Radha",
		  "Company" : "Infosys",
		  "Location" : "Delhi"
	  }] 
	  
	  this.information.emit(empDetails);
  }

}
