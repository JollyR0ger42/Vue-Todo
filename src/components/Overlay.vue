<template>
  <transition name="fade">
    <div v-if="show" class="overlay" @click="$emit(emitOnClick)">
    </div>
  </transition>
</template>

<script>
export default {
  props: ['show', 'emitOnClick'],
}
</script>

<style scoped>

</style>