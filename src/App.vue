<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";
</script>

<template>
  <Header />
  <Navigation />
  <RouterView />
</template>

<style lang="scss">
@import "normalize.css";

#app {
  color: #a9b1bd;
  font-family: "Poppins", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
