<template>
  <div class="q-pa-md">
    <q-card class="q-my-lg archivesTimeline shadow-2 bg-purple-3">
      <q-card-section class="row justify-center text-white">
        <div class="text-h6 q-mr-md">归档</div>
        <div class="text-h6">共<span class="text-h5 q-pa-xs text-yellow">{{count}}</span>篇文章</div>
      </q-card-section>
    </q-card>
    <!-- <q-infinite-scroll @load="onload" :offset="250"> -->
      <q-timeline color="secondary" class="archivesTimeline" v-for="(items,name) of archives" :key="name">
        <q-timeline-entry heading>{{'2020年'+name+'月'}}</q-timeline-entry>
        <q-timeline-entry v-for="(item,index) of items" :key="item.id" :color="color[index%2]" :icon="icon[index%2]">
          <template v-slot:title><a :href="'article?id='+item.id">{{item.title}}</a></template>
          <template v-slot:subtitle>{{item.updateTime}}</template>
          <div>{{item.description}}</div>
          <!-- 属性版本 
          <q-timeline-entry :title="item.title" :subtitle="item.updateTime" :body="item.description" :color="color[index%2]" :icon="icon[index%2]" v-for="(item,index) of items" :key="item.id" /> -->
        </q-timeline-entry>
      </q-timeline>
      <!-- <template v-slot:loading>
        <div class="row justify-center q-my-md">
          <q-spinner-dots color="primary" size="40px" />
        </div>
      </template>
    </q-infinite-scroll> -->

  </div>
</template>
<script>
export default {
  data() {
    return {
      archives: {
        10: [{ id: 1, title: 'title', updateTime: '2020-10-23 20:06:06', description: "If you want something you've never had, you must be willing to do something you've never done." },
        { id: 2, title: 'title', updateTime: '2020-10-23 20:06:06', description: "If you want something you've never had, you must be willing to do something you've never done." }],
        9: [{ id: 3, title: 'title', updateTime: '2020-10-23 20:06:06', description: "If you want something you've never had, you must be willing to do something you've never done." },
        { id: 4, title: 'title', updateTime: '2020-10-23 20:06:06', description: "If you want something you've never had, you must be willing to do something you've never done." }]
      },
      color: ["orange", ""],
      icon: ["done_all", "add_task"],
      count: 10,
    }
  },
  mounted: function () {
    this.queryarchives()
  },
  methods: {
    queryarchives() {
      this.$axios.get('/archives').then((res) => {
        const { data } = res;
        if (data.code == 200) {
          const d = data.data;
          const archives = d.archives;
          const ordered = {};
          Object.keys(archives).sort((a, b) => b - a).forEach(function (key) { ordered[key] = archives[key] });
          this.archives = ordered;
          this.count = d.count;
        }
      }).catch(e => {
        console.log(e);
      })
    },
    onload(index,done){
      setTimeout(()=>{
        if (this.archives) {
            // this.archives.set({},{})
            done()
        }
      },2000)
    }
  }
}
</script>
<style lang="scss" scoped>
.archivesTimeline {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  /deep/.q-timeline__heading {
    h3 {
      font-size: 2rem;
    }
    .q-timeline__heading-title {
      padding-bottom: 10px;
    }
  }
  /deep/.q-timeline__content {
    h6 {
      font-size: 1.15rem;
      font-weight: bold;
    }
    .q-timeline__title {
      margin-bottom: 8px;
      a {
        color: #3f51b5;
      }
      a:hover {
        color: #00bcd4;
      }
    }
    padding-bottom: 12px;
  }
}
</style>