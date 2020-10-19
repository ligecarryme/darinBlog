<template>
  <div class="q-mt-md">
    <q-card class="blogDetailCard q-mt-lg">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
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

      <q-card-section>
        <div class="text-h5 q-mt-lg text-center text-weight-bold">{{blogdetail.title}}</div>
      </q-card-section>
      <vue-markdown class="markdown-body q-pa-md" :source="blogdetail.content"></vue-markdown>
      <div align="center">
        <q-btn push color="white" text-color="red" label="赞赏" class="q-mt-md" size="md" />
      </div>
      <div class="q-mt-lg authorList">
        <br>
        <ul align="left">
          <li>作者：<span>{{user.nickname}}</span></li>
          <li>发表时间：<span>{{blogdetail.updateTime}}</span></li>
          <li>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</li>
        </ul>
        <br>
      </div>
    </q-card>

    <q-card class="q-mt-lg blogDetailCard">
      <div class="q-pa-md row justify-center">
        <div style="width: 100%;">
          <q-chat-message name="me" avatar="https://cdn.quasar.dev/img/avatar3.jpg" :text="['hey, how are you?']" stamp="7 minutes ago" sent bg-color="amber-7" />
          <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" :text="[
          'doing fine, how r you?',
          'I just feel like typing a really, really, REALY long message to annoy you...'
        ]" stamp="4 minutes ago" text-color="white" bg-color="primary" />
          <q-chat-message name="Jane" avatar="https://cdn.quasar.dev/img/avatar5.jpg" :text="['Did it work?']" stamp="1 minutes ago" text-color="white" bg-color="primary" />
        </div>
      </div>
      <div class="q-pa-md q-gutter-sm">
        <q-editor v-model="editor" min-height="8rem" placeholder="请输入你的评论吧..." align="left" :content-style="{fontSize:'16px'}" />
        <div class="row justify-end q-ma-md">
          <q-select outlined placeholder="选择一个头像" v-model="model" :options="options" stack-label label="avatar" color="secondary" style="max-width:200px;" class="q-mr-md q-mt-md">
            <template v-slot:selected-item="scope">
              <q-chip dense @remove="scope.removeAtIndex(scope.index)" :tabindex="scope.tabindex" color="white" text-color="secondary" class="q-ma-none">
                <q-avatar color="secondary" text-color="white" :icon="scope.opt.icon" />
                {{ scope.opt.label }}
              </q-chip>
            </template>
          </q-select>
          <q-input outlined v-model="name" placeholder="姓名" label="name" style="max-width:300px;" class="q-mt-md q-mr-md" />
          <q-btn color="secondary" icon="mail" label="发布" style="max-height:40px; margin-top:28px" />
        </div>
      </div>
    </q-card>
    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn fab icon="keyboard_arrow_up" color="blue-grey" />
    </q-page-scroller>
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
      blogdetail: {
        content: '',
        updateTime: '2020-10-18 22:11:11',
        views: '108',
        tags: [],
        flag: '原创',
        title: 'Our Changing Planet',
      },
      user: {
        nickname: 'darin'
      },
      editor: '',
      name: '',
      drawer: '',
      model: {
        label: 'Google',
        value: 'goog',
        icon: 'mail'
      },
      options: [
        { label: 'Google', value: 'goog', icon: 'mail' },
        { label: 'Facebook', value: 'fb', icon: 'bluetooth' },
        { label: 'Twitter', value: 'twt', icon: 'map' },
        { label: 'Apple', value: 'app', icon: 'golf_course' },
        { label: 'Oracle', value: 'ora', disable: true, icon: 'casino' }
      ]
    }
  },
  created: function () {
    this.querydetail(window.location.href.split('=')[1])
  },
  computed: {},
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
    shareblog(position) {
      // document.execCommand('copy');
      this.$q.notify({
        position,
        message: '链接已复制',
        color: 'positive'
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.blogDetailCard {
  width: 60%;
  margin: 24px auto 0 auto;
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
</style>