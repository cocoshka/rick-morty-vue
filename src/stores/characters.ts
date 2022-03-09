import type Character from "@/models/Character";
import { defineStore } from "pinia";

type State = {
  characters: Character[];
};

const characterQuery = () => `
{
  characters {
    info {
      count
      pages
    }
    results {
      id
      name
      species
      gender
      image
      episode {
        episode
      }
    }
  }
}`;

export const useCharactersStore = defineStore({
  id: "characters",
  state: (): State => ({
    characters: [],
  }),
  getters: {
    getAllCharacters(): Character[] {
      return this.characters;
    },
  },
  actions: {
    async fetchCharacters() {
      await fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ query: characterQuery() }),
      })
        .then((resp) => resp.json())
        .then((result) => {
          this.characters = result.data.characters.results;
        });
    },
  },
});
