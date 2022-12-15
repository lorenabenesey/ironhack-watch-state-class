import { createRouter, createWebHistory } from "vue-router";
import Profile from "./pages/Profile.vue";
import Home from "./pages/Home.vue";
import Watch from "./pages/Watcher.vue";
import Computed from "./pages/Computed.vue";

const routes = [
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/watch",
    name: "Watch",
    component: Watch,
  },
  {
    path: "/computed",
    name: "Computed",
    component: Computed,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_ENV),
  routes,
});

export default router;
