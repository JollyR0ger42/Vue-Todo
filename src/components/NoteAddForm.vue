<template>
  <div>
    <transition name="slide">
      <div class="pop-up" v-if="show" key="popup">
        <h1>POPUP</h1>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show" class="overlay" @click="$emit('toggle-add-form')">
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props:['show']
}
</script>

<style scoped>
.overlay{
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
.pop-up{
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: white;
  width: 300px;
  height: 300px;
  z-index: 11;
}
.fade-enter-active,
.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}
</style>