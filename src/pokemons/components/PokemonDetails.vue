<template>
    <div>
        <div class="detail-pokemon-view">
            <div v-if="!pokemon" class="d-flex align-items-center justify-content-center h-100">
                <Loading />
            </div>
            <div v-if="pokemon">
                <div class="fondo-foto">
                    <img
                        class="foto-pokemon"
                        height="150"
                        :src="pokemon.sprites.other.dream_world.front_default" 
                    />
                </div>
                <div class="info-pokemon">
                    <ul class="list-group list-group-flush mb-4">
                        <li style="text-transform: capitalize" class="list-group-item">
                            <strong>Name: </strong> {{ pokemon.forms[0].name }}
                        </li>
                        <li class="list-group-item">
                            <strong>Base experience: </strong> {{ pokemon.base_experience }}
                        </li>
                        <li class="list-group-item">
                            <strong>Weght: </strong> {{ pokemon.weight }}
                        </li>
                        <li class="list-group-item">
                            <strong>Height: </strong> {{ pokemon.height }}
                        </li>
                        <li style="text-transform: capitalize" class="list-group-item">
                            <strong>Types: </strong> {{ tipoPokemon }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="pokedex-footer-view row pt-4">
            <div class="col-3 d-flex justify-content-center align-items-center">
                <RouterLink :to="{ name: 'pokemons' }" class="btn btn-secondary">Atrás</RouterLink>
            </div>
            <div class="col-7 d-flex justify-content-center align-items-center">
                <div class="input-group input-group-lg sizeInput">
                    <div class="form-control buscador" style="height: 47px;">
                        
                    </div>
                </div>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Loading from "../../shared/components/Loading.vue";
import { DetailPokemonUseCase } from  "../domain/usecase/detailPokemonUseCase";
import { PokemonApiAdapter } from "../adapters/api/pokemonApiAdapter";
import { Pokemon } from "../domain/models/dataPokemons";
export default defineComponent({
    name: "DetailPokemon",
    props: {
        id: {
            type: String,
            default: "",
        },
        page: {
            type: String,
            default: 0,
        },
    },
    data() {
        return{
            pokemon: null as Pokemon,
            tipoPokemon: '' as String,
        };
    },
    watch: {
        pokemon() {
            this.obtenerTipos()
        }
    },
    mounted() {
        let url = `/api/v2/pokemon/${this.id}`;
        this.detailPokemon(url);
    },
    methods: {
        detailPokemon(restApiUrl: any) {
            const pokemonRepository = new PokemonApiAdapter();
            const detailPokemonUseCase = new DetailPokemonUseCase(
                pokemonRepository
            );
            detailPokemonUseCase.execute(restApiUrl).then((v) => {
                this.pokemon = v.data;
            });
        },
        obtenerTipos() {
            if (this.pokemon) {
                this.pokemon.types.forEach(item => {
                    this.tipoPokemon += `${item.type.name},`
                });
            }
        }
    }
});
</script>