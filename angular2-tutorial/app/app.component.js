System.register(['angular2/core', './courses.component', './authors.component', './binding-examples.component', './star.component', './like.component', './vote.component', './tweet.component'], function(exports_1, context_1) {
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
    var core_1, courses_component_1, authors_component_1, binding_examples_component_1, star_component_1, like_component_1, vote_component_1, tweet_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (courses_component_1_1) {
                courses_component_1 = courses_component_1_1;
            },
            function (authors_component_1_1) {
                authors_component_1 = authors_component_1_1;
            },
            function (binding_examples_component_1_1) {
                binding_examples_component_1 = binding_examples_component_1_1;
            },
            function (star_component_1_1) {
                star_component_1 = star_component_1_1;
            },
            function (like_component_1_1) {
                like_component_1 = like_component_1_1;
            },
            function (vote_component_1_1) {
                vote_component_1 = vote_component_1_1;
            },
            function (tweet_component_1_1) {
                tweet_component_1 = tweet_component_1_1;
            }],
        execute: function() {
            /**
            # Property binding : 3 possible syntaxes
            # <img src="{{imageUrl}}"/>
            # <img [src]="imageUrl"/>
            # <img bind-src="imageUrl"/>
            **/
            AppComponent = (function () {
                function AppComponent() {
                    this.post = {
                        title: 'My First Angular 2 App !',
                        isFavorite: true
                    };
                    this.likeStatus = {
                        likeCount: 10,
                        liked: false
                    };
                    this.votes = {
                        voteCount: 243,
                        myVote: 'neutral'
                    };
                }
                AppComponent.prototype.onFavoriteChange = function ($event) {
                    console.log("change event", $event);
                };
                ;
                AppComponent.prototype.onVoteChanged = function ($event) {
                    console.log('has voted', $event);
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        directives: [courses_component_1.CoursesComponent, authors_component_1.AuthorsComponent, binding_examples_component_1.BindingComponent, star_component_1.StarComponent, like_component_1.LikeComponent, vote_component_1.VoteComponent, tweet_component_1.TweetComponent],
                        styles: ["\n    .active{\n      background-color:#123;\n      color:#efefef;\n    }\n  "],
                        template: "\n    <h1>{{post.title}}</h1>\n    <binding-component></binding-component>\n    <star-component [is-favorite]=\"post.isFavorite\" (change)=\"onFavoriteChange($event)\"></star-component>\n    <like [likeCount]=\"likeStatus.likeCount\" [liked]=\"likeStatus.liked\"></like>\n    <vote [voteCount]=\"votes.voteCount\" [myVote]=\"votes.myVote\" (vote)=\"onVoteChanged($event)\"></vote>\n\n    <tweets></tweets>\n    <courses></courses>\n    <authors></authors>\n\n\n  "
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