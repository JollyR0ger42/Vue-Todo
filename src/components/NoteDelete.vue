<template>
  <i @click="handleClick" class="fas fa-trash"></i>
</template>

<script>
export default {
  props: ['noteId'],
  methods:{
    handleClick(){
      console.log('clicked')
    }
  }
}
</script>

<style scoped>
i{
  font-size: 25px;
  color: rgba(0, 0, 0, 0.5);
}
i:hover{
  cursor: pointer;
  color: black;
}
</style>