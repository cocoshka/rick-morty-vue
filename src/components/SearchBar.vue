<script lang="ts" setup>
import { ref } from "vue";

const { filters } = defineProps<{
  filters: {
    [key: string | number]: string
  },
}>();

defineEmits<{
  (event: 'submit', filter: keyof typeof filters): void
}>();

let selectOpened = ref(false);

let selectedOption = ref(Object.keys(filters)[0] as keyof typeof filters);

const onSelectClick = (evt: MouseEvent) => {
  selectOpened.value = !selectOpened.value
};

const onSelectOptionClick = (evt: MouseEvent, key: keyof typeof filters) => {
  selectOpened.value = false
  selectedOption.value = key
};
</script>

<template>
  <div class="search">
    <div class="search-text">Search by</div>
    <div
      class="select"
      :class="{
        'select-opened': selectOpened,
      }"
    >
      <div
        class="select-option"
        @click="onSelectClick($event)"
      >
        {{ filters[selectedOption] }}
      </div>
      <div class="select-options">
        <div
          class="select-option"
          v-for="(name, value) in filters"
          :key="value"
          @click="onSelectOptionClick($event, value)"
        >
          {{ name }}
        </div>
      </div>
    </div>
    <input type="text" />
    <button type="button" @click="$emit('submit', selectedOption)">
      <span class="material-icons">search</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.search {
  display: flex;
  align-items: stretch;
  border: 2px solid $gray;
  border-radius: 8px;
  height: 56px;
  white-space: nowrap;
}

.search-text {
  align-self: center;
  padding: 16px;
}

input {
  color: gray;
  border: none;
  background: none;
  border: none;
  outline: none;
  padding: 16px;
}

button {
  cursor: pointer;
  appearance: none;
  background: transparent;
  border: none;
  outline: none;
  color: $cyan;
  height: 48px;
  width: 48px;
  display: grid;
  flex: 0 0 48px;
  margin: 8px;
  align-self: center;
  justify-content: center;
  align-content: center;
  border-radius: 100%;

  &:hover {
    background-color: $light-gray;
  }

  &:active {
    background: $darker;
  }

  * {
    border-radius: 100%;
    padding: 4px;
    font-size: 36px;
  }
}

.select {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
  user-select: none;

  &.select-opened {
    overflow: visible;

    & > .select-option::after {
      content: "\e5c7";
    }
  }

  & > .select-option {
    position: relative;
    border-top: none;

    &::after {
      display: inline-block;
      font-family: "Material Icons";
      content: "\e5c5";
      font-size: 24px;
      position: absolute;
      right: 8px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.select-option {
  display: grid;
  align-content: center;
  justify-content: left;
  height: 100%;
  border: 2px solid $gray;
  border-bottom: none;
  background-color: white;
  padding: 16px;
  padding-right: 38px;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    background-color: $light-gray;
  }
}

.select-options {
  display: block;
  background-color: white;

  .select-option {
    &:hover {
      background-color: $light-gray;
    }

    &:last-child {
      border-bottom: 2px solid $gray;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
  }
}
</style>
