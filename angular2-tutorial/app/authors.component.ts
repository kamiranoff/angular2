import {Component} from 'angular2/core';
import {AuthorService} from './author.service';

@Component({
  selector:'authors',
  providers:[AuthorService],
  template:`
  <h2>{{title}}</h2>
    <ul>
    <li *ngFor="#author of authors">
      {{author}}
    </li>
  </ul>
  `

})

export class AuthorsComponent{
  title = 'Authors';
  private authors: string[];

  constructor(authorService: AuthorService){
    this.authors = authorService.getAuthors();
  }
}