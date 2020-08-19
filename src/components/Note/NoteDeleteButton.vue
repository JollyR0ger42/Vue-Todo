<template>
  <button>
    <i @click="handleClick" class="fas fa-trash"></i>
  </button>
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
}
</style>