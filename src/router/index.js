import { createRouter, createWebHistory } from "vue-router";
import Threads from "../views/Threads";
import Messages from "../views/Messages";
import Header from "../components/Header";
const routes = [
  {
    path: "/",
    name: "Header",
    component: Header,
  },
  {
    path: "/Threads/1",
    name: "Threads",
    component: Threads,
  },
  {
    path: "/messages/1",
    name: "Messages",
    component: Messages,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
