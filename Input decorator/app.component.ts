import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   personalInfo = {
	  name : 'Suresh Kumar',
	  designation : 'Branch Manager',
	  place : 'Haryana',
	  age: 50
  };
}
