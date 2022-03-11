<script lang="ts" setup>
import type { TableRenderResult } from "@/models/Table";
import { isVNode, computed } from "vue";

const { rendered } = defineProps<{
  rendered: TableRenderResult;
}>();

const isComponent = computed<boolean>(() => isVNode(rendered));
</script>

<template>
  <component v-if="isComponent" :is="rendered" />
  <template v-else>
    {{ rendered }}
  </template>
</template>
