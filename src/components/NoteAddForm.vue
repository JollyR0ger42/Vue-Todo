<template>
  <div>
    <transition name="slide">
      <div class="pop-up add-note-form" v-if="show">
        <form @submit.prevent="submit">
          <h1>Create note</h1>
          <input type="text" placeholder="Title" v-model="noteTitle">
        </form>
        <div>
          <button @click="submit">
            <i class="fas fa-check" :class="{inactiveButton: !noteTitle.trim()}"></i>
          </button>
          <button @click.stop="$emit('toggle-add-form')"><i class="fas fa-times"></i></button>
        </div>
      </div>
    </transition>
    <Overlay :show="show" emitOnClick="toggle-add-form" v-on="$listeners"/>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex';
import Overlay from './Overlay';

export default {
  computed: mapGetters(['lastCreated']),
  data(){
    return{
      noteTitle: ''
    }
  },
  props:['show'],
  methods:{
    ...mapMutations(['createNote']),
    submit(){
      if(this.noteTitle.trim()){
        this.createNote(this.noteTitle.trim())
        this.noteTitle = ''
        this.$emit('toggle-add-form')
        this.$router.push('/notes/' + this.lastCreated)
      }
    }
  },
  components:{Overlay}
}
</script>

<style scoped>
input{
  font-size: 20px;
}

.add-note-form{
  width: 300px;
  height: 150px;
}
</style>