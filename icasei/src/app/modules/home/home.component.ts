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

  constructor( private listaPersonagens: ListaService ) { }

  ngOnInit() {
    this.searchVideo( 'marron 5' );
  }

  countChange( event ) {
    this.videos = [];
    this.searchVideo( event );
  }

  searchVideo( term: string ) {
    this.listaPersonagens.searchVideo(term).subscribe( data => {
      console.log( data.json() );
      this.videos = data.json().items;
     }
   );
  }

}
