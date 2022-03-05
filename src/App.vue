<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/">All Characters</RouterLink>
    <RouterLink to="/favourites">Favourites</RouterLink>
  </nav>

  <RouterView />
</template>

<style lang="scss">
@import "normalize.css";
</style>
