import { Component } from '@angular/core';

class SearchOption {
title: string;
path: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basic-web';
  search = '';
  block = false;
  options: SearchOption[] = [
    {title: 'Home', path: 'home'},
    {title: 'Contact', path: 'contact'},
    {title: 'About', path: 'about'}
  ];


  get filteredOptions(): SearchOption[]{
    const result = [];
    const search = this.search.toLowerCase();
    if (search.length === 0){
      return this.options;
    }
    for (const option of this.options){
      if (option.title.toLowerCase().includes(search)){
        result.push(option);
      }
    }
    return result;
  }

  toggleOptions() {
    if (this.block === true) {
      this.block = false;
    } else {
      this.block = true;
    }
  }

  toggleOptionsOff() {
    this.block = false;
  }

}
