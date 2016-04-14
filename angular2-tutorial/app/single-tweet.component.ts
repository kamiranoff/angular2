import {Component} from "angular2/core";
import {LikeComponent} from "./like.component";
import {TweetService} from "./tweet.service";
import{RouteParams} from 'angular2/router';

@Component({
  selector:'single-tweet',
  providers: [TweetService],
  directives: [LikeComponent],
  template:`
    <div class="media">
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


export class SingleTweetComponent{
  private tweet;
  constructor(tweetService:TweetService,private _routeParams:RouteParams) {
    this.tweet = tweetService.getTweetById(this._routeParams.get("id"));
  }
}