import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from "./authors.component";
import {BindingComponent} from "./binding-examples.component";
import {StarComponent} from "./star.component";

/**
# Property binding : 3 possible syntaxes
# <img src="{{imageUrl}}"/>
# <img [src]="imageUrl"/>
# <img bind-src="imageUrl"/>
**/

@Component({
  selector: 'my-app',
  directives:[CoursesComponent,AuthorsComponent,BindingComponent,StarComponent],
  styles:[`
    .active{
      background-color:#123;
      color:#efefef;
    }
  `],
  template:`
    <h1>{{title}}</h1>
    <binding-component></binding-component>
    <star-component></star-component>
    <courses></courses>
    <authors></authors>
  `
})
export class AppComponent {
  title= 'My First Angular 2 App !';
}