<template>
  <div>
    <transition name="slide">
      <div class="pop-up confirmation-popup" v-if="show">
        <h1>{{text}}</h1>
        <div>
          <button @click="handleAccept"><i class="fas fa-check"></i></button>
          <button @click="$emit('toggle-confirmation-popup')">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </transition>
    <Overlay :show="show" emitOnClick="toggle-confirmation-popup" v-on="$listeners"/>
  </div>
</template>

<script>
import Overlay from './Overlay';
import EventBus from '@/eventBus';

export default {
  props: ['show'],
  data(){
    return{
      text: '',
      action: undefined
    }
  },
  components: {
    Overlay
  },
  methods:{
    handleAccept(){
      this.action()
      this.$emit('toggle-confirmation-popup')
    }
  },
  mounted(){
    EventBus.$on('confirmation', (payload) => {
      this.text = payload.text
      this.action = payload.action
    })
  }
}
</script>

<style scoped>
.confirmation-popup{
  width: 270px;
  height: 150px;
}
</style>