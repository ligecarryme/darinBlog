<template>
  <div class="q-ma-md" align="center">
    <q-card class="blogDetailCard q-mt-xl">
      <q-item>
        <q-item-section avatar>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
        </q-item-section>

        <q-item-section class="blogDetailHeader" side>
          <div class="q-mt-sm q-mr-md">
            <q-icon name="event" size="sm"></q-icon>
            <span class="q-ml-xs">2020-09-26</span>
          </div>
          <div class="q-mt-sm">
            <q-icon name="visibility" size="sm"></q-icon>
            <span class="q-ml-xs">520</span>
          </div>
        </q-item-section>

        <q-card-actions class="blogDetailShare">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="primary" icon="share" />
        </q-card-actions>

      </q-item>
      <q-parallax src="https://cdn.quasar.dev/img/parallax1.jpg" :height="300" />
      <div class="dfb">
        <q-chip square class="q-ma-md">
          <q-avatar icon="bookmark" color="red" text-color="white" />
          Bookmark
        </q-chip>
        <div class="q-ma-md">
          <q-btn outline style="color: goldenrod;" label="原创" size="11px" />
        </div>
      </div>

      <q-card-section>
        <div class="text-h6 q-mt-lg">Our Changing Planet</div>
      </q-card-section>
      <div v-for="n in 50" :key="n" class="q-pa-xs">
        Lorem ipsum dolor sit amet, consectetur adipisicing
        elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua.
      </div>
      <q-btn outline rounded style="color: #FF0080;" label="赞赏" size="12px" class="q-mt-md" />
      <div class="q-mt-lg authorList">
        <br>
        <ul align="left">
          <li>作者：<span>邢大立</span></li>
          <li>发表时间：<span>2020-09-27 23:07</span></li>
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
      <div class="q-pa-md q-gutter-sm" >
        <q-editor v-model="editor" min-height="8rem" placeholder="请输入你的评论吧..." align="left" :content-style="{fontSize:'16px'}" />
        <div class="row justify-end q-ma-md" style="height:50px">
          <q-select outlined placeholder="选择一个头像" v-model="model" :options="options" stack-label label="avatar" color="secondary" style="max-width:200px;" class="q-mr-md">
            <template v-slot:selected-item="scope">
              <q-chip dense @remove="scope.removeAtIndex(scope.index)" :tabindex="scope.tabindex" color="white" text-color="secondary" class="q-ma-none">
                <q-avatar color="secondary" text-color="white" :icon="scope.opt.icon" />
                {{ scope.opt.label }}
              </q-chip>
            </template>
          </q-select>
          <q-input outlined v-model="name" placeholder="姓名" label="name" style="max-width:300px;" class="q-mr-md"/>
          <q-btn color="secondary" icon="mail" label="发布" style="max-height:40px;" class="q-mt-md"/>
        </div>
      </div>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "Article",
  data() {
    return {
      editor: '',
      name: '',
      model: {
        label: 'Google',
        value: 'goog',
        icon: 'mail'
      },
      options: [
        {
          label: 'Google',
          value: 'goog',
          icon: 'mail'
        },
        {
          label: 'Facebook',
          value: 'fb',
          icon: 'bluetooth'
        },
        {
          label: 'Twitter',
          value: 'twt',
          icon: 'map'
        },
        {
          label: 'Apple',
          value: 'app',
          icon: 'golf_course'
        },
        {
          label: 'Oracle',
          value: 'ora',
          disable: true,
          icon: 'casino'
        }
      ]
    }
  },
  computed: {
    thumbStyle() {
      return {
        right: "4px",
        borderRadius: "5px",
        backgroundColor: "#027be3",
        width: "5px",
        opacity: 0.75,
      };
    },
    barStyle() {
      return {
        right: "2px",
        borderRadius: "9px",
        backgroundColor: "#027be3",
        width: "9px",
        opacity: 0.2,
      };
    },
  },
};
</script>
<style lang="scss" scoped>
.blogDetailCard {
  width: 80%;
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
</style>