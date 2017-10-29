import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { AppService } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './loading.directive.css'],
    providers: [AppService]
})

export class AppComponent implements OnInit {

    pokemon: Pokemon = new Pokemon();
    nameOrId = '';
    prevOrNext = 0;
    pokemonList: [string] = [''];
    loading: boolean;

    constructor(
        private appService: AppService
        ) {}


    getPokemon(nameOrId?: string): void {
        this.loading = true;
        let search;
        if (nameOrId !== undefined) {
            search = nameOrId;
        } else {
            search = this.pokemon.id;
        }
        this.appService.getPokemon(search, this.prevOrNext).then(pokemon => {
            this.pokemon = pokemon;
            this.nameOrId = '';
            this.prevOrNext = 0;
            this.loading = false;
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

    getPokemonList(): void {
        this.appService.getPokemonList()
        .then(list => this.pokemonList = list);
    }


    ngOnInit(): void {
        this.getPokemon();
        this.getPokemonList();
    }

}
