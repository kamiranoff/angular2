import {Component} from 'angular2/core';


@Component({
  selector:'course',
  template:`

  <h2>Filtering examples</h2>
  {{course.title | uppercase | lowercase}}
  <br/>
  {{course.students | number }}
  <br>

  {{course.rating | number:'2.2-2'}}
  <br>
  <!--
  true add currency to output
  2 means minimum 2 numbers
  .2-2 means minimum 2 and maximum 2 numbers after fractions.
  -->
  {{course.price | currency:'EUR':true:'2.2-2'}}
  <br>
  {{course.releaseDate | date:'MMM yyyy'}}
  <br>
  {{course | json}}
   <br>
  Assigned to {{course.assignee?.name}}
    <br>
  Which role is {{course.assignee?.role?.name}}
  `
})

export class CourseComponent{
  course = {
    title:"Angular 2 for Beginners",
    rating:4.1245,
    students:5981,
    price:99.95,
    releaseDate:new Date(2016,3,1),
    assignee:{
      name:'betsy baddrock'
    }
  }


}