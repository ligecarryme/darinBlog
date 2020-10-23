<template>
  <div class="q-pa-md">
    <q-card class="my-card q-mt-lg">
      <q-card-section class="bg-indigo-3 text-white">
        <div class="text-h6 text-center">搜索结果 共<span class="q-ma-xs text-h5 text-amber">{{pagger.totalelements}}</span>个</div>
      </q-card-section>
    </q-card>
    <q-intersection v-for="item in blog" :key="item.id" class="my-card">
      <q-card class="q-mt-lg" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="col-4">
            <q-img class="rounded-borders" :ratio="16/9" :src="item.firstPicture" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs title">
              <a :href="'/article?id='+item.id">{{item.title}}</a>
            </div>
            <div class="flex">
              <div class="text-subtitle2">{{user.nickname}}</div>
              <div class="q-ml-md">
                <q-icon name="far fa-calendar-alt" size="mini"></q-icon>
                <span class="q-ml-xs">{{item.updateTime}}</span>
              </div>
            </div>
            <div class="q-mt-xs text-caption text-grey">{{item.description}}</div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-intersection>
    <div class="q-mt-lg q-pa-lg flex flex-center">
      <q-pagination v-model="pagger.current" :max="pagger.totalpages" :direction-links="true">
      </q-pagination>
    </div>
    <div style="height:20px;"></div>
  </div>
</template>
<script>
import {showcharacter} from '@/utils/utils';
export default {
  name: 'search',
  data() {
    return {
      blog: [{
        firstPicture: 'https://picsum.photos/300/200',
        title: 'new object',
        updateTime: '2020-10-19 15:53:53',
        description: "If you want something you've never had, you must be willing to do something you've never done.",
      }],
      user: {
        nickname: 'darin'
      },
      pagger: {
        current: 1,
        totalelements: 10,
        totalpages: 3
      }
    }
  },
  created: function () { },
  mounted: function() {
    const { param } = this.$route.query;
    this.searchblog(param);
  },
  methods: {
    searchblog(value) {
      const param = {
        currentPage: this.pagger.current,
        query: value
      }
      // console.log(value);
      this.$axios.post('/search', this.$qs.stringify(param)).then((res) => {
        // console.log(res);
        const { data } = res;
        if (data.code === 200) {
          let blogs = data.data.content;
          this.blog = showcharacter(blogs,50);
          this.pagger.totalelements = data.data.totalElements;
          this.pagger.totalpages = data.data.totalPages;
        }
      }).catch((err) => {
        console.log(err);
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.my-card {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
.title {
  a {
    color: #90caf9;
  }
  a:hover {
    color: #0d47a1;
  }
}
</style>