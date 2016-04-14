import {Component,Input,Output,EventEmitter} from 'angular2/core';
import {ControlGroup,FormBuilder} from "angular2/common";

@Component({
  selector:'search-component',
  template:`
  <h2>Search Component (with call to spotify Api)</h2>
  <form [ngFormModel]="searchForm">
    <input class="form-control" ngControl="search" id="search" type="text" placeholder="search">
  </form>
  `
})

export class SearchComponent{
  searchForm:ControlGroup;

  @Output() private searchTerm = new EventEmitter();
  constructor(fb:FormBuilder){
    this.searchForm = fb.group({
      search:[]
    });
    var search = this.searchForm.find('search');
    search.valueChanges.debounceTime(400)
      .map(str=>(<string>str).replace(' ','-')).subscribe(x => {
      console.log(x);
      console.log(this.searchTerm);
      this.searchTerm.emit(x);
    });
  }

}