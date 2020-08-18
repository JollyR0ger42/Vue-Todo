<template>
  <i class="fas fa-plus" @click="$emit('toggle-add-todo')"></i>
</template>

<style scoped>
i{
  font-size: 35px;
  color: rgba(0, 0, 0, 0.5);
}
i:hover{
  cursor: pointer;
  color: black;
}
</style>