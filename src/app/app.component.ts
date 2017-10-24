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

	//bulba: Pokemon = new Pokemon;
	pokemon: Pokemon = new Pokemon();

	constructor(
		private AppService: AppService
		) { }


	getBulbasaur(): void {
		this.AppService.getBulbasaur().then(pokemon => this.pokemon = pokemon);//console.log(pokemon));
	}


	ngOnInit(): void {
		this.getBulbasaur();
	}

}
