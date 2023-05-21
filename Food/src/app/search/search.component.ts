import { Component } from '@angular/core';
import { Product, Root } from '../search.model';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs'; //classe oggetto 
import { Generic } from '../generic/generic.model';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';
  data! : Observable<Root>; // richiamare la classe Root come oggetto !indefinito(vuoto)
  risulrato : Product[] = [] // risultato diventa ts Json
  constructor(public generic : Generic){

  }

  onSearch(antognogni : HTMLInputElement): void {
    this.searchText = antognogni.value;
    this.data = this.generic.trova(this.searchText); //data = richiama la classe generic e la funzione 
    // dopo richiamato la funzione trova data avvra tutte le informazione e tramite root li fa vedere
    //subscribe = ritorna i risultati, caso(nome caso) ha tutti i volori di subscrible(data)
    //con il risultato diventa il risultato
    this.data.subscribe((caso : Root) =>{this.risulrato = caso.products}); 
  }


}

