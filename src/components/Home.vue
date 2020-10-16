<template>
  <div class="q-pa-md row">
    <!-- blog主页 -->
    <div class="col-lg-8 col-md-6 col-sm-12 q-mt-md">
      <div class="row justify-center q-gutter-sm">
        <q-intersection v-for="item in bloglist" :key="item.id" transition="scale" class="card-item">
          <q-card class="q-ma-sm">
            <q-item clickable v-ripple class="imgItem" to="/article">
              <q-item-section>
                <q-img :src="item.firstPicture" ratio="1" />
              </q-item-section>
            </q-item>
            <q-card-section>
              <div class="text-h6 title">
                <a href="/article">{{ item.title }}</a>
              </div>
              <div class="flex">
                <div class="text-subtitle2">by {{nickname}}</div>
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
        <q-pagination v-model="pagger.current" :max="pagger.total" :max-pages="6" :direction-links="true" :boundary-links="true"></q-pagination>
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
            <q-chip square size="md" clickable @click="toTagPage" v-for="(item,index) of tags" :key="item.id" :color="tagcolor[index]" text-color="white" :icon="tagicon[index]">{{item.name}}</q-chip>
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
              <q-item-label class="recoma">
                <a href="/article" class="text-body1">{{item.title}}</a>
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
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" style="margin-bottom: 0.3em" />
          <q-btn type="a" href="https://github.com/ligecarryme" glossy color="primary" round flat icon="fab fa-github">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">github</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round flat icon="fab fa-qq" @click="sideBar.qqBar = true">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">qq</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round flat icon="fab fa-weixin" @click="sideBar.weChatBar = true">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">wechat</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round flat icon="mail">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">e-mail</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round flat icon="send">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">me</q-tooltip>
          </q-btn>

          <q-dialog v-model="sideBar.qqBar">
            <q-card>
              <q-toolbar style="padding:0;">
                <!-- <q-btn flat round dense icon="close" v-close-popup />                 -->
                <img src="../assets/images/qq.png" style="width:400px;height:716.8px;">
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
export default {
  name: "Home",
  data() {
    return {
      pagger: {
        current: 1,
        total: 6
      },
      sideBar: {
        qqBar: false,
        weChatBar: false,
      },
      bloglist: [{
        id: 1,
        title: 'title',
        firstPicture: 'https://picsum.photos/500',
        updateTime: '2020-10-16 14:04:25',
        description: "If you want something you've never had, you must be willing to do something you've never done.",
      }],
      types: [{ id: 1, name: '学习' }, { id: 2, name: '算法' }, { id: 3, name: '生活' }, { id: 4, name: '工作' }],
      tags: [{ id: 1, name: 'JavaScript' }, { id: 2, name: 'Java' }, { id: 3, name: 'VUE' }, { id: 4, name: 'Html' }, { id: 5, name: 'Spring Boot' },],
      topblogs: [{
        id: 1,
        title: 'title',
        views: '1k',
        description: "If you want something you've never had, you must be willing to do something you've never done.",
      }],
      typeicon: ['fas fa-laptop-code', 'fas fa-atom', 'fas fa-heartbeat', 'fas fa-briefcase'],
      tagicon: ['event', 'bookmark', 'star', 'directions', 'event', 'bookmark', 'star', 'directions'],
      tagcolor: ['primary', 'teal', 'orange', 'red', 'primary', 'teal', 'orange', 'red'],
      nickname: 'darin'
    };
  },
  created: function () {
    this.queryindex();
  },
  methods: {
    queryindex() {
      this.$axios.get('/', { params: { currentPage: this.pagger.current } }).then((res) => {
        const { data } = res;
        if (data.code === 200) {
          const content = data.data;
          console.log(content);
          this.bloglist = content.blog;
          this.pagger.total = content.pageinfo.pages;
          this.types = content.type;
          this.tags = content.tag;
          this.topblogs = content.topBlog;
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    toTagPage() {

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
  a{
    color: #90caf9;
  }
  a:hover {
    color: #2196f3;
  }
}
.recoma{
  a{
    color: #90caf9;
  }
  a:hover {
    color: #2196f3;
  }
}
.descript{
  min-height: 64px;
}
</style>