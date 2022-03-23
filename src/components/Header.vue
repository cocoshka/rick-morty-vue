<script lang="ts" setup>
import Spacer from "./Spacer.vue";
import SearchBar from "./SearchBar.vue";

const filters = {
  name: "Name",
  identifier: "Identifier",
  episode: "Episode",
};

</script>

<template>
  <header>
      <img src="@/assets/img/logo.png" alt="Rick and Morty logo" />
      <Spacer width="80px" />
      <SearchBar :filters="filters" />
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  // align-content: center;
  height: 134px;
  padding-left: 140px;
  padding-right: 140px;
  border-bottom: 1px solid $light-gray;
}
</style>
