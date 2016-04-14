import {Component} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {LikeComponent} from './like.component';
import {TweetService} from './tweet.service';
import{Tweet} from './tweet.class';
import {SummaryPipe} from "./summary.pipe";

@Component({
  selector: 'tweets',
  providers: [TweetService],
  directives: [LikeComponent,ROUTER_DIRECTIVES],
  pipes: [SummaryPipe],
  template:`
  <h2>Tweet Component</h2>
  <div class="media" *ngFor="#tweet of tweets">
    <div class="media-left">
      <a [routerLink]="['SingleTweet',{id:tweet.id}]">
        <img class="media-object" [src]="tweet.pic" width="100" height="100">
      </a>
    </div>
    <div class="media-body">
      <h4 class="media-heading">{{tweet.name}} {{tweet.username}}</h4>
      {{tweet.tweet | summary:25}}
      <like [likeCount]="tweet.likeCount" [liked]="tweet.liked"></like>
    </div>
  </div>
  `
})


export class TweetComponent {
  tweets = [new Tweet(
    1,
    'Jane Doe',
    '@JaneDoe',
    'defaultTweet',
    10,
    false,
    "http://loremflickr.com/g/100/100/shakira")]
    ;


  constructor(tweetService:TweetService) {
    this.tweets = tweetService.getTweets();
  }


}