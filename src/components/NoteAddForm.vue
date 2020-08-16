<template>
  <div>
    <transition name="slide">
      <div class="pop-up" v-if="show" key="popup">
        <form @submit.prevent="submit">
          <h1>Create note</h1>
          <input type="text" placeholder="Title" v-model="noteTitle">
        </form>
        <div>
          <button @click="submit"><i class="fas fa-check"></i></button>
          <button @click.stop="$emit('toggle-add-form')"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </transition>
    <transition name="fade">
      <div v-if="show" class="overlay" @click="$emit('toggle-add-form')">
      </div>
    </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
  data(){
    return{
      noteTitle: ''
    }
  },
  props:['show'],
  methods:{
    ...mapMutations(['createNote']),
    submit(){
      this.createNote(this.noteTitle)
      this.noteTitle = ''
      this.$emit('toggle-add-form')
    }
  }
}
</script>

<style scoped>
input{
  font-size: 20px;
}
button{
  margin: 5px 10px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
  font-size: 50px;
}
button:hover{
  color: black;
  cursor: pointer;
}
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
  border-radius: 10px;
  position: fixed;
  display: inline-block;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: white;
  width: 300px;
  height: 150px;
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