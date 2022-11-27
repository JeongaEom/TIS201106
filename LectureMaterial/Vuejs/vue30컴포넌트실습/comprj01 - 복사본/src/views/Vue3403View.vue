<template>
  <div id="app">
    자식 컴포넌트에서 받은 값: {{ mesg }}
    <child-component v-on:show-log="printText"></child-component>
  </div>
</template>

<script>
import Vue3403Comp from '../components/vue3403/Vue3403Comp';

export default {
  name: 'Vue3403View',
  components: {
    'child-component': Vue3403Comp,
  },
  data() {
    return {
      mesg: null,
    };
  },
  methods: {
    printText(params1, params2) {
      // debugger;
      this.$data.mesg = `params1=${params1}, params2=${params2}`;
    },
  },
};
</script>

<style scoped></style>
