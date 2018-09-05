import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-block',
  templateUrl: './list-block.component.html',
  styleUrls: ['./list-block.component.scss']
})
export class ListBlockComponent implements OnInit {

  @Input()
  videoId: string;

  @Input()
  videoTitle: string;

  @Input()
  channelTitle: string;

  @Input()
  videoDesc: string;

  videoImg: string;

  constructor() { }

  ngOnInit() {
    this.videoImg = 'https://img.youtube.com/vi/' + this.videoId + '/hqdefault.jpg';
  }

}
