<template>
  <div class="q-ma-md">
    <div v-for="n in 100" :key="n" class="q-pa-xs">
      Lorem ipsum dolor sit amet, consectetur adipisicing
      elit, sed do eiusmod tempor incididunt ut labore et
      dolore magna aliqua.
    </div>
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