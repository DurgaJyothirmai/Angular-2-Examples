import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route4Component } from './route4/route4.component';
import { Route5Component } from './route5/route5.component';
import { Route6Component } from './route6/route6.component';
import { Route7Component } from './route7/route7.component';
import {routers} from './app.route';

@NgModule({
  declarations: [
    AppComponent,
    Route1Component,
    Route2Component,
    Route3Component,
    Route4Component,
    Route5Component,
    Route6Component,
    Route7Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	routers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
