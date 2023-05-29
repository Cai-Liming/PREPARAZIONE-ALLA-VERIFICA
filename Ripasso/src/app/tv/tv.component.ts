import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Root2, Show } from '../app.model';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css']
})
export class TVComponent {
  string !: string | null;
  obsTV !: Observable<Root2>;
  ris !: Show;

  constructor(public  http : HttpClient, private name : ActivatedRoute){
    this.name.paramMap.subscribe()

  }
  
  trova =(params : ParamMap)=> {
    this.string = params.get('id')
    this.obsTV = this.http.get<Root2>(`https://api.tvmaze.com/shows/${this.string}`)
    this.obsTV.subscribe((data : Root2) => {this.ris = data.show})
  }
}
