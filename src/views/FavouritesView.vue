<script setup lang="tsx">
import Button from "@/components/Button.vue";
import type Character from "@/models/Character";
import type { TableColumns } from "@/models/Table";
import { useFavouritesStore } from "@/stores/favourites";
import { GenericTable } from "../components/Table.vue";

const CharacterTable = GenericTable<Character>();

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
    title: "Character ID",
    field: "id",
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
    field: "species",
  },
  {
    title: "Last Episode",
    render(row) {
      return row.episode[row.episode.length - 1].episode;
    },
  },
  {
    title: "Add To Favourites",
    render: (row) => {
      return (
        <Button
          filled={row.id in favouritesStore.favourites}
          onClick={() =>
            row.id in favouritesStore.favourites
              ? favouritesStore.removeFavourite(row.id)
              : favouritesStore.addFavourite(row)
          }
        >
          <span class="material-icons">star</span>
        </Button>
      );
    },
  },
];
</script>

<template>
  <CharacterTable
    :headers="headers"
    :data="favouritesStore.getFavourites"
  ></CharacterTable>
</template>
