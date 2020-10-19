<template>
  <div class="q-pa-md">
    <q-card class="my-card q-mt-lg">
      <q-card-section class="bg-blue-3 text-white">
        <div class="text-h6 text-center">分类 共<span class="q-ma-xs text-h5">6</span>类</div>
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
      <!-- 
      <q-card-actions align="around">
        <div class="q-pa-md q-gutter-md"></div>
      </q-card-actions> -->
    </q-card>

    <q-intersection v-for="index in 2" :key="index" transition="scale">
      <q-card class="my-card q-mt-lg" flat bordered>
        <q-card-section horizontal>
          <q-card-section class="col-4">
            <q-img class="rounded-borders" :ratio="16/9" src="https://cdn.quasar.dev/img/parallax2.jpg" />
          </q-card-section>
          <q-card-section class="q-pt-xs">
            <div class="text-h5 q-mt-sm q-mb-xs title">
              <a href="/article">Title #{{ index }}</a>
            </div>
            <div class="flex">
              <div class="text-subtitle2">by John Doe</div>
              <div class="q-ml-md">
                <q-icon name="far fa-calendar-alt" size="mini"></q-icon>
                <span class="q-ml-xs">2020-09-26</span>
              </div>
            </div>
            <div v-for="n in 2" :key="n" class="q-mt-xs text-caption text-grey">
              {{content}}
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </q-intersection>
    <div class="q-pa-lg flex flex-center">
      <q-pagination v-model="current" :max="3" :direction-links="true">
      </q-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      current: 1,
    }
  }
}
</script>
<style lang="scss" scoped>
.my-card {
  width: 80%;
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