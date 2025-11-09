import axios from "@/helpers/axios";
import type { IPokemonsRepository } from "@/pokemons/domain/ports/IPokemonsRepository";
import type { IPaginatedResponse } from "@/interfaces/IPaginatedResponse";
import { Pokemons } from "../../domain/models/dataPokemons"
import { Pokemon } from "../../domain/models/dataPokemons"

export class PokemonApiAdapter implements IPokemonsRepository {
    async getPokemons(
        url: string,
    ): Promise<IPaginatedResponse<Pokemons>> {
        return axios.get(url, {});
    }

    async getPokemon(
        url: string,
    ): Promise<Pokemon> {
        return axios.get(url, {});
    }
}