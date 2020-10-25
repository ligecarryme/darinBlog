<template>
  <q-layout view="hHh lpR fFf">
    <!-- 顶部导航栏 -->
    <q-header elevated class="bg-blue-4 text-white" height-hint="98">
      <q-toolbar class="q-ml-md">
        <q-avatar>
          <img src="./assets/logo.jpg" />
        </q-avatar>
        <q-toolbar-title>Darin's Blog</q-toolbar-title>
        <!-- 右侧菜单开启按钮 -->
        <!-- <q-btn dense flat round icon="menu" @click="right = !right" class="q-mr-md" /> -->
      </q-toolbar>
      <div class="headerTabs">
        <q-tabs v-model="tab" inline-label align="left" class="q-pl-md">
          <q-route-tab to="/" name="home" icon="home" label="首页" />
          <q-route-tab to="/types" name="types" icon="table_chart" label="分类" />
          <q-route-tab to="/tags" name="tags" icon="bookmarks" label="标签" />
          <q-route-tab to="/archives" name="archives" icon="library_books" label="归档" />
          <q-route-tab to="/aboutme" name="aboutme" icon="perm_identity" label="关于我" />
        </q-tabs>
        <!-- 搜索框 -->
        <q-form ref="searchform" @submit.prevent="simulateSubmit">
          <q-input type="search" color="grey-3" dark standout borderless v-model="searchtext" label="search..." class="q-ml-md searchBar q-mr-md">
            <template v-slot:append>
              <q-btn round flat icon="search" type="button" class="q-pt-xs" :loading="load" @click="search" />
            </template>
          </q-input>
        </q-form>
      </div>
    </q-header>
    <!-- 右侧边栏 -->
    <q-drawer v-model="right" side="right" overlay behavior="desktop" elevated>
      <!-- drawer content -->
    </q-drawer>
    <!-- 主体 :style="{backgroundImage:'url('+ img +')'}"-->
    <q-page-container class="bg">
      <particles />
      <router-view :key="componentKey" />
      <q-ajax-bar position="top" size="3px" color="warning"/>
    </q-page-container>
    <!-- 底部 -->
    <div class="blogFooter">
      <q-separator dark />
      <div class="footer">
        <p>网站已运行<span>1</span>天 总访客数<span>888</span> 总浏览量<span>888</span></p>
        <p>托管于<a href="https://github.com/">Github</a>. Design by Darin. Powered by <a href="https://cn.vuejs.org/">Vue</a>. Theme By <a href="http://www.quasarchs.com/">Quasar</a>.</p>
        <p>Copyright © 2020-2020</p>
      </div>
    </div>
  </q-layout>
</template>

<script>
import particles from './components/ParticlesJS';
export default {
  name: "App",
  components: { particles },
  data() {
    return {
      componentKey: 0,
      load: false,
      right: false,
      tab: '',
      searchtext: '',
      // img: require('./assets/logo.jpg')
    };
  },
  created() {},
  computed: {},
  methods: {
    simulateSubmit() {
      setTimeout(() => {
        this.search();
        this.$refs.searchform.reset();
      }, 100)
    },
    search() {
      if (!this.searchtext) {
        this.$q.notify({
          position: 'top',
          message: '请输入查询条件',
          color: 'negative',
          timeout: '1200',
          icon: 'report_problem'
        })
        return;
      }
      this.load = true;
      setTimeout(() => {
        this.load = false;
        this.searchtext = '';
      }, 500)
      this.$router.push({ path: '/search', query: { param: this.searchtext } });
      this.forceRerender();
    },
    forceRerender(){
      this.componentKey += 1; 
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/css/me.css";
.q-tabs {
  width: 100%;
}
.headerTabs {
  display: flex;
  justify-content: space-between;
}
.searchBar {
  overflow: hidden;
}
.blogFooter {
  height: 100px;
  position: relative;
  color: #616161;
  text-align: center;
  background-image: linear-gradient(
    to top,
    #64b5f6 0%,
    #93bef7 50%,
    #ffffff 100%
  ); // #86bcfa
  .footer {
    padding-top: 15px;
    a {
      color: #795548;
      z-index: 3;
    }
    a:hover {
      color: blue;
    }
  }
  p {
    margin: 0;
  }
}
.bg {
  position: relative;
  min-height: 836px;
}
</style>
