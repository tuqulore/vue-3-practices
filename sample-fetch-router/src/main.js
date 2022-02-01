import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from "./App.vue"
import PostList from './components/PostList.vue';
import PostDetail from './components/PostDetail.vue'

const routes = [
  { path: '/', component: PostList },
  { name: 'post', path: '/post/:id', component: PostDetail }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')
