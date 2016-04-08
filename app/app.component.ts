//Currently watching https://angular.io/docs/ts/latest/tutorial/toh-pt5.html

import {Component} from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {HeroesComponent} from './heroes.component';
import {HeroService} from './hero.service';

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])


@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>
  <a [routerLink]="['Heroes']">Heroes</a>
  <router-outlet></router-outlet>
  `,
  directives: [ROUTER_DIRECTIVES],//allow us to use the directive <my-heroes> and routing functionnalities in template
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
})

export class AppComponent {
  title: 'HEROES OF ANGULAR 2';

}
