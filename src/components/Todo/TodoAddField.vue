<template>
  <form @submit.prevent="handleSubmit">
    <input :style="{'width': width + 'px'}" type="text" v-model="textInput">
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
      this.$emit('submit', this.textInput)
      this.textInput = ''
    }
  }

}
</script>

<style scoped>
input{
  text-align: center;
}
button{
  margin: 5px;
  font-size: 18px;
}
.buttons{
  height: 20px;
}
</style>