import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Pokemon } from './pokemon';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

	private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';  // URL to web api

  	constructor(private http: Http) { }


  	getPokemon(id: number, prevOrNext: number): Promise<Pokemon> {
      
      if (prevOrNext != 0) {
        if (prevOrNext === 1) {id +=1}
        else {id -=1}
      }
    
  		const url = `${this.pokeUrl}/${id}/`;
  		return this.http.get(url)
  		.toPromise()
  		.then(results => results.json() as Pokemon)
  		.catch(this.handleError);
  	}


  	private handleError(error: any): Promise<any> {
    	console.error('An error occurred with retreiving pokemon data', error);
    	return Promise.reject(error.message || error);
  }
}
