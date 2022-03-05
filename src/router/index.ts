import FavouritesView from "@/views/FavouritesView.vue";
import { createRouter, createWebHistory } from "vue-router";
import AllCharactersView from "../views/AllCharactersView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "all-characters",
      component: AllCharactersView,
    },
    {
      path: "/favourites",
      name: "favourites",
      component: FavouritesView,
    },
  ],
});

export default router;
