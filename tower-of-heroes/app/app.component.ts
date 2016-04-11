//Currently watching https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeroService} from './hero.service';

import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';



@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
   {
     path: '/dashboard',
     name: 'Dashboard',
     component: DashboardComponent,
     useAsDefault: true
   }
])


@Component({
  selector: 'my-app',
  template:`
  <h1>{{sectionTitle}}</h1>
  <nav>
  <a [routerLink]="['Dashboard']">Dashboard</a>
  <a [routerLink]="['Heroes']">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],//allow us to use the directive <my-heroes> and routing functionnalities in template
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})

export class AppComponent {
  sectionTitle= 'HEROES OF ANGULAR 2';


}
