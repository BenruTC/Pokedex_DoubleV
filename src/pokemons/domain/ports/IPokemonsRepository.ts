import { Pokemons } from "../models/dataPokemons";
import { Pokemon } from "../models/dataPokemons";
import type { IPaginatedResponse } from "@/interfaces/IPaginatedResponse";

export interface IPokemonsRepository {
    getPokemons(
        restApiUrl: any
    ): Promise<IPaginatedResponse<Pokemons>>;

    getPokemon(
        restApiUrl: any
    ): Promise<Pokemon>;
}