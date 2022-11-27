<template>
  <div id="app">
    <p>
      <button v-on:click="clickAddBox">박스 추가</button>
    </p>
    <p>
      <b v-for="(val, i) in arr" v-bind:key="i">
        {{ val }}
        <component-box v-bind:num="val"></component-box>
      </b>
    </p>
  </div>
</template>

<script>
import Vue3104Counter from '../components/vue3104/Vue3104Counter';

export default {
  name: 'Vue3104View',
  components: {
    'component-box': Vue3104Counter,
  },
  data() {
    return {
      arr: [0, 1, 2, 3, 4, 5],
    };
  },
  methods: {
    clickAddBox(e) {
      console.log(e.target);
      this.arr = [...this.$data.arr, this.$data.arr.length];
    },
  },
};
</script>

<style scoped></style>
