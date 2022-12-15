import homePage from "../pages/Index.vue";
import store from "../store";
import loginPage from "../pages/Login.vue";

export const routes = [
  {
    path: "/",
    name: "login",
    component: loginPage,
  },
  {
    path: "/index",
    name: "index",
    component: homePage,
    beforeEnter(to, from, next) {
      if (!store.state.auth.accessToken) {
        next({ name: "login" });
      }
      next();
    },
  },
];
