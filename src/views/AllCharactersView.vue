<script setup lang="tsx">
import type Character from "@/models/Character";
import type { TableData, TableHeaders } from "@/models/Table";
import { useCharactersStore } from "@/stores/characters";
import { GenericTable } from "../components/Table.vue";
import Table from "../components/Table.vue";

const CharacterTable = GenericTable<Character>();

const charactersStore = useCharactersStore();
charactersStore.fetchCharacters();

const headers: TableHeaders<Character> = {
  photo: {
    title: "Photo",
    render(row) {
      // console.log(row);
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
  id: {
    title: "Character ID",
  },
  name: {
    title: "Name",
  },
  gender: {
    title: "Gender",
  },
  species: {
    title: "Species",
  },
  episode: {
    title: "Last Episode",
    render(row) {
      return row.episode[row.episode.length - 1].episode;
    },
  },
  favourite: {
    title: "Add To Favourites",
    render: (row) => {
      return (
        <>
          <button>test</button>
        </>
      );
    },
  },
};
</script>

<template>
  <Table :headers="headers" :data="charactersStore.getAllCharacters"> </Table>
  <main>Characters</main>
</template>
