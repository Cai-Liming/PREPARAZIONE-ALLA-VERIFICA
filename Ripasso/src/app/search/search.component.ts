import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root, Root2, Show } from '../app.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  string !: string;
  obsTV !: Observable<Root2>;
  ris !: Show;
  constructor(public  http : HttpClient){

  }
  cerca(stringa : HTMLInputElement){
    this.string = stringa.value
    this.obsTV = this.http.get<Root2>(`https://api.tvmaze.com/search/shows?q=${this.string}`)
    this.obsTV.subscribe((data : Root2) => {this.ris = data.show})
  }

}
