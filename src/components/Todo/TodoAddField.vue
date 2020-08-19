<template>
  <form @submit.prevent="handleSubmit">
    <input ref="input" :style="{'width': width + 'px'}" type="text" v-model="textInput">
    <div class="buttons">
      <button type="submit">
        <i :class="{inactiveButton: !textInput.trim()}" class="fas fa-check"></i>
      </button>
      <button @click="$emit('toggle-add-todo')"><i class="fas fa-times"></i></button>
    </div>
  </form>
</template>

<script>
export default {
  props: ['width'],
  data(){
    return{
      textInput: '',
    }
  },
  methods:{
    handleSubmit(){
      if(this.textInput.trim()){
        this.$emit('submit', this.textInput)
        this.textInput = ''
      }
    }
  },
  updated(){
    this.$refs.input.focus()
  }
}
</script>

<style scoped>
button{
  margin: 5px;
  font-size: 18px;
}
.buttons{
  display: flex;
  justify-content: space-around;
  height: 20px;
}
i{
  font-size: 20px;
}
</style>