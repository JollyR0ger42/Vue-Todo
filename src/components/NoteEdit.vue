<template>
  <div class="note">
    <div class="title">
      <h1>{{note.name}}</h1>
      <NoteDeleteButton :id="note.id" v-on="$listeners"/>
    </div>
    <hr>
    <ul>
      <Todo v-for="todo in note.todoList" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import Todo from './Todo';
import NoteDeleteButton from './NoteDeleteButton';

export default {
  props: ['note'],
  components: {Todo, NoteDeleteButton}
}
</script>

<style scoped>
.title{
  display: flex;
  align-items: center;
}
.title h1{
  margin-right: 10px;
}
.note{
  margin-top: 10px;
}
ul{
  margin-top: 10px;
  list-style-type: none;
}
</style>