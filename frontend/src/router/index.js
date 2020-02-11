import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/results",
    name: "results",
    component: () =>
      import(/* webpackChunkName: "results" */ "../views/Results.vue")
  },
  {
    path: "/details",
    name: "details",
    component: () =>
      import(/* webpackChunkName: "results" */ "../views/Details.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
