<script lang="ts" setup>
import Spacer from "./Spacer.vue";
</script>
<template>
  <nav>
    <RouterLink class="link" to="/">All Characters</RouterLink>
    <Spacer width="80px" />
    <RouterLink class="link" to="/favourites">Favourites</RouterLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  height: 78px;
  padding-left: 140px;
  padding-right: 140px;
}

.link {
  position: relative;
  white-space: nowrap;

  &,
  &:hover,
  &:visited {
    color: $gray;
    text-decoration: none;
  }

  &.router-link-active {
    color: $cyan;

    &::before {
      display: block;
      content: "";
      position: absolute;
      bottom: -3px;
      height: 3px;
      left: 0;
      right: 0;
      background-color: $cyan;
    }
  }
}
</style>
