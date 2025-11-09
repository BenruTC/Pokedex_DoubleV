<template>
  <div class="input-group input-group-lg sizeInput">
    <input
      type="text"
      class="form-control buscador"
      placeholder="Buscar..."
      @input="filtrar"
      v-model="buscar"
      aria-label="Search"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
    name: "Buscador",
    data() {
        return{
            buscar: '' as String,
        };
    },
    methods: {
        filtrar() {
            this.$emit('filtro', this.buscar)
        }
    }
});
</script>