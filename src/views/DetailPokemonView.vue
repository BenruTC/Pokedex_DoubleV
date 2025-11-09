<template>
  <PokemonDetail />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PokemonDetail from "../pokemons/components/PokemonDetails.vue";

export default defineComponent({
  name: "DetailPokemonView",
  components: {
    PokemonDetail,
  },
});
</script>
