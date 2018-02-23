import Vue from 'vue'
import Router from 'vue-router'
import Home from "@/components/Home";
import Porfolio from "@/components/portfolio/Portfolio";
import Stocks from "@/components/stocks/Stocks";

import shopRouters from '@/modules/shop/route/index';

Vue.use(Router)
const baseRoutes =  [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/portfolio",
    name: "Porfolio",
    component: Porfolio
  },
  {
    path: "/stocks",
    name: "Stocks",
    component: Stocks
  }
];

const routes = baseRoutes.concat(shopRouters);

export default new Router({
  routes: routes
});