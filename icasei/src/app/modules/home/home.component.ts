import { Component, OnInit } from '@angular/core';

import { ListaService } from '../../shared/services/list.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  videos;
  myCount = '';
  showError = false;
  sliderTranslate = 0;

  constructor( private listaPersonagens: ListaService ) {}

  ngOnInit() {}

  countChange( event ) {
    this.videos = [];
    this.searchVideo( event );
  }

  searchVideo( term: string ) {
    this.listaPersonagens.searchVideo(term).subscribe( data => {
      this.videos = data.json().items;
      this.videos.length ? this.showError = false : this.showError = true;
    });
  }

  sliderPrev() {
    this.sliderTranslate += 100;
  }

  sliderNext() {
    this.sliderTranslate -= 100;
  }

}
