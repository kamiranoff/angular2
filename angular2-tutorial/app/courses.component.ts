import{Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from "./auto-grow.directive";

@Component({
  selector:'courses',
  providers:[CourseService],
  directives:[AutoGrowDirective],
  template:`
  <h2>{{title}}</h2>
  <input type="text" autoGrow>
  <ul>
    <li *ngFor="#course of courses">
      {{course}}
    </li>
  </ul>
  `
})

export class CoursesComponent{
  title= "Courses";
  private courses;

  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }
}