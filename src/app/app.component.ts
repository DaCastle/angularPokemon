import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { AppService } from './app.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	providers: [AppService]
})

export class AppComponent implements OnInit {

	pokemon: Pokemon = new Pokemon();
	nameOrId: string = "";

	constructor(
		private AppService: AppService
		) { }


	getPokemon(nameOrId: string): void {
		if (nameOrId != this.pokemon.name && nameOrId != this.pokemon.id) {
		this.AppService.getPokemon(nameOrId.toLowerCase()).then(pokemon => this.pokemon = pokemon);//console.log(pokemon));
		}
	}


	ngOnInit(): void {
		this.getPokemon('bulbasaur');
	}

}
