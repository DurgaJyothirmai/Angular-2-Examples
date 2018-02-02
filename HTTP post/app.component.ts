import { Component } from '@angular/core';

import { ThirdAppService } from './third-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ThirdAppService]
})
export class AppComponent {
	personInfo : any;
	errInfo : any;
  constructor(public thirdApp : ThirdAppService) {}
  ngOnInit() {
	  this.thirdApp.getStudentDetails1().subscribe(data => this.personInfo = data,
	  err => this.errInfo = err)
  }
}
