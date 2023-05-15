import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string = '';

  onSearch(): void {
    console.log(this.searchText);
    // Inserisci qui la logica per la ricerca
  }
}
