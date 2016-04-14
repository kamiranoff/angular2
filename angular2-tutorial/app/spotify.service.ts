import {Observable} from "rxjs/Rx";

export class SpotifyService{
  static searchArtists(search){
    var url = "https://api.spotify.com/v1/search?type=artist&q=" + search;
    var promise = $.getJSON(url);
    return Observable.fromPromise(promise);
  }
}