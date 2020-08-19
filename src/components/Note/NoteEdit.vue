<template>
  <div class="note" ref="note">
    <NoteTitleEdit :title="noteState.title" :id="noteState.id" @set-title="setTitle" v-on="$listeners"/>
    <div class="buttons">
      <button><i :class="{inactiveButton: !noteWasChanged}" class="fas fa-check"></i></button>
      <button><i :class="{inactiveButton: !noteWasChanged}" class="fas fa-times"></i></button>
      <button><i :class="{inactiveButton: !cachedState}" class="fas fa-redo redo"></i></button>
    </div>
    <hr>
    <ul>
      <TodoEdit 
        @set-todo="setTodo" 
        @delete-todo="deleteTodo"
        v-for="todo in noteState.todoList" 
        :key="todo.id" :todo="todo" 
      />
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
import {mapGetters} from 'vuex';
import TodoEdit from '@/components/Todo/TodoEdit';
import TodoAddButton from '@/components/Todo/TodoAddButton';
import TodoAddField from '@/components/Todo/TodoAddField';
import NoteTitleEdit from './NoteTitleEdit';

export default {
  data(){
    return{
      showAddTodoField: false,
      noteWidth: 0,
      noteState: undefined,
      cachedState: undefined,
    }
  },
  computed: {
    ...mapGetters(['noteById']),
    noteWasChanged(){
      if(JSON.stringify(this.noteState) === JSON.stringify(this.noteById(this.note.id))){
        return false
      } else {
        return true
      }
    }
    },
  props: ['note'],
  components: {
    TodoEdit, TodoAddButton, TodoAddField, NoteTitleEdit
  },
  beforeMount(){
    this.noteState = JSON.parse(JSON.stringify(this.noteById(this.note.id)))
  },
  mounted(){
    this.noteWidth = this.$refs.note.offsetWidth
  },
  methods:{
    handleTodoSubmit(text){
      const id = this.noteState.todoList[this.noteState.todoList.length - 1].id + 1;
      const newTodo = {id, text, status: false}
      this.noteState.todoList.push(newTodo)
    },
    setTitle(title){
      this.noteState.title = title
    },
    setTodo(newTodo){
      console.log(this.noteState)
      let todo = this.noteState.todoList.find(todo => todo.id === newTodo.id);
      Object.assign(todo, newTodo)
    },
    deleteTodo(){
      console.log('deleted')
    }
  }
}
</script>

<style scoped>
.buttons{
  display: flex;
  justify-content: center;
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
i{
  font-size: 25px;
}
.redo{
  font-size: 20px;
}
</style>