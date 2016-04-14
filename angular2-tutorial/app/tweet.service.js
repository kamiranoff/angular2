System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TweetService;
    return {
        setters:[],
        execute: function() {
            TweetService = (function () {
                function TweetService() {
                }
                TweetService.prototype.getTweets = function () {
                    return [{
                            id: 1,
                            name: 'Shakira',
                            username: '@shakira',
                            tweet: 'I love Kevin',
                            likeCount: 2100,
                            liked: false,
                            pic: "http://cdn-femina.ladmedia.fr/var/femina/storage/images/people/vie-des-people/shakira-ses-applis-iphone-preferees-et-sa-playlist-itunes/5224565-1-fre-FR/Shakira-ses-applis-iPhone-preferees-et-sa-playlist-iTunes_article_visuel.jpg"
                        }, {
                            id: 2,
                            name: 'Malicia',
                            username: '@Rogue',
                            tweet: 'I LOVE KEEEEVIN',
                            likeCount: 65,
                            liked: false,
                            pic: "http://x.annihil.us/u/prod/marvel/i/mg/3/e0/4e8397401e74d.jpg"
                        }, {
                            id: 3,
                            name: 'Betsy Baddrock',
                            username: '@Psylocke',
                            tweet: 'I love kevin even more',
                            likeCount: 25,
                            liked: true,
                            pic: "https://i.annihil.us/u/prod/marvel/i/mg/1/50/526961ce86539/standard_xlarge.jpg"
                        }];
                };
                ;
                TweetService.prototype.getTweetById = function (id) {
                    var tweets = this.getTweets();
                    return tweets.filter(function (v) {
                        return v.id === id; // Filter out the appropriate one
                    })[0];
                };
                return TweetService;
            }());
            exports_1("TweetService", TweetService);
        }
    }
});
//# sourceMappingURL=tweet.service.js.map