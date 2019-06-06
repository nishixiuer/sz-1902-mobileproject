import Vue from 'vue'
import Router from "vue-router";
import discover from "./discover"
import discoverShopping from './shopping'
import homePage from "./homePage/index"
import search from './search'
import informations from './informations'
import BuyTicket from './BuyTicket'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
<<<<<<< HEAD
      redirect:"/discover"
=======
      redirect:"/FP"
>>>>>>> lqd
    },
    discover,
    discoverShopping,
    homePage,
    search,
    informations,
    BuyTicket
  ]
})
