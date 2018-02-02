import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-new-app',
  templateUrl: './new-app.component.html',
  styleUrls: ['./new-app.component.css']
})
export class NewAppComponent implements OnInit {
  @Input() personName;
  @Input() personDesignation;
  @Input() Location;
  @Input() Age : string;
  constructor() { }

  ngOnInit() {
  }

}
