import { Component } from '@angular/core';

import {Http,Response} from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public bookDetails;
 constructor(public http: Http) { }
  
  ngOnInit() {
	  this.getBookDetails();
  }
  
  getBookDetails() {
	  return this.http.get('https://www.w3schools.com/angular/customers.php').map((res:Response) => res).subscribe(data=> this.bookDetails = data,
	                            err => console.log(err),
								() => console.log('on completed'));
  }
}
