System.register(['angular2/core', 'angular2/router', './tweet.component', "./main-page.component", "./single-tweet.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, tweet_component_1, main_page_component_1, single_tweet_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            },
            function (main_page_component_1_1) {
                main_page_component_1 = main_page_component_1_1;
            },
            function (single_tweet_component_1_1) {
                single_tweet_component_1 = single_tweet_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/tweets',
                            name: 'Tweets',
                            component: tweet_component_1.TweetComponent,
                        },
                        {
                            path: '/tweet/:id',
                            name: 'SingleTweet',
                            component: single_tweet_component_1.SingleTweetComponent,
                        },
                        {
                            path: '/main-page',
                            name: 'MainPage',
                            component: main_page_component_1.MainPageComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/*other',
                            name: 'Other',
                            redirectTo: ['MainPage']
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        templateUrl: 'app/app.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map