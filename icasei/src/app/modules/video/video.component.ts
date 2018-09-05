import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

import { ListaService } from '../../shared/services/list.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoObj: object;

  constructor(
    private videoService: ListaService,
    private activeRoute: ActivatedRoute,
    public sanitizer: DomSanitizer ) { }

  ngOnInit() {
    this.videoService.getVideo( this.activeRoute.snapshot.params.id ).subscribe( data => {
      this.videoObj = data.json().items;
    }
  }

}
