<template>
  <span>
    {{ num }}
  </span>
</template>

<script>
export default {
  name: 'Vue3104Counter',
  props: ['num'],
  data() {
    return {};
  },

  methods: {},
};
</script>

<style scoped>
span {
  display: inline-block;
  font-size: 3em;
  border: 1px dashed blue;
  padding: 10px 20px;
  margin: 5px;
  text-align: center;
}
</style>
