import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article/article.vue'
import Home from '../components/Home.vue'
import Aboutme from '../components/Aboutme/aboutme.vue'
import Archives from '../components/Archives/archives.vue'
import Tags from '../components/Tags/tags.vue'
import Types from '../components/Types/types.vue'

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
            path: '/types',
            name: 'tapes',
            component: Types,
            meta: {
                title: '分类'
            }
        },
        {
            path: '/tags',
            name: 'tags',
            component: Tags,
            meta: {
                title: '标签'
            }
        },
        {
            path: '/archives',
            name: 'archives',
            component: Archives,
            meta: {
                title: '归档'
            }
        },
        {
            path: '/aboutme',
            name: 'aboutme',
            component: Aboutme,
            meta: {
                title: '关于我'
            }
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
})


