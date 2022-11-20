<template>
  <div>
    <button v-on:click="showLog">show</button>
  </div>
</template>

<script>
export default {
  name: 'Vue3403Comp',
  props: ['mesg'],
  data() {
    return {};
  },
  methods: {
    showLog(e) {
      console.log(e.target);
      // debugger;
      this.$emit('show-log', 'abc', 123);
    },
  },
};
</script>

<style scoped></style>
