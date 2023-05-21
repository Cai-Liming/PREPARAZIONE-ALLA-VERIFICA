// il servicee 
import { HttpClient } from "@angular/common/http"; // classe chiamare pagina web
import { Root } from "../search.model";
import { Injectable } from "@angular/core";
@Injectable({providedIn : 'root'}) // serve per passre questo component a tutti altri componenti
export class Generic{

    constructor(public http : HttpClient ){

    }
    trova(s : string){
        //ricerca del link 
        const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${s}&page_size=2&json=true` 
        let ritorno = this.http.get<Root>(url);  // richiamo e retun del http
        return ritorno
    }
}