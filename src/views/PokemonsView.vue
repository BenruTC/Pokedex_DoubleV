<template>
  <ListPokemons />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ListPokemons from "../pokemons/components/ListPokemons.vue";

export default defineComponent({
  name: "PokedexView",
  components: {
    ListPokemons,
  },
});
</script>
