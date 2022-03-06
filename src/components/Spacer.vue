<template>
  <div :style="css" />
</template>

<script setup lang="ts">
import { computed } from "vue";

const { width } = defineProps<{
  width: string;
}>();

const css = computed(() => ({
  flex: `0 ${width}`,
}));
</script>
