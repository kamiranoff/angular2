import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {BindingComponent} from './binding-examples.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TweetComponent} from './tweet.component';
/**
# Property binding : 3 possible syntaxes
# <img src="{{imageUrl}}"/>
# <img [src]="imageUrl"/>
# <img bind-src="imageUrl"/>
**/

@Component({
  selector: 'my-app',
  directives:[CoursesComponent,AuthorsComponent,BindingComponent,StarComponent,LikeComponent,VoteComponent,TweetComponent],
  styles:[`
    .active{
      background-color:#123;
      color:#efefef;
    }
  `],
  template:`
    <h1>{{post.title}}</h1>
    <binding-component></binding-component>
    <star-component [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></star-component>
    <like [likeCount]="likeStatus.likeCount" [liked]="likeStatus.liked"></like>
    <vote [voteCount]="votes.voteCount" [myVote]="votes.myVote" (vote)="onVoteChanged($event)"></vote>

    <tweets></tweets>
    <courses></courses>
    <authors></authors>


  `
})
export class AppComponent {
  post ={
    title: 'My First Angular 2 App !',
    isFavorite:true
  };
  onFavoriteChange($event){
    console.log("change event",$event);
  };

  likeStatus={
    likeCount:10,
    liked:false
  };
  votes={
    voteCount:243,
    myVote:'neutral'
  };

  onVoteChanged($event){
    console.log('has voted',$event);
  }

}