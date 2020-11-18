<template>
  <div class="q-pa-md">
    <q-card class="my-card q-mt-lg">
      <q-card-section class="bg-indigo-3 text-white">
        <div class="text-h6 text-center">标签  共<span class="q-ma-xs text-h5 text-yellow">{{tags.length}}</span>个</div>
      </q-card-section>
      <q-card-actions align="around">
        <div class="q-pa-md q-gutter-md flex justify-around">
          <q-chip square size="md" clickable :selected="link === item.id" @click="searchTags(item.id)" v-for="(item,index) of tags" :key="item.id" :color="tagcolor[index % 5]" text-color="white" :icon="tagicon[index % 8]">{{item.name}}</q-chip>
        </div>
      </q-card-actions>
    </q-card>
<!-- 博客列表 -->
    <q-intersection once v-for="item of blog" :key="item.id" transition="scale" class="my-card q-mb-lg">
      <q-card class="q-mt-lg" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="col-4"> 
            <q-img class="rounded-borders" :ratio="16/9" :src="item.firstPicture" spinner-color="amber"></q-img>
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs title">
              <a :href="'/article?id='+item.id">{{ item.title }}</a>
            </div>
            <div class="flex">
              <div class="text-subtitle2">by {{item.user['nickname']}}</div>
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
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="pagger.current" :max="pagger.total" :direction-links="true" @click="searchTags">
      </q-pagination>
    </div>
  </div>
</template>
<script>
import { showcharacter } from '@/utils/index'
export default {
  data() {
    return {
      link: '',
      blog: [{
        firstPicture: 'https://picsum.photos/300/200', title: 'new object', updateTime: '2020-10-19 15:53:53',
        description: "If you want something you've never had, you must be willing to do something you've never done.",
        user: { nickname: 'darin' },
      }],
      pagger: {
        current: 1,
        total: 3
      },
      tags: [{ id: 1, name: 'JavaScript' }, { id: 2, name: 'Java' }, { id: 3, name: 'VUE' }, { id: 4, name: 'Html' }, { id: 5, name: 'Spring Boot' },],
      tagicon: ['keyboard', 'bookmark', 'star', 'photo_camera', 'eco','flag','cloud','mouse'],
      tagcolor: ['primary', 'teal', 'orange', 'red','warning'],
    }
  },
  created: function(){
    this.searchTags();
  },
  methods: {
    searchTags(val){
      const param = {
        current: this.pagger.current,
        id: val || -1,
      }
      this.$axios.get('/tags/' + param.id, { params: { current: param.current } }).then(res => {
        const { data } = res;
        if (data.code === 200) {
          const d = data.data;
          this.tags = d.tags;
          this.blog = showcharacter(d.blogs.content, 120);
          this.link = val || this.tags[0].id;
          const { pageable } = d.blogs;
          this.pagger.total = d.blogs.totalPages;
          this.pagger.current = pageable.pageNumber + 1;
        }
      }).catch(e => {
        console.log(e);
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