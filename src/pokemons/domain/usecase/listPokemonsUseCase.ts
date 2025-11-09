import { Pokemons } from "../models/dataPokemons"
import type { IPaginatedResponse } from "../../../interfaces/IPaginatedResponse";
import type { IPokemonsRepository } from "../ports/IPokemonsRepository";

export class ListPokemonsUseCase {
    constructor(private pokemonsRepository: IPokemonsRepository) {}

    async execute(
        restApiUrl: any
    ): Promise<IPaginatedResponse<Pokemons>> {
        return this.pokemonsRepository.getPokemons(restApiUrl);
    }
}