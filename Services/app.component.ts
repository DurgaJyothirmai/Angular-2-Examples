import { Component } from '@angular/core';

import {PersonalInfoService} from './personal-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PersonalInfoService]
})
export class AppComponent {
   personName : string;
   constructor( public details : PersonalInfoService ) {}
   ngOnInit() {
	   this.personName = this.details.getPersonDetails();
   }
}
