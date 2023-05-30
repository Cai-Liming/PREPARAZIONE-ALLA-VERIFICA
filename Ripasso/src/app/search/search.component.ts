import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../app.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
//commit 3
  string !: string;
  obsTV !: Observable<Root>;
  ris !: Root;
  constructor(public  http : HttpClient){

  }
  cerca(stringa : HTMLInputElement){
    this.string = stringa.value
    this.obsTV = this.http.get<Root>(`https://api.tvmaze.com/search/shows?q=${this.string}`)
    this.obsTV.subscribe((data : Root) => {this.ris = data})
  }

}
