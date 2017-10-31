import { Component, OnInit } from '@angular/core';

// import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';

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
  // itemsCollection: AngularFirestoreCollection<any[]>;
  // items: Observable<any[]>;
  counter = 204;

  constructor(
    private appService: AppService,
    // private afs: AngularFirestore
    ) {}


  getPokemon(nameOrId?: any): void {
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
          // this.itemsCollection.add(this.pokemon);
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
        // this.itemsCollection = this.afs.collection('pokemon');
        // this.items = this.itemsCollection.valueChanges();
        this.getPokemon();
        this.getPokemonList();
      }

    }
