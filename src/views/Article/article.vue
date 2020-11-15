<template>
  <div class="q-mt-md">
    <!--  -->
    <q-resize-observer @resize="onResize" />
    <q-drawer v-model="drawer" side="right" persistent overlay behavior="desktop" :width="180">
      <div id="toc" class="toc"></div>
      <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[30, 18]">
        <q-btn fab icon="keyboard_arrow_up" color="blue-grey" />
      </q-page-scroller>
    </q-drawer>

    <q-card class="blogDetailCard q-mt-lg">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img :src="user.avatar">
          </q-avatar>
        </q-item-section>
        <q-item-section class="blogDetailHeader" side>
          <div class="q-mt-sm q-mr-md">
            <q-icon name="event" size="sm"></q-icon>
            <span class="q-ml-xs">{{blogdetail.updateTime}}</span>
          </div>
          <div class="q-mt-sm">
            <q-icon name="visibility" size="sm"></q-icon>
            <span class="q-ml-xs">{{blogdetail.views}}</span>
          </div>
        </q-item-section>
        <q-card-actions class="blogDetailShare">
          <!-- <q-btn flat round color="red" icon="favorite" ripple="center" /> -->
          <q-rating v-model="heart" max="1" size="2em" color="red" color-selected="red-9" icon="favorite_border" icon-selected="favorite" icon-half="favorite" no-dimming />
          <q-btn flat round color="primary" class="q-ml-md" icon="share" @click="shareblog('right')" />
        </q-card-actions>
      </q-item>
      <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="300" />
      <div class="row justify-between">
        <q-chip square class="q-ma-md" v-for="item of blogdetail.tags" :key="item.id">
          <q-avatar icon="bookmark" color="red" text-color="white" />
          {{item.name}}
        </q-chip>
        <q-space />
        <div class="q-ma-md">
          <q-btn outline style="color: goldenrod;" :label="blogdetail.flag" size="11px" />
        </div>
      </div>
      <!-- 博客内容 -->
      <q-card-section>
        <div class="text-h5 q-mt-lg text-center text-weight-bold">{{blogdetail.title}}</div>
      </q-card-section>
      <vue-markdown class="markdown-body q-pa-md" :source="blogdetail.content" :toc-anchor-link="false" :toc="true" toc-id="toc" :toc-first-level="3"></vue-markdown>
      <div align="center">
        <q-btn v-if="blogdetail.appreciation" push color="white" text-color="red" label="赞赏" class="q-my-md" size="medium">
          <q-menu anchor="bottom middle" self="top middle">
            <div class="row q-ma-md">
              <div class="column items-center">
                <q-avatar square size="120px">
                  <img src="@/assets/images/alipay.png">
                </q-avatar>
                <div class="text-body1 q-mt-xs">支付宝扫一扫</div>
              </div>
              <q-separator vertical inset class="q-mx-lg" />
              <div class="column items-center">
                <q-avatar square size="120px">
                  <img src="@/assets/images/wepay.png">
                </q-avatar>
                <div class="text-body1 q-mt-xs">微信扫一扫</div>
              </div>
            </div>
          </q-menu>
        </q-btn>
      </div>
      <div v-if="blogdetail.shareStatement" class="q-mt-md authorList text-body1">
        <br>
        <ul align="left">
          <li>作者：<span>{{user.nickname}}</span></li>
          <li>发表时间：<span>{{blogdetail.updateTime}}</span></li>
          <li>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</li>
        </ul>
        <br>
      </div>
    </q-card>

    <q-card v-if="blogdetail.commentabled" class="blogDetailCard">
      <q-card-section>
        <div class="text-h6 text-weight-bold text-light-blue text-center">聊天区</div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pa-md row justify-center">
        <!-- 聊天滚动区域 -->
        <q-scroll-area ref="chatArea" @scroll="scrollinfo" :thumb-style="thumbStyle" style="width:100%;height:500px;" class="q-px-lg text-body2">
          <div v-for="(item,index) of message" :key="item.id" class="text-body1">
            <q-chat-message :name="item.nickname" :avatar="item.avatar" :text="[item.content]" :stamp="item.createTime" :sent="index === msgNum-1" text-color="white" :bg-color="msgcolor[index%5]" />
          </div>
          <q-scroll-observer />
        </q-scroll-area>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pa-md q-gutter-sm">
        <q-editor v-model="submitComment.content" min-height="8rem" placeholder="请输入你的评论吧..." align="left" :content-style="{fontSize:'17px'}" />
        <q-form @submit="submitcomment" ref="myForm" class="row justify-end q-mx-md">
          <q-select outlined options-selected-class="text-deep-orange" v-model="avatarmodel" :options="options" stack-label label="avatar(头像)" color="secondary" style="width:175px;padding-bottom:18px;" class="q-ma-md">
            <template v-slot:before>
              <q-avatar>
                <img :src="avatarmodel.icon" />
              </q-avatar>
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps" v-on="scope.itemEvents" color="white" text-color="secondary" class="q-ma-none">
                <q-item-section>
                  <q-avatar>
                    <img :src="scope.opt.icon">
                  </q-avatar>
                </q-item-section>
                <q-item-section>
                  <q-item-label v-html="scope.opt.label" />
                </q-item-section>
              </q-item>
            </template> <!--  @click="submitcomment"-->
          </q-select>
          <q-input color="secondary" ref="input" lazy-rules="ondemand" outlined v-model="submitComment.nickname" :rules="[val => !!val || '请输入你的名字']" placeholder="姓名" label="name" style="width:200px;" class="q-ma-md" />
          <q-btn color="secondary" type="submit" icon="far fa-paper-plane" label="发布" class="q-ml-md" size="md" style="max-height:40px;margin-top:30px;" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
export default {
  name: "Article",
  components: { VueMarkdown },
  data() {
    return {
      heart: 0,
      msgNum: 0,
      scrollsize: 500,
      drawer: true,
      thumbStyle: {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      },
      blogdetail: {
        content: '',
        updateTime: '2020-10-18 22:11:11',
        views: '108',
        tags: [],
        flag: '原创',
        title: 'Our Changing Planet',
        appreciation: true, //赞赏
        commentabled: true, //评论
        shareStatement: true
      },
      submitComment: {
        content: '',
        nickname: ''
      },
      message: [{
        nickname: 'darin',
        avatar: 'https://cdn.quasar.dev/img/avatar1.jpg',
        content: 'Hello World',
        createTime: '2020-10-26 10:30:00'
      }],
      msgcolor: ['blue', 'light-blue', 'cyan', 'teal', 'green'],
      user: {
        nickname: 'darin',
        avatar: 'https://gitee.com/darinx/blog-img/raw/master/my/boy-avatar.png'
      },
      avatarmodel: {
        label: '头像1',
        value: 'Aaron',
        icon: 'https://cdn.quasar.dev/img/avatar1.jpg'
      },
      options: [
        { label: '头像1', value: 'Aaron', icon: 'https://cdn.quasar.dev/img/avatar1.jpg' },
        { label: '头像2', value: 'Alice', icon: 'https://cdn.quasar.dev/img/avatar2.jpg' },
        { label: '头像3', value: 'Chris', icon: 'https://cdn.quasar.dev/img/avatar3.jpg' },
        { label: '头像4', value: 'Tommy', icon: 'https://cdn.quasar.dev/img/avatar4.jpg' },
        { label: '头像5', value: 'Daisy', icon: 'https://cdn.quasar.dev/img/avatar5.jpg' },
        { label: '头像6', value: 'Kelly', icon: 'https://cdn.quasar.dev/img/avatar6.jpg' }
      ]
    }
  },
  created: function () {
    const bid = window.location.href.split('=')[1];
    this.querydetail(bid);
    this.querycomment(bid);
  },
  mounted: function () { },
  computed: {},
  watch: {
    scrollsize: function (val) {
      this.$refs.chatArea.setScrollPosition(val - 500, 100);
    }
  },
  methods: {
    querydetail(blogid) {
      this.$axios.get('/blogDetail/' + blogid).then((res) => {
        const { data } = res;
        if (data.code === 200) {
          this.blogdetail = data.data;
          this.user = data.data.user;
        }
        // console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    },
    submitcomment() {
      let rmhtmlcontent = this.submitComment.content.replace(/<\/?[^>]*>/g, '');
      rmhtmlcontent = rmhtmlcontent.replace(/&nbsp;/ig, ' ');
      if (!(rmhtmlcontent.trim())) {
        this.$q.notify({
          message: '输入一些评论吧。。',
          icon: 'info',
          color: 'teal',
          position: 'center',
          timeout: 1000
        })
        return;
      }
      this.$refs.myForm.validate().then(success => {
        if (success) {
          const param = {
            content: rmhtmlcontent,
            blogId: parseInt(window.location.href.split('=')[1]),
            avatar: this.avatarmodel.icon,
            nickname: this.submitComment.nickname
          }
          this.$axios.post('/comments', param).then(res => {
            const { data } = res;
            if (data.code === 200) {
              this.$q.notify({
                message: '评论成功',
                icon: 'done',
                color: 'positive',
                position: 'center',
                timeout: 1000
              });
              this.submitComment.content = '';
              this.querycomment(param.blogId);
            }
          })
        } else return;
      })
    },
    querycomment(blogid) {
      this.$axios.get('/comments/' + blogid).then((res) => {
        const { data } = res;
        if (data.code === 200) {
          this.message = data.data;
          this.msgNum = data.data.length;
        }
      }).catch(err => {
        console.log(err);
      })
    },
    shareblog(position) {
      // document.execCommand('copy');
      this.$q.notify({
        position,
        message: '链接已复制',
        color: 'positive'
      })
    },
    // scroll() {
    // const scrollArea = this.$refs.chatArea;
    // console.log(scrollArea);
    // const scrollTarget = scrollArea.getScrollTarget();
    // const duration = 0;
    // console.log(scrollTarget.scrollHeight);
    // scrollArea.setScrollPosition(scrollTarget.scrollHeight, duration)
    // },
    scrollinfo(info) {
      const size = info.verticalSize;
      this.scrollsize = size;
      // this.$refs.chatArea.setScrollPosition(this.scrollsize-500,50);
    },
    onResize (size) {
      if (size.width < 950) {
        this.drawer = false;
      } else {
        this.drawer = true;
      }
    },
  }
}
</script>
<style lang="scss" scoped>
.blogDetailCard {
  width: 60%;
  margin: 24px auto 10px auto;
}

.blogDetailHeader {
  flex-direction: row;
}
.blogDetailShare {
  position: absolute;
  right: 10px;
  padding: 0;
}
.authorList {
  background-color: #fcfff5;
  color: #689267;
  border: 1px solid #a3c293;
}
.q-chat-message {
  max-width: 400px;
}
.markdown-body {
  box-sizing: border-box;
  min-width: 200px;
  max-width: 980px;
  margin: 0 auto;
  padding: 45px;
}
@media (max-width: 767px) {
  .markdown-body {
    padding: 15px;
  }
}

/deep/.q-drawer {
  background: transparent;
  .toc {
    position: absolute;
    top: 50px;
    font-size: 14px;
    font-weight: 600;
    ul {
      list-style-type: none;
      padding-inline-start: 0;
      li {
        padding: 2px 5px 2px 10px;
      }
    }
    a {
      color: #616161;
    }
    a:hover {
      color: #2196f3;
    }
  }
}
.tocRight{
  margin-top: 106px;
}
</style>