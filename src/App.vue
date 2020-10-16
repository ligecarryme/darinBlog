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
        <q-input color="teal" borderless v-model="text" label="search..." class="q-ml-md searchBar q-mr-md">
          <template v-slot:append>
            <q-icon name="search" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
    </q-header>
    <!-- 右侧边栏 -->
    <q-drawer v-model="right" side="right" overlay behavior="desktop" elevated>
      <!-- drawer content -->
    </q-drawer>
    <!-- 主体 -->
    <q-page-container :style="{backgroundImage:'url('+ img +')'}">
      <router-view />
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
export default {
  name: "App",
  components: {},
  data() {
    return {
      right: false,
      tab: '',
      text: '',
      img: require('./assets/logo.jpg')
    };
  },
  created() { },
};
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
  color: #616161;
  text-align: center;
  background-image: linear-gradient(to top, #86bcfa 0%, #e7f0fd 100%);
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
</style>
