<script lang="ts" setup>
import type { TableHeaderRenderResult } from "@/models/Table";
import type { Component } from "vue";
import { isVNode, computed } from "vue";

const { rendered } = defineProps<{
  rendered: TableHeaderRenderResult;
}>();

const isComponent = computed<boolean>(() => isVNode(rendered));
</script>

<template>
  <component v-if="isComponent" :is="rendered" />
  <template v-else>
    {{ rendered }}
  </template>
</template>
