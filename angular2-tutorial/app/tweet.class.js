System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Tweet;
    return {
        setters:[],
        execute: function() {
            Tweet = (function () {
                function Tweet(id, name, username, tweet, likeCount, liked, pic) {
                    this.id = 1;
                    this.name = 'Jane Doe';
                    this.username = '@JaneDoe';
                    this.tweet = 'defaultTweet';
                    this.likeCount = 10;
                    this.liked = false;
                    this.pic = "http://loremflickr.com/g/100/100/shakira";
                    this.id = id;
                    this.name = name;
                    this.username = username;
                    this.tweet = tweet;
                    this.likeCount = likeCount;
                    this.liked = liked;
                    this.pic = pic;
                }
                return Tweet;
            }());
            exports_1("Tweet", Tweet);
        }
    }
});
//# sourceMappingURL=tweet.class.js.map