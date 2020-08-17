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

    <hr>
    <TodoAddButton @toggle-add-todo="showAddTodoField = true"/>
  </div>
</template>

<script>
import Todo from '@/components/Todo/Todo';
import NoteDeleteButton from './NoteDeleteButton';
import TodoAddButton from '@/components/Todo/TodoAddButton';

export default {
  data(){
    return{
      showAddTodoField: false
    }
  },
  props: ['note'],
  components: {Todo, NoteDeleteButton, TodoAddButton}
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
  list-style-type: none;
}
hr{
  margin: 10px 0;
}
</style>