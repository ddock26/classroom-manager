import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  /**
   * Using 'history' mode prevents the use of '#'.
   * It allows server to not do anything - just serve up the index page,
   * so Vue can take care of the routing.
   * '#' is necessary for preventing a request to a server when 'linking.'
   * This is akin to when we use 'anchor tag' (e.g. '#id')
   * https://youtu.be/js5Sr_ZSHDs
   * */
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
