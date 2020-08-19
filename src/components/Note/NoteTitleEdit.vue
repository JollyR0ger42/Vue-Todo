<template>
  <div class="title">
    <button v-if="!noteTitleEdit" @click="enableTitleEdit">
      <i class="fas fa-pen"></i>
    </button>
    <button v-if="noteTitleEdit" @click="submit">
      <i class="fas fa-check"></i>
    </button>
    <form v-show="noteTitleEdit" @submit.prevent="submit">
      <input
        v-model="newTitle"
        class="title-input"
        :style="{'width': titleWidth + 'px'}"
        type="text"
        ref="input"
      />
    </form>
    <h1 v-if="!noteTitleEdit" ref="title">{{title}}</h1>
    <button v-if="noteTitleEdit" @click="discard">
      <i class="fas fa-times"></i>
    </button>
    <NoteDeleteButton v-if="!noteTitleEdit" :id="id" v-on="$listeners" />
  </div>
</template>

<script>
import NoteDeleteButton from './NoteDeleteButton';

export default {
  data(){
    return {
      noteTitleEdit: false,
      titleWidth: 0,
      newTitle: this.title,
    }
  },
  components: {NoteDeleteButton},
  props: ['title','id'],
  methods:{
    enableTitleEdit(){
      this.noteTitleEdit = true
      setTimeout(() => this.$refs.input.focus(), 0) 
    },
    submit(){
      this.noteTitleEdit = false
      this.$emit('set-title', this.newTitle)
    },
    discard(){
      this.noteTitleEdit = false
      this.newTitle = this.title
    }
  },
  mounted(){
    this.titleWidth = this.$refs.title.offsetWidth
    this.newTitle = this.title
  }
}
</script>

<style scoped>
.title{
  display: flex;
  align-items: center;
  justify-content: center;
}
.title-input{
  font-size: 32px;
  height: 32px;
}
i{
  font-size: 25px;
}
</style>