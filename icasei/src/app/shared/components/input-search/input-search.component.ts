import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {

  @Output()
  change = new EventEmitter();

  @Input()
  count = '0';

  /**
   * aux variables
   */
  searchPosition = 50;
  search: string;

  constructor() { }

  ngOnInit() {}

  /**
   * get term type and emmit value to
   * parent component
   * @param {string} term
   */
  searchVideo(term: string) {
    if (term) {
      this.change.emit( term );
    }
  }

  /**
   * input search onFocus
   * animate to top of page
   */
  searchFocus() {
    this.searchPosition = 0;
  }

  /**
   * input search onFocusOut verify if empty
   * to animate to middle of page
   */
  searchFocusOut() {
    setTimeout(() => {
      this.search ? this.searchPosition = 0 : this.searchPosition = 50;
    }, 300);
  }
}
