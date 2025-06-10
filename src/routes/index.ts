import { createWebHistory, createRouter } from "vue-router";

import Home from "../modules/home/index.vue";
import Login from "../modules/login/Index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
