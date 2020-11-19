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
          <q-route-tab to="/home" name="home" icon="home" label="首页" />
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
      <q-ajax-bar position="top" size="3px" color="warning" />
    </q-page-container>
    <!-- 底部 -->
    <div class="blogFooter">
      <q-separator dark />
      <div class="footer">
        <p>网站已运行 <span>{{footer.date}}</span> 天 总访客数 <span>{{footer.totalperson}}</span> 总浏览量 <span>{{footer.totalviews}}</span></p>
        <p>Hosted at <a href="https://github.com/">Github</a>. Design by Darin. Powered by <a href="https://cn.vuejs.org/">Vue</a>. Theme By <a href="http://www.quasarchs.com/">Quasar</a>. Be monitored throughout <a href="https://tongji.baidu.com/">Baidu tongji</a>.</p>
        <p>Copyright © 2020 豫ICP备2020032759号</p>
      </div>
    </div>
  </q-layout>
</template>

<script>
import particles from './components/ParticlesJS';
import { dateFormat } from './utils/index';
import axios from 'axios';
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
      footer: {
        date: 10,
        totalperson: 666,
        totalviews: 888
      }
      // img: require('./assets/logo.jpg')
    };
  },
  created() { },
  mounted: function () {
    this.queryvisit();
  },
  computed: {},
  methods: {
    queryvisit() {
      let that = this;
      const today = new Date();
      this.footer.date = Math.ceil((today.getTime() - 1604160000000) / (1000 * 3600 * 24));
      const axios_baidu = axios.create({
        baseURL: '/api',
        // baseURL: 'https://api.baidu.com/'
      })
      const data = JSON.stringify({
        "header": { "username": "力哥来carry", "password": "Lige0635", "token": "ff2eb7424d3626148df11df92191af82", "account_type": 1 }, 
        "body": { "site_id": "15982681", "start_date": "20201104", "end_date": dateFormat("YYYYmmdd", today), "order":"visitor_count,desc","metrics": "pv_count,visitor_count,ip_count", "method": "overview/getTimeTrendRpt" } 
      });
      const config = {
        method: 'post',
        url: '/json/tongji/v1/ReportService/getData',
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
        data: data
      };
      axios_baidu(config)
        .then(function (response) {
          const {body:{data}} = response.data;
          const {result : {items}} = data[0];
          const sumPVandUV = (function(){
            let sum = [0,0,0];
            for (const iterator of items[1]) {
              if (iterator[0] === '--') {
                continue;
              }else{
                sum = sum.map((val,index)=>{return iterator[index]+val});
              }
              // console.log(iterator);
            }
            return sum;
          })
          // const total = items[1][items[1].length-1].map((val,index)=>{return val+items[1][items[1].length-2][index]});
          const total = sumPVandUV();
          that.footer.totalperson = total[1];
          that.footer.totalviews = total[0];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
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
    forceRerender() {
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
    padding-top: 20px;
    span {
      font-size: 15px;
    }
    a {
      color: #f55f2d;
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
