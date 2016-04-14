import {Component} from 'angular2/core';

import {BindingComponent} from './binding-examples.component';
import {StarComponent} from './star.component';
import {LikeComponent} from './like.component';
import {VoteComponent} from './vote.component';
import {TweetComponent} from './tweet.component';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {CourseComponent} from "./course.component";
import {ContactFormComponent} from "./contact-form.component";
import {ComplexForm} from "./complex-form.component";
import {SearchComponent} from "./search.component";
import {Observable} from "rxjs/Rx"; //full api

//import {Observable} from "rxjs/Observable";//striped down

import {SpotifyService} from "./spotify.service";


/**
 # Property binding : 3 possible syntaxes
 # <img src="{{imageUrl}}"/>
 # <img [src]="imageUrl"/>
 # <img bind-src="imageUrl"/>
 **/

@Component({
  selector: 'main-page',
  providers:[SpotifyService],
  directives:[CoursesComponent,AuthorsComponent,BindingComponent,StarComponent,
    LikeComponent,VoteComponent,TweetComponent,CourseComponent,ContactFormComponent,
    ComplexForm,SearchComponent],
  styles:[`
    .active{
      background-color:#123;
      color:#efefef;
    }
  `],
  template:`
    <h2>{{post.title}}</h2>
    <binding-component></binding-component>
    <star-component [is-favorite]="post.isFavorite" (change)="onFavoriteChange($event)"></star-component>
    <like [likeCount]="likeStatus.likeCount" [liked]="likeStatus.liked"></like>
    <vote [voteCount]="votes.voteCount" [myVote]="votes.myVote" (vote)="onVoteChanged($event)"></vote>

    <tweets></tweets>
    <courses></courses>
    <authors></authors>
    <course></course>
    <contact-form></contact-form>
    <complex-form></complex-form>
    <search-component (searchTerm)="onSearchChanged($event)"></search-component>

  `
})
export class MainPageComponent {
  onSearchChanged(searchInput){
    var keyups = Observable.of(searchInput)
      .filter(text => text.length >= 3)
      .debounceTime(400)
      .distinctUntilChanged()
      .flatMap(searchTerm => SpotifyService.searchArtists(searchTerm));
    keyups.subscribe(data =>{console.log("data",data)});
  }
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