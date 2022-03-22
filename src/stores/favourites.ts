import type Character from "@/models/Character";
import { defineStore } from "pinia";

type State = {
  favourites: Record<number, Character>;
};

export const useFavouritesStore = defineStore({
  id: "favourites",
  state: (): State => ({
    favourites: {},
  }),
  localStorage: true,
  getters: {
    getFavourites(): Character[] {
      return Object.values(this.favourites);
    },
  },
  actions: {
    addFavourite(character: Character): void {
        this.favourites[character.id] = character;
    },
    removeFavourite(id: number): void {
      delete this.favourites[id];
    }
  },
});
