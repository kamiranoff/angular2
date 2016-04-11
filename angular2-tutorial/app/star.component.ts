import {Component,Input,EventEmitter,Output} from 'angular2/core';

@Component({
  selector:'star-component',
  //inputs:['isFavorite:is-favorite'], //Alternative of using decorators.
  //outputs:['change'], //Alternative of using decorators.
  styles:[`
    .glyphicon-star,.glyphicon-star-empty{
      font-size:30px;
      color:gold;
    }
  `],
  templateUrl:'app/star.component.html'
})

export class StarComponent{
  @Input('is-favorite') private isFavorite:boolean = false;
  @Output() change = new EventEmitter();
  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue:this.isFavorite});
  }

}