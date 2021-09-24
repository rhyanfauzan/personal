import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "../views/NotFound.vue";
// import Preview from "../views/Preview.vue";
import CreativePortfolioTwo from "../views/all-home-version/CreativePortfolioTwo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CreativePortfolioTwo",
    meta: {
      title: "Ryan",
    },
    component: CreativePortfolioTwo,
  },
  {
    path: "/main-demo",
    name: "MainDemo",
    meta: {
      title: "Main Demo",
    },
    component: () => import("../views/all-home-version/MainDemo.vue"),
  },
  {
    path: "/creative-portfolio",
    name: "CreativePortfolio",
    meta: {
      title: "Creative Portfolio",
    },
    component: () => import("../views/all-home-version/CreativePortfolio.vue"),
  },
  {
    path: "/modern-portfolio",
    name: "ModernPortfolio",
    meta: {
      title: "Modern Portfolio",
    },
    component: () => import("../views/all-home-version/ModernPortfolio.vue"),
  },
  {
    path: "/creative-portfolio-02",
    name: "CreativePortfolioTwo",
    meta: {
      title: "Ryan",
    },
    component: () => import("../views/all-home-version/CreativePortfolioTwo.vue"),
  },
  {
    path: "*",
    name: NotFound,
    meta: {
      title: "404",
    },
    component: () => import("../views/NotFound.vue"),
  },
];
const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.afterEach((to) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title + " | Personal Portfolio Site";
  }
});

export default router;
