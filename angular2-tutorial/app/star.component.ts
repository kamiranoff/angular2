import {Component} from 'angular2/core';

@Component({
  selector:'star-component',
  styles:[`
    .glyphicon-star,.glyphicon-star-empty{
      font-size:30px;
      color:gold;
    }
  `],
  template:`
    <i class="glyphicon"
     [class.glyphicon-star-empty]="!isFavorite"
     [class.glyphicon-star]="isFavorite"
     (click)="onClick()"
     ></i>
  `
})

export class StarComponent{
  private isFavorite:boolean = false;
  onClick(){
    this.isFavorite = !this.isFavorite;

  }

}