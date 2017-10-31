import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Pokemon } from './pokemon';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {

  private pokeUrl = 'https://pokeapi.co/api/v2/pokemon';  // URL to web api

  constructor(private http: Http) { }


  getPokemon(idOrName: any, prevOrNext: number): Promise<Pokemon> {

    if (prevOrNext !== 0) {
      if (prevOrNext === 1) {
        idOrName = idOrName + 1;
      } else {
        idOrName = idOrName - 1;
      }
    } else {
      idOrName = idOrName.toString().toLowerCase();
    }

    const url = `${this.pokeUrl}/${idOrName}/`;
    return this.http.get(url)
    .toPromise()
    .then(results => {
      const _results = this.scrub(results.json());
      return _results;
    })
    .catch(this.handleError);
  }


  getPokemonList(): Promise<any> {

    return this.http.get('./assets/pokemonList.json')
    .toPromise()
    .then(results => results.json())
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred with retreiving pokemon data', error);
    return Promise.reject(error.message || error);
  }


  private scrub(results: any): Pokemon {
    delete results.height;
    delete results.forms;
    delete results.game_indices;
    delete results.held_items;
    delete results.location_area_encounters;
    delete results.species;
    delete results.types;
    delete results.moves;
    return results as Pokemon;
  }

}
