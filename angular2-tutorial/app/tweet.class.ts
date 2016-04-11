export class Tweet{

  name:string =  'Jane Doe';
  username:string = '@JaneDoe';
  tweet:string = 'defaultTweet';
  likeCount:number = 10;
  liked:boolean = false;
  pic:string =  "http://loremflickr.com/g/100/100/shakira";

  constructor(name:string, username:string, tweet:string, likeCount:number, liked:boolean, pic:string) {
    this.name = name;
    this.username = username;
    this.tweet = tweet;
    this.likeCount = likeCount;
    this.liked = liked;
    this.pic = pic;
  }

}
