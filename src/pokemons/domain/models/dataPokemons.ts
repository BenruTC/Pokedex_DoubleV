export interface IPokemonsData {
    name: string;
    url: string;
}

export class Pokemons {
    name: string;
    url: string;

    constructor(listPokemonsData: IPokemonsData | any) {
        this.name = listPokemonsData.name;
        this.url = listPokemonsData.url;
    }
}

export interface IPokemonData {
    base_experience: number;
    height: number;
    name: string;
    sprites: object;
    types: [];
}

export class Pokemon {
    base_experience: number;
    height: number;
    name: string;
    sprites: object;
    types: [];

    constructor(pokemonData: IPokemonData | any) {
        this.base_experience = pokemonData.base_experience;
        this.height = pokemonData.height;
        this.name = pokemonData.name;
        this.sprites = pokemonData.sprites;
        this.types = pokemonData.types;
    }
}