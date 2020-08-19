<template>
  <li class="todo">
    <input type="checkbox" v-model="todo.status">
    <p :class="{done: todo.status}" v-if="!todoEdit" ref="text">{{todo.text}}</p>
    <form v-show="todoEdit" @submit.prevent="submit">
      <input
        v-model="newText"
        :style="{'width': todoWidth + 'px'}"
        type="text"
        ref="input"
      />
    </form>
    <div class="buttons">
      <button v-if="!todoEdit" @click="enableTodoEdit"><i class="fas fa-pen"></i></button>
      <button v-if="!todoEdit" @click="deleteTodo"><i class="fas fa-trash"></i></button>
      <button v-if="todoEdit" @click="submit"><i class="fas fa-check"></i></button>
      <button v-if="todoEdit" @click="discard"><i class="fas fa-times"></i></button>
    </div>
  </li>
</template>

<script>
export default {
  data(){
    return{
      todoEdit: false,
      newText: this.todo.text,
      todoWidth: 0,
    }
  },
  mounted(){
    this.todoWidth = this.$refs.text.offsetWidth
  },
  methods: {
    submit(){
      this.$emit('set-todo', {...this.todo, text: this.newText})
      this.todoEdit = false
    },
    discard(){
      this.newText = this.todo.text
      this.todoEdit = false
    },
    enableTodoEdit(){
      this.todoEdit = true
      setTimeout( () => this.$refs.input.focus(), 0)
    },
    deleteTodo(){
      this.$emit('delete-todo', this.todo.id)
    }
  },
  props: ['todo']
}
</script>

<style scoped>
li{
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
i{
  font-size: 15px;
}
li p{
  margin: 0 10px;
  flex-grow: 1;
}
button{
  margin: 0 5px;
}
.done{
  color: rgba(0, 0, 0, 0.35);
}
form{
  margin: 0 10px;
}
</style>