import Vue from 'vue'
import Router from 'vue-router'
import Article from '../views/Article/article.vue'
import Home from '../views/Home.vue'
import Aboutme from '../views/Aboutme/aboutme.vue'
import Archives from '../views/Archives/archives.vue'
import Tags from '../views/Tags/tags.vue'
import Types from '../views/Types/types.vue'
import Search from '../components/Search/Search.vue'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location){
    return originalPush.call(this, location).catch(err=>err)
}


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
            path: '/search',
            name: 'search',
            component: Search,
            meta: {
                title: '搜索结果'
            }
        },
        {
            path: '/article',
            name: 'article',
            component: Article,
            meta: {
                title: '博客详情'
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


