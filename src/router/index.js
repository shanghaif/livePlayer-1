import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/Home/HomePage'
import Live from '@/components/Live'
import ShortPlayer from '@/components/ShortPlayer'
import Ranking from '@/components/Ranking'
import DownLoad from '@/components/DownLoad'
import LiveRoom from '@/components/LiveRoom/LiveRoom'
import Personal from '@/components/Personal'
import Actions from '../components/Home/ActivityPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: { name: 'HomePage' }},
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path:'/actions',
      name:'Actions',
      component:Actions
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/short-player',
      name: 'ShortPlayer',
      component: ShortPlayer
    },
    {
      path: '/ranking',
      name: 'Ranking',
      component: Ranking
    },
    {
      path: '/down_load',
      name: 'DownLoad',
      component: DownLoad
    },
    {
      path: '/live_room',
      name: 'LiveRoom',
      component: LiveRoom
    },
    {
      path: '/personal',
      name: 'Personal',
      component: Personal
    },
  ]
})