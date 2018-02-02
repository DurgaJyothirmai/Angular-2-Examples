import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-route5',
  templateUrl: './route5.component.html',
  styleUrls: ['./route5.component.css']
})
export class Route5Component implements OnInit {
  private id;
  sub : any;
  constructor(public route : ActivatedRoute) { }

  ngOnInit() {
	  /* to use id in child routes - make us of activated routes */
	  this.sub = this.route.params.subscribe(params=> this.id = +params['id']);
  }
  
  ngOnDestroy() {
	    this.sub.unsubscribe();
  }

}
