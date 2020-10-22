<template>
  <div class="q-pa-md">
    <q-timeline color="secondary" class="archivesTimeline">
      <q-card class="q-mt-lg shadow-2 bg-purple-3">
        <q-card-section class="row justify-center text-white">
          <div class="text-h6 q-mr-md">归档</div>
          <div class="text-h6">共<span class="text-h5 q-pa-xs text-yellow">110</span>篇文章</div>
        </q-card-section>
      </q-card>
      <q-timeline-entry heading body="Timeline heading" />

      <q-timeline-entry title="Event Title" subtitle="February 22, 1986" avatar="https://cdn.quasar.dev/img/avatar3.jpg" :body="body" />

      <q-timeline-entry title="Event Title" subtitle="February 21, 1986" icon="delete" :body="body" />

      <q-timeline-entry heading body="November, 2017" />

      <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

      <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

      <q-timeline-entry title="Event Title" subtitle="February 22, 1986" color="orange" icon="done_all" :body="body" />

      <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />

      <q-timeline-entry title="Event Title" subtitle="February 22, 1986" :body="body" />
    </q-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
}
</script>
<style lang="scss" scoped>
.archivesTimeline {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  z-index: 999;
}
</style>