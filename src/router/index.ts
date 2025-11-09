import { createRouter, createWebHistory } from 'vue-router';
import PokedexView from "@/views/PokedexView.vue"
import PokemonsView from "@/views/PokemonsView.vue"
import PokemonView from "@/views/DetailPokemonView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PokedexView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: PokemonsView
    },
    {
      path: '/pokemon/:id/:page',
      name: 'pokemon',
      component: PokemonView,
      props: true,
    }
  ],
})

export default router
