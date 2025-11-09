import { Pokemon } from "../models/dataPokemons"
import type { IPokemonsRepository } from "../ports/IPokemonsRepository";

export class DetailPokemonUseCase {
    constructor(private pokemonsRepository: IPokemonsRepository) {}

    async execute(
        restApiUrl: any
    ): Promise<Pokemon> {
        return this.pokemonsRepository.getPokemon(restApiUrl);
    }
}