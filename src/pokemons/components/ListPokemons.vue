<template>
    <div>
        <div class="list-container">
            <div v-if="!pokemons" class="d-flex align-items-center justify-content-center h-100">
                <Loading />
            </div>
            <ul v-if="pokemons" class="list-group list-container-inside">
                <li class="list-group-item list-pokemons d-flex" v-for="(pokemon, index) in pokemonsFiltered" :key="index">
                    <div class="col-10">
                        <RouterLink class="quitar-estilos-link" :to="{ name: 'pokemon', params: { id: pokemon.name, page: 0 } }">
                            <div style="width: 100%;">
                                <span style="text-transform: capitalize" class="">{{ pokemon.name }}</span>
                            </div>
                        </RouterLink>
                    </div>
                    <div class="col-2">

                    </div>
                </li>
            </ul>
        </div>
        <div class="pokedex-footer-view row pt-4">
            <div class="col-3 d-flex justify-content-center align-items-center">
                <RouterLink :to="{ name: 'home' }" class="btn btn-secondary">Atrás</RouterLink>
            </div>
            <div class="col-7 d-flex justify-content-center align-items-center">
                <Buscador @filtro="buscarPokemon($event)" />
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink  } from "vue-router";
import Loading from "../../shared/components/Loading.vue";
import Buscador from "../../shared/components/Buscador.vue";
import { ListPokemonsUseCase } from  "../domain/usecase/listPokemonsUseCase";
import { PokemonApiAdapter } from "../adapters/api/pokemonApiAdapter";
import { Pokemons } from "../domain/models/dataPokemons";
export default defineComponent({
  name: "ListPokemons",
  components: {
    Loading,
    Buscador
  },
  data() {
    return {
        pokemons: null as Pokemons[],
        pokemonsFiltered: null as Pokemons[],
    };
  },
  mounted() {
    this.listPokemons("/api/v2/pokemon/?offset=0&limit=20")
  },
  methods: {
    listPokemons(restApiUrl: any) {
        const pokemonRepository = new PokemonApiAdapter();
        const listPokemonsUseCase = new ListPokemonsUseCase(
            pokemonRepository
        );
        listPokemonsUseCase.execute(restApiUrl).then((v) => {
            setTimeout(() => {
                this.pokemons = v.data.results
                this.pokemonsFiltered = this.pokemons
            }, 1000)
        });
    },
    buscarPokemon(event) {
        console.log("Entróoo")
        console.log(event)
        if (event.length) {
          this.pokemonsFiltered = this.pokemons.filter((pokemon) =>
            `${pokemon.name}`.toLowerCase().includes(event.toLowerCase())
          );
        } else {
          this.pokemonsFiltered = this.pokemons;
        }
    },
  },
});
</script>