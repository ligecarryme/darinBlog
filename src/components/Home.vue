<template>
  <div class="q-pa-md row">
    <!-- blog主页 -->
    <div class="col-lg-8 col-md-6 col-sm-12">
      <div class="row justify-center q-gutter-sm">
        <q-intersection v-for="index in 6" :key="index" transition="scale" class="card-item">
          <q-card class="q-ma-sm">
            <q-item clickable v-ripple class="imgItem" to="/article">
              <q-item-section>
                <q-img src="https://cdn.quasar.dev/img/mountains.jpg" />
              </q-item-section>
            </q-item>
            <q-card-section>
              <div class="text-h6 blogTitle">
                <a href="/article">Card #{{ index }}</a>
              </div>
              <div style="display:flex;">
                <div class="text-subtitle2">by John Doe</div>
                <div class="q-ml-md">
                  <q-icon name="far fa-calendar-alt" size="mini"></q-icon>
                  <span class="q-ml-xs">2020-09-26</span>
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">{{ content }}</q-card-section>
          </q-card>
        </q-intersection>
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination v-model="current" :max="10" :max-pages="6" :direction-links="true"></q-pagination>
      </div>
    </div>

    <!-- 右边侧栏 -->
    <div class="col-lg-4 col-md-6 col-sm-12" align="center">
      <q-card class="my-card q-mt-sm">
        <q-card-section class="bg-blue-3 text-white">
          <div class="text-h6">分类</div>
        </q-card-section>
        <div class="q-pa-md" style="max-width: 100%">
          <q-list bordered>
            <q-item clickable v-ripple>
              <q-item-section>Icon as avatar</q-item-section>
              <q-item-section avatar>
                <q-icon color="primary" name="bluetooth" />
              </q-item-section>
            </q-item>
            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section>Avatar-type icon</q-item-section>
              <q-item-section avatar>
                <q-avatar color="teal" text-color="white" icon="bluetooth" />
              </q-item-section>
            </q-item>
            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section>Rounded avatar-type icon</q-item-section>
              <q-item-section avatar>
                <q-avatar rounded color="purple" text-color="white" icon="bluetooth" />
              </q-item-section>
            </q-item>
            <q-separator />

            <q-item clickable v-ripple>
              <q-item-section>Letter avatar-type</q-item-section>
              <q-item-section avatar>
                <q-avatar color="primary" text-color="white">R</q-avatar>
              </q-item-section>
            </q-item>
          </q-list>
        </div>

        <q-card-actions align="around">
          <div class="q-pa-md q-gutter-md"></div>
        </q-card-actions>
      </q-card>
      <q-card class="my-card q-mt-lg">
        <q-card-section class="bg-indigo-3 text-white">
          <div class="text-h6">标签</div>
        </q-card-section>

        <q-card-actions align="around">
          <div class="q-pa-md q-gutter-md">
            <q-chip square color="primary" text-color="white" icon="event">Add to calendar</q-chip>
            <q-chip class="glossy" square color="teal" text-color="white" icon="bookmark">Bookmark</q-chip>
            <q-chip square color="orange" text-color="white" icon-right="star">Star</q-chip>
            <q-chip square color="red" text-color="white" icon="alarm" label="Set alarm" />
            <q-chip square color="deep-orange" text-color="white" icon="directions">Get directions</q-chip>
            <q-chip square color="primary" text-color="white" icon="event">Add to calendar</q-chip>
            <q-chip class="glossy" square color="teal" text-color="white" icon="bookmark">Bookmark</q-chip>
            <q-chip square color="orange" text-color="white" icon-right="star">Star</q-chip>
            <q-chip square color="red" text-color="white" icon="alarm" label="Set alarm" />
            <q-chip square color="deep-orange" text-color="white" icon="directions">Get directions</q-chip>
          </div>
        </q-card-actions>
      </q-card>
      <q-card class="my-card q-mt-lg">
        <q-card-section class="bg-purple-3 text-white">
          <div class="text-h6">最新推荐</div>
        </q-card-section>

        <q-card-actions align="around">
          <q-item-label header>List Header</q-item-label>

          <q-item>
            <q-item-section avatar></q-item-section>
            <q-item-section>List item</q-item-section>
            <q-item-section side>
              <q-item-label caption>meta</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator spaced inset="item" />

          <q-item>
            <q-item-section top avatar>
              <q-avatar color="primary" text-color="white" icon="bluetooth" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption lines="2">Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>5 min ago</q-item-label>
              <q-icon name="star" color="yellow" />
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section top avatar>
              <q-avatar rounded>
                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>meta</q-item-label>
            </q-item-section>
          </q-item>
          <q-separator spaced inset="item" />

          <q-item>
            <q-item-section top avatar>
              <q-avatar color="primary" text-color="white" square icon="bluetooth" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Single line item</q-item-label>
              <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
            </q-item-section>

            <q-item-section side top>
              <q-item-label caption>meta</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-actions>
      </q-card>
      <q-card class="my-card q-mt-lg">
        <q-card-section class="bg-teal text-white">
          <div class="text-h6">联系我</div>
        </q-card-section>

        <q-card-actions align="around">
          <q-img src="https://cdn.quasar.dev/img/mountains.jpg" style="margin-bottom: 0.3em" />
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
          <q-btn glossy color="primary" round flat icon="send">
            <q-tooltip transition-show="rotate" transition-hide="rotate" max-height="200px" max-width="200px">me</q-tooltip>
          </q-btn>

          <q-dialog v-model="qqBar">
            <q-card>
              <q-toolbar style="padding:0;">
                <!-- <q-btn flat round dense icon="close" v-close-popup />                 -->
                <img src="../assets/images/qq.png" style="width:400px;height:716.8px;">
              </q-toolbar>
            </q-card>
          </q-dialog>

         <q-dialog v-model="weChatBar">
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
      right: false,
      qqBar: false,
      weChatBar: false,
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      current: 1,
    };
  },
};
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
  }
}
.blogTitle {
  a {
    color: #90caf9;
  }
  a:hover {
    color: #2196f3;
  }
}
// .row > div
//   padding: 5px 10px
// background: rgba(86,61,124,.15)
// border: 1px solid rgba(86,61,124,.2)

// .row + .row
//   margin-top: 1rem
</style>