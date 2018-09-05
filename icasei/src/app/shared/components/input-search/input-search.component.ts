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

  constructor() { }

  ngOnInit() {
  }

  searchVideo(term: string) {
    this.change.emit( term );
  }
}
