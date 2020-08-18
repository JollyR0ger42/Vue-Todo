<template>
  <li>{{todo.text}}</li>
</template>

<script>
export default {
  props: ['todo']
}
</script>

<style scoped>
li{
  font-size: 18px;
  margin: 5px 0;
  border-bottom: 1px solid grey;
}
</style>