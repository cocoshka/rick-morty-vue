<script setup lang="tsx">
import type Character from "@/models/Character";
import type { TableColumns } from "@/models/Table";
import { useFavouritesStore } from "@/stores/favourites";
import { GenericTable } from "../components/Table.vue";

const favouritesStore = useFavouritesStore();

const headers: TableColumns<Character> = [
  {
    title: "Photo",
    render(row) {
      return (
        <img
          src={row.image}
          width="43"
          height="68"
          style="object-fit: cover;"
        />
      );
    },
  },
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Gender",
    field: "gender",
  },
  {
    title: "Species",
    field: "name",
  },
  {
    title: "Name",
    field: "species",
  },{
    title: "Last Episode",
    render(row) {
      return row.episode[row.episode.length - 1].episode;
    },
  },
  {
    title: "Remove From Favourites",
    render: (row) => {
      return (
        <>
          <button onClick={() => favouritesStore.removeFavourite(row.id)}>Remove</button>
        </>
      );
    },
  }
];
</script>
<script lang="tsx">
export default {
  components: {
    CharacterTable: GenericTable<Character>(),
  },
};
</script>

<template>
  <CharacterTable
    :headers="headers"
    :data="favouritesStore.getFavourites"
  ></CharacterTable>
  <main>Characters</main>
</template>
