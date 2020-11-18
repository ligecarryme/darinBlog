<template>
  <div class="q-pa-md">
    <q-card class="my-card q-mt-lg">
      <q-card-section class="bg-blue-3 text-white">
        <div class="text-h6 text-center">分类 共<span class="q-ma-xs text-h5 text-yellow">{{types.length}}</span>类</div>
      </q-card-section>
      <div class="q-pa-md" style="max-width: 100%">
        <q-list bordered separator v-for="(item,index) of types" :key="item.id">
          <q-item clickable v-ripple @click="searchTypes(item.id)" :active="link === item.id" active-class="typeactive">
            <q-item-section class="text-body1">{{item.name}}</q-item-section>
            <q-item-section avatar>
              <q-avatar color="primary" text-color="white" :icon="typeicon[index]" />
            </q-item-section>
          </q-item>
        </q-list>
        <q-separator />
      </div>
    </q-card>

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
      <q-pagination v-model="pagger.current" :max="pagger.total" :direction-links="true" @click="searchTypes">
      </q-pagination>
    </div>
  </div>
</template>
<script>
import { showcharacter } from '@/utils/index'
export default {
  name: 'types',
  data() {
    return {
      link: '1',
      blog: [{
        firstPicture: 'https://picsum.photos/300/200', title: 'new object', updateTime: '2020-10-19 15:53:53',
        description: "If you want something you've never had, you must be willing to do something you've never done.",
        user: { nickname: 'darin' },
      }],
      pagger: {
        current: 1,
        total: 3
      },
      types: [{ id: 1, name: '学习' }],
      typeicon: ['fas fa-laptop-code', 'fas fa-atom', 'fas fa-heartbeat', 'fas fa-briefcase'],
    }
  },
  created: function () {
    this.searchTypes();
  },
  // watch:{
  //   link: function(val,old){
  //     console.log('new: %s, old: %s',val,old);
  //   }
  // },
  methods: {
    searchTypes(val) {
      const param = {
        current: this.pagger.current,
        id: val || -1,
      }
      this.$axios.get('/types/' + param.id, { params: { current: param.current } }).then(res => {
        const { data } = res;
        if (data.code === 200) {
          const d = data.data;
          this.types = d.types;
          this.blog = showcharacter(d.blogs.content, 120);
          const { pageable } = d.blogs;
          this.pagger.total = d.blogs.totalPages;
          this.pagger.current = pageable.pageNumber + 1;
          this.link = val || this.types[0].id;
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
.typeactive {
  box-sizing: border-box;
  border: 2px solid #21ba45;
  // color: white;
  // background: #F2C037;
}
</style>