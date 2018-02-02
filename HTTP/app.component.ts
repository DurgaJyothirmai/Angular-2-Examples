import { Component } from '@angular/core';

import {SecondAppService} from './second-app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [SecondAppService]
})
export class AppComponent {
  details : any;
  errInfo: any;
  constructor(public apps : SecondAppService) {}
  ngOnInit() {
	  this.apps.getPersonDetails().subscribe(data => this.details = data,err => this.errInfo = err);
  }
}
