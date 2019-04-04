import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations
  mode: "history",

  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: () =>
        import(/* webpackChunkName: "dashboard" */ "./views/Dashboard.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Login.vue")
    }
  ]
});
