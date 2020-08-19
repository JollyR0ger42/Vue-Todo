<template>
  <div class="note">
    <h1>{{note.title}}</h1>
    <hr>
    <ul>
      <li class="todo" v-for="todo in previewTodo" :key="todo.id">
        {{todo.text}}
      </li>
    </ul>
    <hr>
    <div class="delete-wrapper" @click.prevent>
      <NoteDeleteButton :id="note.id" v-on="$listeners"/>
    </div>
  </div>
</template>

<script>
import NoteDeleteButton from './NoteDeleteButton';

export default {
  props: ['note'],
  components: {NoteDeleteButton},
  computed:{
    previewTodo(){
      let result = this.note.todoList.filter(todo => todo.status === false);
      if(result.length > 5){
        result = result.slice(0, 4)
        result.push({id: 'dots', text: '...'})
      }
      return result
    }
  }
}
</script>

<style scoped>
.delete-wrapper{
  margin-top: 15px;
  display: inline-block;
}
.note{
  cursor: default;
  padding: 15px;
  margin-top: 10px;
  border: 1px solid grey;
}
ul{
  margin-top: 10px;
  list-style-type: none;
}
</style>