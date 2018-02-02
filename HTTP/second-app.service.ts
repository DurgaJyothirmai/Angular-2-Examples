import { Injectable } from '@angular/core';

import {Http,Response,Headers} from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class SecondAppService {

  constructor(public http:Http) { }
 
  getPersonDetails() {
	  var myHeader = new Headers();
      myHeader.append('Content-Type', 'application/json');
	  return this.http.get('https://www.w3schools.com/angular/customers.php',{headers:myHeader}).map((res:Response)=>res);
  }
}
