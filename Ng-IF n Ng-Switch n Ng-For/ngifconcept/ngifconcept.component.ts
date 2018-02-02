import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngifconcept',
  templateUrl: './ngifconcept.component.html',
  styleUrls: ['./ngifconcept.component.css']
})
export class NgifconceptComponent implements OnInit {
	//creating array of objects to use ngfor and ngif
	studentDetails = [
		{
			Name :"Pranav",
			Grade : "A",
			Salary : 35000
		},
		{
			Name : "Sudha",
			Grade: "B",
			Salary: 15000
		},
		{
			Name : "Radha",
			Grade: "A",
			Salary: 25000
		},
		{
			Name: "Mohith",
			Grade : "B",
			Salary : 10000
		}
	];
	
	personalInfo = {
		Details : [{
			Company : "TCS",
			Place : "Chennai"
		},
		{
			Company : "Infosys",
			Place : "Chennai"
		},
		{
			Company : "TCS",
			Place : "Hyderabad"
		}
		]
		
	}

  constructor() { }

  ngOnInit() {
	  
  }

}
