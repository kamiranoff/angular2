System.register(["rxjs/Rx"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Rx_1;
    var SpotifyService;
    return {
        setters:[
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            SpotifyService = (function () {
                function SpotifyService() {
                }
                SpotifyService.searchArtists = function (search) {
                    var url = "https://api.spotify.com/v1/search?type=artist&q=" + search;
                    var promise = $.getJSON(url);
                    return Rx_1.Observable.fromPromise(promise);
                };
                return SpotifyService;
            }());
            exports_1("SpotifyService", SpotifyService);
        }
    }
});
//# sourceMappingURL=spotify.service.js.map