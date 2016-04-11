import {Component,Input} from 'angular2/core';


@Component({
  selector:'like',
  styles:[`
    .glyphicon-heart{
      color:#ccc;
      cursor:pointer;
    }
    .glyphicon-heart,.count{
      font-size:30px;
    }
    .liked{
    color:#FF3333;
    }
  `],
  template:`
  <i
   class="glyphicon glyphicon-heart"
   [class.liked]="liked"
   (click)="onClick()">
   </i>
   <span class="count">{{likeCount}}</span>
  `
})

export class LikeComponent{
  @Input() liked:boolean = false;
  @Input() likeCount:number = 0;
  onClick(){
    if(!this.liked) {
      this.likeCount++;
    }else{
      this.likeCount--;
    }
    this.liked = !this.liked;

  }
}