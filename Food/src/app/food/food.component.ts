import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Generic } from '../generic/generic.model';
import { Observable } from 'rxjs';
import { Product, Root } from '../search.model';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent {
  daa! : string | null;
  roo! : Observable<Root>;
  risultato : Product[] = [];
  constructor(public generic : Generic, private rit : ActivatedRoute){ // una funzione di paramap ActivatedRoute = legge dove va il link
    this.rit.paramMap.subscribe(this.getRouterParam) // dove prendere il link
    console.log('Ciap')
  }
  getRouterParam = (Paramps : ParamMap) => { //value di paramap
    this.daa = Paramps.get('id') //  trova id 
    this.roo = this.generic.ritorna(this.daa);
    this.roo.subscribe((caso : Root) =>{this.risultato = caso.products}); 
    console.log(this.risultato) 
  }

}
