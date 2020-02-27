import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Counter from "../views/Counter.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/counter",
    name: "Counter",
    component: Counter
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
