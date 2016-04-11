import {Component,Input,Output,EventEmitter} from 'angular2/core';


@Component({
  selector:'vote',
  styles:[`
    .like-container{
      width:50px;
      text-align:center;
      font-size:30px;
      color:#AAA;
    }
    .has-voted{
      color:gold;
    }
  `],
  template:`
  <div class="like-container">
  <i
   class="glyphicon glyphicon-menu-up"
   (click)="onClick('plus')"
   [class.has-voted]="myVote === 'plus'"
   ></i>
   <span class="count">{{voteCount}}</span>
     <i
   class="glyphicon glyphicon-menu-down"
   (click)="onClick('minus')"
   [class.has-voted]="myVote === 'minus'"
   ></i>
   </div>
  `
})

export class VoteComponent{
  @Input() private voteCount:number = 0;
  @Input() private myVote = 'neutral';

  @Output() private vote = new EventEmitter();

  onClick(choice){
    if(choice === 'plus' && this.myVote !== 'plus'){
      this.voteCount++;
      if(this.myVote === 'minus'){
        this.myVote = 'neutral'
      }else{
        this.myVote = 'plus';
      }
    }else if(choice === 'minus' && this.myVote !== 'minus'){
      this.voteCount--;

      if(this.myVote === 'plus'){
        this.myVote = 'neutral'
      }else{
        this.myVote = 'minus';
      }
    }
    this.vote.emit({voteCount:this.voteCount,myVote:this.myVote});
  }
}