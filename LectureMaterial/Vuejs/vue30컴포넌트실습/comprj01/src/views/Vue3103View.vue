<template>
  <div id="app">
    <h2>컴포넌트 등록</h2>
    <Vue3103Comp v-bind:localmsg="localmsg1"></Vue3103Comp>
    <Vue3103Comp v-bind:localmsg="localmsg2"></Vue3103Comp>
  </div>
</template>

<script>
import Vue3103Comp from '../components/vue3103/Vue3103Comp';

export default {
  name: 'Vue3103View',
  components: {
    Vue3103Comp,
  },
  data() {
    return {
      localmsg1: '부모 컴포넌트에서~',
      localmsg2: '부모 컴포넌트에서~',
    };
  },
  methods: {},
};
</script>

<style scoped></style>
