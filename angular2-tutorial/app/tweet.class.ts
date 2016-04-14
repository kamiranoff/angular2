export class Tweet{

  id:number = 1;
  name:string =  'Jane Doe';
  username:string = '@JaneDoe';
  tweet:string = 'defaultTweet';
  likeCount:number = 10;
  liked:boolean = false;
  pic:string =  "http://loremflickr.com/g/100/100/shakira";

  constructor(id:number,name:string, username:string, tweet:string, likeCount:number, liked:boolean, pic:string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.tweet = tweet;
    this.likeCount = likeCount;
    this.liked = liked;
    this.pic = pic;
  }

}
