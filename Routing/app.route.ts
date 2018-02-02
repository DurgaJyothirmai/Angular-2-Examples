import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { Route3Component } from './route3/route3.component';
import { Route4Component } from './route4/route4.component';
import { Route5Component } from './route5/route5.component';
import { Route6Component } from './route6/route6.component';
import { Route7Component } from './route7/route7.component';

export const route : Routes = [
{'path':'','redirectTo' : 'Home', 'pathMatch':'full'},
{'path': 'Home','component': Route1Component },
{'path' : 'SignIn','component' : Route2Component},
{'path' : 'ContactUs','component': Route3Component },
{'path' : 'Feedback','component': Route4Component },
{'path' : 'Product/:id','component' : Route5Component,
 'children' : [
     {'path':'','redirectTo' : 'overview', 'pathMatch':'full'},
	 {'path': 'overview', 'component' : Route6Component},
	 {'path' : 'specs','component': Route7Component},
 ],
}
];

export const routers: ModuleWithProviders = RouterModule.forRoot(route);