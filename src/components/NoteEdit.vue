<template>
  <div class="note">
    <h1>{{note.name}}</h1>
    <hr>
    <ul>
      <Todo v-for="todo in note.todoList" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  props: ['note'],
  components: {Todo}
}
</script>

<style scoped>
.note{
  margin-top: 10px;
}
ul{
  margin-top: 10px;
  list-style-type: none;
}
</style>