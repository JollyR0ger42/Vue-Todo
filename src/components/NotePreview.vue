<template>
  <div class="note">
    <h1>{{note.name}}</h1>
    <hr>
    <ul>
      <Todo v-for="todo in note.todoList" :key="todo.id" :todo="todo" />
    </ul>
    <hr>
    <div class="delete-wrapper" @click.prevent><NoteDelete :id="note.id"/></div>
  </div>
</template>

<script>
import Todo from './Todo';
import NoteDelete from './NoteDelete';

export default {
  props: ['note'],
  components: {Todo, NoteDelete}
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