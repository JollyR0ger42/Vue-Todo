<template>
  <i @click="handleClick" class="fas fa-trash"></i>
</template>

<script>
import {mapMutations} from 'vuex';
import EventBus from '@/eventBus';

export default {
  props: ['id'],
  methods:{
    ...mapMutations(['removeNote']),
    handleClick(){
      EventBus.$emit('confirmation', {
        action: () => {
          this.removeNote(this.id)
          if(this.$router.currentRoute.path !== '/'){
            this.$router.push('/')
          }
        },
        text: 'Delete note?'
      })
      this.$emit('toggle-confirmation-popup')
    }
  }
}
</script>

<style scoped>
i{
  font-size: 25px;
  color: rgba(0, 0, 0, 0.5);
  height: 25px;
}
i:hover{
  cursor: pointer;
  color: black;
}
</style>