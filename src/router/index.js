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
      redirect:"/FP"
    },
    discover,
    discoverShopping,
    homePage,
    search,
<<<<<<< HEAD
    informations
<<<<<<< HEAD
>>>>>>> lqd
=======
import homePage from "./homePage/index"
import BuyTicket from "./BuyTicket"
import cinemaSearch from "./cinemaSearch"
Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path:"/",
      redirect:"/BuyTicket"
    },
    cinemaSearch,
    discover,
    homePage,
    BuyTicket
>>>>>>> tsh
=======
>>>>>>> a8f65c2c6ef3a3a78dfbb96f6ac3aec12f75bb78
=======
    informations,
    BuyTicket
>>>>>>> b7447a91a47d2a9299dd11034db36eac95319a02
  ]
})
