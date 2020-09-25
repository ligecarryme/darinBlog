import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: '首页'
            }
        },
        {
            path: '/article',
            name: 'article',
            component: Article,
            meta: {
                title: '详情页'
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})


