import axios from "@/helpers/axios";
import type { IPokemonsRepository } from "@/pokemons/domain/ports/IPokemonsRepository";
import type { IPaginatedResponse } from "@/interfaces/IPaginatedResponse";
import { Pokemons } from "../../domain/models/dataPokemons"
import { Pokemon } from "../../domain/models/dataPokemons"

export class PokemonApiAdapter implements IPokemonsRepository {
    /**
     *
     * @function getPokemons
     * @param {string} url - URL de la API para obtener la lista de Pokemons.
     * @description Obtiene la lista de pokemons
     * @returns {Promise<IPaginatedResponse<Pokemons>>}
     */
    async getPokemons(
        url: string,
    ): Promise<IPaginatedResponse<Pokemons>> {
        return axios.get(url, {});
    }

    /**
     * 
     *
     * @async
     * @function getPokemon
     * @param {string} url - URL de la API para obtener los detalles de un Pokemon.
     * @description Obtiene un Pokemon específico desde la API.
     * @returns {Promise<Pokemon>} - Promesa con la información del Pokemon.
     */
    async getPokemon(
        url: string,
    ): Promise<Pokemon> {
        return axios.get(url, {});
    }
}