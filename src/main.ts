import "core-js/actual"

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import LocalStoragePlugin from "./stores/LocalStoragePlugin"

const pinia = createPinia();
pinia.use(LocalStoragePlugin)

const app = createApp(App);
app.use(pinia);
app.use(router);

app.mount("#app");
