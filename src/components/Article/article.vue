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

        <q-item-sections class="blogDetailShare">
          <q-btn flat round color="red" icon="favorite" />
          <q-btn flat round color="primary" icon="share" />
        </q-item-sections>

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
      <q-card-section>
        <q-btn outline rounded style="color: #FF0080;" label="赞赏" size="12px" />
        <q-list class="q-mt-md" align="left">
          <li>作者：<span>邢大立</span></li>
          <li>发表时间：<span>2020-09-27 23:07</span></li>
          <li>版权声明：自由转载-非商用-非衍生-保持署名（创意共享3.0许可证）</li>
        </q-list>
        <div>
        </div>
      </q-card-section>
    </q-card>
    <q-card class="q-mt-sm">
      <q-card-section>
        <h3>评论区</h3>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: "Article",
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
}
</style>