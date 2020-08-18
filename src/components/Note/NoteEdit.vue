<template>
  <div class="note" ref="note">
    <div class="title">
      <h1>{{note.name}}</h1>
      <NoteDeleteButton :id="note.id" v-on="$listeners"/>
    </div>
    <hr>
    <ul>
      <Todo v-for="todo in note.todoList" :key="todo.id" :todo="todo" />
    </ul>
    <TodoAddField 
      v-if="showAddTodoField" 
      :width="noteWidth" 
      @toggle-add-todo="showAddTodoField = false"
      @submit="handleTodoSubmit"
    />
    <hr>
    <TodoAddButton @toggle-add-todo="showAddTodoField = true"/>
  </div>
</template>

<script>
import Todo from '@/components/Todo/Todo';
import NoteDeleteButton from './NoteDeleteButton';
import TodoAddButton from '@/components/Todo/TodoAddButton';
import TodoAddField from '@/components/Todo/TodoAddField';

export default {
  data(){
    return{
      showAddTodoField: false,
      noteWidth: 0,
    }
  },
  props: ['note'],
  components: {
    Todo, NoteDeleteButton, TodoAddButton, TodoAddField
  },
  mounted(){
    this.noteWidth = this.$refs.note.offsetWidth
  },
  methods:{
    handleTodoSubmit(todoText){
      console.log(todoText)
    }
  }
}
</script>

<style scoped>
.title{
  display: flex;
  align-items: center;
  justify-content: center;
}
.title h1{
  margin-right: 10px;
}
.note{
  margin-top: 10px;
}
ul{
  display: inline-block;
  list-style-type: none;
}
hr{
  margin: 10px 0;
}
</style>