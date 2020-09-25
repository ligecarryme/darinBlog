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

      <q-tabs v-model="tab" inline-label align="left" class="m-padded-left">
        <q-route-tab to="/" name="home" icon="home" label="首页" />
        <q-route-tab to="/catalog" name="catalog" icon="table_chart" label="分类" />
        <q-route-tab to="/marks" name="marks" icon="bookmarks" label="标签" />
        <q-route-tab to="/library" name="library" icon="library_books" label="归档" />
        <q-route-tab to="/aboutme" name="aboutme" icon="perm_identity" label="关于我" />

        <q-input
          color="teal"
          v-model="text"
          label="search..."
          class="m-padded-ab-right m-padded-bottom-tiny"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </q-tabs>
    </q-header>
    <!-- 右侧边栏 -->
    <q-drawer v-model="right" side="right" overlay behavior="desktop" elevated>
      <!-- drawer content -->
    </q-drawer>
    <!-- 主体 -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- 底部footer -->
    <!-- <q-footer elevated class="bg-grey-8 text-white">
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
  created() { },
};
</script>

<style lang="sass" scoped>
@import "./assets/css/me.css"
</style>
