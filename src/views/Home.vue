<template>
  <div class="q-pa-md row">
    <!-- blog主页 -->
    <div class="col-lg-8 col-md-6 col-sm-12 q-mt-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection v-for="item in bloglist" :key="item.id" once transition="scale" class="card-item">
          <q-card class="q-ma-sm my-card">
            <q-item clickable v-ripple class="imgItem" :to="'/article?id=' + item.id">
              <q-item-section>
                <q-img :src="item.firstPicture" ratio="1" spinner-color="amber" />
              </q-item-section>
            </q-item>
            <q-card-section>
              <div class="text-h6 title">
                <a :href="'/article?id=' + item.id">{{ item.title }}</a>
              </div>
              <div class="flex">
                <div class="text-subtitle2">by {{item.user['nickname']}}</div>
                <div class="q-ml-md">
                  <q-icon name="far fa-calendar-alt" size="mini"></q-icon>
                  <span class="q-ml-xs">{{item.updateTime}}</span>
                </div>
              </div>
            </q-card-section>
            <!-- 文章简介 -->
            <q-card-section class="q-pt-none text-body1 descript">{{ item.description }}</q-card-section>
          </q-card>
        </q-intersection>
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination v-model="pagger.current" :max="pagger.total" :max-pages="6" :direction-links="true" :boundary-links="true" @click="queryindex"></q-pagination>
      </div>
    </div>

    <!-- 右边侧栏 -->
    <div class="col-lg-4 col-md-6 col-sm-12 q-mt-lg column items-center">
      <q-card class="my-card">
        <q-card-section class="bg-blue-3 text-white">
          <div class="text-h6 text-center">分类</div>
        </q-card-section>
        <div class="q-pa-md" style="max-width: 100%">
          <q-list bordered separator v-for="(item,index) in types" :key="item.id">
            <q-item clickable v-ripple to="/types">
              <q-item-section class="text-body1">{{item.name}}</q-item-section>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white" :icon="typeicon[index]"></q-avatar>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
        <!--  空白栏
        <q-card-actions align="around">
          <div class="q-pa-md q-gutter-md"></div>
        </q-card-actions> -->
      </q-card>
      <q-card class="my-card q-mt-lg">
        <q-card-section class="bg-indigo-3 text-white">
          <div class="text-h6 text-center">标签</div>
        </q-card-section>
        <q-card-actions align="around">
          <div class="q-pa-md q-gutter-md flex justify-around">
            <q-chip square size="md" clickable @click="toTagPage" v-for="(item,index) of tags" :key="item.id" :color="tagcolor[index % 5]" text-color="white" :icon="tagicon[index % 8]">{{item.name}}</q-chip>
          </div>
        </q-card-actions>
      </q-card>
      <q-card class="my-card q-mt-lg">
        <q-card-section class="bg-purple-3 text-white">
          <div class="text-h6 text-center">最新推荐</div>
        </q-card-section>
        <div class="q-pa-md">
          <q-item v-for="item of topblogs" :key="item.id" style="border-bottom: 1px solid rgba(0, 0, 0, 0.12)">
            <q-item-section>
              <q-item-label class="title">
                <a :href="'/article?id='+item.id" class="text-body1">{{item.title}}</a>
              </q-item-label>
              <q-item-label caption>
                <span class="text-body2">{{item.description}}</span>
              </q-item-label>
            </q-item-section>
            <q-item-section side top>
              <q-badge color="teal" :label="item.views" />
              <div class="text-orange" v-show="item.recommend">
                <q-icon name="star" />
                <q-icon name="star" />
                <q-icon name="star" />
              </div>
            </q-item-section>
          </q-item>
        </div>
      </q-card>
      <q-card class="my-card q-mt-lg">
        <q-card-section class="bg-teal text-white">
          <div class="text-h6 text-center">联系我</div>
        </q-card-section>
        <q-card-actions align="around">
          <q-img :ratio="3/2" :src="require('../assets/images/me.png')" style="margin-bottom: 0.3em;">
            <transition appear enter-active-class="animated tada slow" leave-active-class="animated flipOutY slow">
              <div v-if="helloshow" class="text-black helloworld" v-html="helloworld"></div>
            </transition>
          </q-img>
          <q-separator inset class="q-mb-xs" />
          <q-btn type="a" href="https://github.com/ligecarryme" glossy color="primary" round icon="fab fa-github">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">github</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round icon="fab fa-qq" @click="sideBar.qqBar = true">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">qq</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round icon="fab fa-weixin" @click="sideBar.weChatBar = true">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">wechat</q-tooltip>
          </q-btn>
          <q-btn type="a" href="https://mail.google.com" glossy color="primary" round icon="mail">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">e-mail</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round icon="send" to="/aboutme">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">me</q-tooltip>
          </q-btn>
          <q-dialog v-model="sideBar.qqBar">
            <q-card>
              <q-toolbar style="padding:0;">
                <!-- <q-btn flat round dense icon="close" v-close-popup />                 -->
                <img src="../assets/images/qq.png" style="width:300px;height:537.6px;">
              </q-toolbar>
            </q-card>
          </q-dialog>

          <q-dialog v-model="sideBar.weChatBar">
            <q-card>
              <q-toolbar style="padding:0;">
                <!-- <q-btn flat round dense icon="close" v-close-popup />                 -->
                <img src="../assets/images/wechat.png" style="width:400px;height:400px;">
              </q-toolbar>
            </q-card>
          </q-dialog>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>

<script>
import '@quasar/extras/animate/tada.css'
import '@quasar/extras/animate/flipOutY.css'
export default {
  name: "Home",
  data() {
    return {
      helloshow: true,
      helloworld: `<div><span style="color: #1976d2">System.out.println</span> </br> 
                  <span style="color: #6a8759">('Hello World')</span></br> 
                  <span style="color: #4caf50"> su - </span></br> 
                  <span style="color: #f2c037"> rm -rf /*</span></div>`,
      pagger: {
        current: 1,
        total: 1
      },
      sideBar: {
        qqBar: false,
        weChatBar: false,
      },
      bloglist: [],
      types: [],
      tags: [],
      topblogs: [],
      typeicon: ['fas fa-laptop-code', 'fas fa-atom', 'fas fa-heartbeat', 'fas fa-briefcase'],
      tagicon: ['keyboard', 'bookmark', 'star', 'photo_camera', 'eco', 'flag', 'cloud', 'mouse'],
      tagcolor: ['primary', 'teal', 'orange', 'red', 'warning'],
    }
  },
  created: function () {
    this.queryindex();
    this.showIn();
  },
  methods: {
    queryindex() {
      this.$axios.get('/', { params: { currentPage: this.pagger.current } }).then((res) => {
        const { data } = res;
        if (data.code === 200) {
          const content = data.data;
          let blogs = content.blog;
          this.bloglist = this.handleDescript(blogs, 45);
          this.pagger.total = content.pageinfo.pages;
          this.types = content.type;
          this.tags = content.tag;
          this.topblogs = this.handleDescript(content.topBlog, 60);
          this.user = content.user;
        }
      }).catch((err) => {
        console.log(err);
      })
    },
    toTagPage() {
      this.$router.push('/tags')
    },
    handleDescript(list, count) {
      if (!list) {
        return;
      }
      for (let item of list) {
        if (item.description.length > count) {
          item.description = item.description.slice(0, count) + '...'
        }
      }
      return list;
    },
    showIn(){
      this.helloshow = true;
      setTimeout(()=>{
        this.showOut();
      },5000)
    },
    showOut(){
      this.helloshow = false;
      setTimeout(()=>{
        this.showIn();
      },3000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/me.css";

.card-item {
  height: 450px;
  width: 450px;
}

.my-card {
  width: 100%;
  max-width: 430px;
}

.imgItem {
  padding: 6px 6px;
  .q-img {
    max-width: 422px;
    max-height: 281px;
  }
}
.title {
  a {
    color: #90caf9;
  }
  a:hover {
    color: #2196f3;
  }
}
.descript {
  min-height: 64px;
}
.slow {
  -webkit-animation-duration: 3s;
          animation-duration: 3s;
}
.helloworld{
  background: transparent;
  position: relative;
  top: 73px;
  left: 95px;
}
</style>