///<reference path="tweet.service.ts"/>
import {Component,Input,EventEmitter,Output} from 'angular2/core';
import {LikeComponent} from './like.component';
import {TweetService} from './tweet.service';
import{Tweet} from './tweet.class';

@Component({
  selector:'tweets',
  providers:[TweetService],
  directives:[LikeComponent],
  template:`
  <div class="media" *ngFor="#tweet of tweets">
  <div class="media-left">
    <a href="#">
      <img class="media-object" [src]="tweet.pic" width="100" height="100">
    </a>
  </div>
  <div class="media-body">
    <h4 class="media-heading">{{tweet.name}} {{tweet.username}}</h4>
    {{tweet.tweet}}
    <like [likeCount]="tweet.likeCount" [liked]="tweet.liked"></like>
  </div>
</div>
  `
})


export class TweetComponent{
  tweets = [new Tweet(
    'Jane Doe',
    '@JaneDoe',
    'defaultTweet',
    10,
    false,
    "http://loremflickr.com/g/100/100/shakira")]
  ;


  constructor(tweetService: TweetService) {
    this.tweets = tweetService.getTweets();
  }
}