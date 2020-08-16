<template>
  <div>
    <h1>{{note.id}} {{note.name}}</h1>
    <ul>
      <li v-for="todo in note.todoList" :key="todo.id">{{todo.text}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['note']
}
</script>