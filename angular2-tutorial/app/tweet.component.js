System.register(['angular2/core', './like.component', './tweet.service', './tweet.class'], function(exports_1, context_1) {
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
    var core_1, like_component_1, tweet_service_1, tweet_class_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (tweet_service_1_1) {
                tweet_service_1 = tweet_service_1_1;
            },
            function (tweet_class_1_1) {
                tweet_class_1 = tweet_class_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                function TweetComponent(tweetService) {
                    this.tweets = [new tweet_class_1.Tweet('Jane Doe', '@JaneDoe', 'defaultTweet', 10, false, "http://loremflickr.com/g/100/100/shakira")];
                    this.tweets = tweetService.getTweets();
                }
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: 'tweets',
                        providers: [tweet_service_1.TweetService],
                        directives: [like_component_1.LikeComponent],
                        template: "\n  <div class=\"media\" *ngFor=\"#tweet of tweets\">\n  <div class=\"media-left\">\n    <a href=\"#\">\n      <img class=\"media-object\" [src]=\"tweet.pic\" width=\"100\" height=\"100\">\n    </a>\n  </div>\n  <div class=\"media-body\">\n    <h4 class=\"media-heading\">{{tweet.name}} {{tweet.username}}</h4>\n    {{tweet.tweet}}\n    <like [likeCount]=\"tweet.likeCount\" [liked]=\"tweet.liked\"></like>\n  </div>\n</div>\n  "
                    }), 
                    __metadata('design:paramtypes', [tweet_service_1.TweetService])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map