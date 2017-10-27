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
	prevOrNext: number = 0;

	constructor(
		private AppService: AppService
		) { }


	getPokemon(nameOrId?: string): void {
		let search;
		if (nameOrId !== undefined) {
			search = nameOrId;
		}
		else {
			search = this.pokemon.id;
		}
			this.AppService.getPokemon(search, this.prevOrNext).then(pokemon => {
				this.pokemon = pokemon;
				this.nameOrId = "";
				this.prevOrNext = 0;
			});
		}


	prevPoke(): void {
		if (this.pokemon.id > 1) {
			this.prevOrNext = this.prevOrNext - 1;
		}
	}
	

	nextPoke(): void {
		this.prevOrNext = this.prevOrNext + 1;
	}


	ngOnInit(): void {
		this.getPokemon();
	}

}
