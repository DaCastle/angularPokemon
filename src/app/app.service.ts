import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Pokemon } from './pokemon';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

	private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';  // URL to web api
  	private headers = new Headers({'Content-Type': 'application/json'});

  	constructor(private http: Http) { }


  	getBulbasaur(): Promise<Pokemon> {
  		const url = `${this.pokeUrl}/bulbasaur/`;
  		return this.http
  		.get(url)
  		.toPromise()
  		.then(results => results.json() as Pokemon)
  		.catch(this.handleError);
  	}


  	getPokemon(idOrName: string): Promise<Pokemon> {
  		const url = `${this.pokeUrl}/${idOrName}/`;
  		return this.http.get(url)
  		.toPromise()
  		.then(results => results.json() as Pokemon)
  		.catch(this.handleError);
  	}



  	private handleError(error: any): Promise<any> {
    	console.error('An error occurred with retreiving pokemon data', error); // for demo purposes only
    	return Promise.reject(error.message || error);
  }
}
