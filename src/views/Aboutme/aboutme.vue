<template>
  <div class="q-pa-md q-mt-lg">
    <!-- <div class="text-body2 text-center q-mb-xs text-brown">Are you winning son? --video from bilibili</div> -->
    <q-card class="sonVideo">
      <!-- <video poster="@/assets/images/son.png" playsinline loop atuobuffer controls width="852" height="480">
        <source type="video/mp4" :src="require('@/assets/video/son.mp4')">
      </video> -->
      <iframe src="//player.bilibili.com/player.html?aid=329349812&bvid=BV1gA411n7vA&cid=227579539&page=1&high_quality=1&as_wide=1" width="852" height="480" border="0" frameborder="no" framespacing="0" allowfullscreen="true" sandbox="allow-top-navigation allow-same-origin allow-scripts"> </iframe>
    </q-card>
    <div class="row justify-center q-my-md">
      <q-card class="my-card q-ma-md">
        <q-card-section class="bg-cyan text-white text-center">
          <div class="text-h6">关于我</div>
        </q-card-section>
        <q-card-section>
          <q-img :src="require('@/assets/images/aboutme.png')" style="height: 140px; max-width: 150px" />
          <div class="text-body1">欢迎你的来到！ 我是一个啥也不会但是很努力的小白，在这里记录每天学到知识，一起进步吧！</div>
        </q-card-section>
        <q-card-section class="column items-center">
          <transition appear enter-active-class="animated wobble slow" leave-active-class="animated wobble slow">
            <div v-show="helloshow" class="text-body1 text-center q-mb-md">Do you like my blog ?</div>
          </transition>
          <q-btn color="white" text-color="black" label="Encourage" @click="encourage" />
        </q-card-section>
      </q-card>
      <q-card class="my-card q-ma-md">
        <q-card-section class="bg-cyan-8 text-white text-center">
          <div class="text-h6">联系我</div>
        </q-card-section>
        <q-card-actions align="around">
          <q-img :ratio="3/2" :src="require('@/assets/images/me.png')" style="margin-bottom: 0.3em;">
            <transition appear enter-active-class="animated fadeIn slow" leave-active-class="animated fadeOut slow">
              <div v-if="helloshow" class="text-black helloworld" v-html="helloworld"></div>
            </transition>
          </q-img>
          <q-separator inset class="q-mb-xs" />
          <q-btn type="a" href="https://github.com/ligecarryme" glossy color="primary" round flat icon="fab fa-github">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">github</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round flat icon="fab fa-qq" @click="qqBar = true">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">qq</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round flat icon="fab fa-weixin" @click="weChatBar = true">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">wechat</q-tooltip>
          </q-btn>
          <q-btn glossy color="primary" round flat icon="mail">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">e-mail</q-tooltip>
          </q-btn>

          <q-dialog v-model="qqBar">
            <q-card>
              <q-toolbar style="padding:0;">
                <!-- <q-btn flat round dense icon="close" v-close-popup />                 -->
                <img src="@/assets/images/qq.png" style="width:400px;height:716.8px;">
              </q-toolbar>
            </q-card>
          </q-dialog>

          <q-dialog v-model="weChatBar">
            <q-card>
              <q-toolbar style="padding:0;">
                <!-- <q-btn flat round dense icon="close" v-close-popup />                 -->
                <img src="@/assets/images/wechat.png" style="width:400px;height:400px;">
              </q-toolbar>
            </q-card>
          </q-dialog>
        </q-card-actions>
      </q-card>
    </div>

  </div>
</template>
<script>
import '@quasar/extras/animate/fadeIn.css'
import '@quasar/extras/animate/fadeOut.css'
import '@quasar/extras/animate/wobble.css'
export default {
  data() {
    return {
      qqBar: false,
      weChatBar: false,
      helloshow: true,
      helloworld: `<div style="text-align:center;">程序员必读书目 </br>
                《代码大全》 </br>
                《程序员修炼之道》 </br>
                《如何优雅的删库跑路》</div>`
    }
  },
  mounted: function () {
    this.showIn();
  },
  computed: {},
  methods: {
    encourage() {
      // 点赞功能
    },
    showIn() {
      this.helloshow = true;
      setTimeout(() => {
        this.showOut();
      }, 5000)
    },
    showOut() {
      this.helloshow = false;
      setTimeout(() => {
        this.showIn();
      }, 3000)
    }
  }
}
</script>
<style lang="scss" scoped>
.my-card {
  width: 430px;
  height: 400px;
}
.slow {
  -webkit-animation-duration: 5s;
  animation-duration: 5s;
}
.helloworld {
  background: transparent;
  position: relative;
  top: 73px;
  left: -33px;
}
.sonVideo {
  z-index: 999;
  width: 852px;
  height: 480px;
  margin: 0 auto 0 auto;
}
</style>