<template>
  <q-layout view="hHh lpR fFf">
    <!-- 顶部导航栏 -->
    <q-header elevated class="bg-blue-4 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="m-margin-left">
          <q-avatar class>
            <img src="./assets/logo.jpg" />
          </q-avatar>&nbsp;
          Darin's Blog
        </q-toolbar-title>
        <q-btn dense flat round icon="menu" @click="right = !right" />
      </q-toolbar>
      <div class="headerTabs">
        <q-tabs v-model="tab" inline-label align="left" class="m-padded-left">
          <q-route-tab to="/" name="home" icon="home" label="首页" />
          <q-route-tab to="/catalog" name="catalog" icon="table_chart" label="分类" />
          <q-route-tab to="/marks" name="marks" icon="bookmarks" label="标签" />
          <q-route-tab to="/library" name="library" icon="library_books" label="归档" />
          <q-route-tab to="/aboutme" name="aboutme" icon="perm_identity" label="关于我" />
        </q-tabs>
        <q-input color="teal" borderless v-model="text" label="search..." class="q-ml-md searchBar m-margin-right" align="right">
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
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- 底部 -->
    <div class="blogFooter">
      <div class="footerfirst">
        <h5>Blog</h5>
        <p>这是我的个人博客、会分享关于编程、写作、思考相关的任何内容，希望可以给来到这儿的人有所帮助...</p>
      </div>
      <q-separator dark />
      <div class="footersecond">
        <p>网站已运行1天，托管于<a href="https://github.com/">Github</a></p>
        <p>design by Darin</p>
        <p>Copyright © 2020-2020</p>
      </div>
    </div>
    <!-- <q-footer reveal elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./assets/logo.jpg" />
          </q-avatar>&nbsp;Footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>-->
  </q-layout>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="scss" scoped>
@import "./assets/css/me.css";
.headerTabs {
  display: flex;
  justify-content: space-between;
}
.searchBar {
  overflow: hidden;
}

.blogFooter {
  height: 150px;
  color: #616161;
  background-color: #232323;
  text-align: center;
  .footerfirst {
    padding-top: 10px;
    h5 {
      color: aliceblue;
      font-size: 20px;
      margin: 0;
    }
    p {
      margin: 5px 0px;
    }
  }
  .footersecond {
    padding-top: 5px;
    a {
      color: #795548;
      z-index: 3;
    }
    a:hover {
      color: aliceblue;
    }
  }
  p {
    margin: 0;
  }
}
</style>
