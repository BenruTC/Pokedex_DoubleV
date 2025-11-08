<template>
  <Pokedex></Pokedex>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Pokedex from "../home/components/Pokedex.vue";

export default defineComponent({
  name: "PokedexView",
  components: {
    Pokedex,
  },
});
</script>
