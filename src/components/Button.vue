<script lang="tsx" setup>
defineProps<{
    filled?: boolean
}>()

defineEmits<{
    (event: 'click'): boolean | void 
}>()
</script>

<template>
    <button :class="{
        filled
    }" @click="$emit('click')">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
button {
    display: grid;
    justify-content: center;
    align-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid $cyan;
    border-radius: 4px;
    background: white;
    color: $cyan;
    cursor: pointer;

    &.filled {
        background: $cyan;
        border: 2px solid $cyan;
        color: white;
    }
}
</style>