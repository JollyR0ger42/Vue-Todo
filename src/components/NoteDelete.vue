<template>
  <i @click="handleClick" class="fas fa-trash"></i>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  props: ['id'],
  methods:{
    ...mapMutations(['removeNote']),
    handleClick(){
      this.removeNote(this.id)
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