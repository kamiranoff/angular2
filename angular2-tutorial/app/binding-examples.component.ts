import {Component} from 'angular2/core';


/**
# Property binding : 3 possible syntaxes
# <img src="{{imageUrl}}"/>
# <img [src]="imageUrl"/>
# <img bind-src="imageUrl"/>
**/

@Component({
  selector: 'binding-component',
  styles:[`
    .active{
      background-color:#123;
      color:#efefef;
    }
  `],
  template:`
    <button type="button"
      [class.active]="isActive"
      (click)="onClick($event)"
      >
      Example Button with Binding
    </button>
    <div>
    <!--<input type="text" [value]="title" (input)="title = $event.target.value"/>-->
    <!--<input type="text" bindon-ngModel="title">-->
    <input type="text" [(ngModel)]="title">
    <p>Preview:{{title}}</p>
    </div>
  `
})
export class BindingComponent {
  private title="Two-way data-binding";
  private isActive: boolean = true;
  onClick($event){
    console.log('$event',$event);
  }
}