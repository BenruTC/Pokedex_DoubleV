<template>
  <MainLayout>
    <RouterView/>
  </MainLayout>
</template>
<script setup lang="ts">
import { defineComponent } from "vue";
import { RouterView  } from "vue-router";
import MainLayout from "./layouts/MainLayout.vue";
</script>
<style scoped></style>
