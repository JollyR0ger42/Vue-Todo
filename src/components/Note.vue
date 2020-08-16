<template>
  <div class="note">
    <h1>{{note.name}}</h1>
    <hr>
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

<style scoped>
.note{
  padding: 15px;
  margin-top: 10px;
  border: 1px solid grey;
}
ul{
  margin-top: 10px;
  list-style-type: none;
}
ul li{
  font-size: 18px;
  margin: 5px 0;
}
ul li:hover{
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.1);
}
</style>