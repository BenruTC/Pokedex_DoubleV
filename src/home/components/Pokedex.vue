<template>
    <div class="pokedex-view pt-5">
      <div class="d-flex justify-content-center align-items-center">
        <img class="img-logo-main" src="/img/pikachu.png" />
      </div>
      <div class="d-flex justify-content-center mt-3">
        <RouterLink :to="{ name: 'pokemons' }" class="btn btn-danger">Iniciar</RouterLink>
      </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink  } from "vue-router";
/**
 * @namespace Pokedex
 * @description Componente de la primera vista principal cuando se abre el proyecto
 */
</script>