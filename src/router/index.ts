import { createRouter, createWebHistory } from 'vue-router';
import PokedexView from "@/views/PokedexView.vue"
import PokemonsView from "@/views/PokemonsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: PokedexView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: PokemonsView
    }
  ],
})

export default router
