<template>
  <i :class="{inactiveButton: inactiveButton}" class="fas fa-plus" @click="handleClick"></i>
</template>

<script>
export default {
  props: ['inactiveButton'],
  methods:{
    handleClick(){
      if(!this.inactiveButton){
        this.$emit('toggle-add-todo')
      }
    }
  }
}
</script>

<style scoped>
i{
  font-size: 35px;
}
</style>