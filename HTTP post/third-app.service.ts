import { Injectable } from '@angular/core';

import { Http , Response , Headers} from '@angular/http';

import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

@Injectable()
export class ThirdAppService {

  constructor(public http: Http) { }
  
  /* getStudentDetails() {

	  var newHeader = new Headers({
		  'Content-Type':'application/json',
		   'X-Requested-By':'Angular 2',
		   });
	  return this.http.get('https://www.w3schools.com/angular/customers.php',{headers : newHeader}).map((res:Response)=>res);
  } */


getStudentDetails1() {

	  var newHeader = new Headers({
		  'Content-Type':'application/json',
		   'X-Requested-By':'Angular 2',
		   });
		  
		  var head1 = new Headers();
		  head1.append('Content-Type','application/json');
		   
	  return this.http.post('https://jsonplaceholder.typicode.com/posts',"jkj",{headers : newHeader}).map((res:Response)=>res);
  }
}
