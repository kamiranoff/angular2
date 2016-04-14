import {Component} from 'angular2/core';
import {RouteConfig,ROUTER_DIRECTIVES} from 'angular2/router';
import {TweetComponent} from './tweet.component';
import {MainPageComponent} from "./main-page.component";
import {SingleTweetComponent} from "./single-tweet.component";

@RouteConfig([
  {
    path: '/tweets',
    name: 'Tweets',
    component: TweetComponent,
  },
  {
    path: '/tweet/:id',
    name: 'SingleTweet',
    component: SingleTweetComponent,
  },
  {
    path: '/main-page',
    name: 'MainPage',
    component: MainPageComponent,
    useAsDefault: true
  },
  {
    path: '/*other',
    name: 'Other',
    redirectTo:['MainPage']
  }
])

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'app/app.component.html'
})
export class AppComponent {

}