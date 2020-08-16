<template>
  <div id="app">
    <div id="nav">
      <router-link class="home-link" to="/">notes</router-link>
      <NoteAddButton @toggle-add-form="showAddForm = !showAddForm"/>
    </div>
    <NoteAddForm :show="showAddForm" @toggle-add-form="showAddForm = !showAddForm"/>
    <transition name="slide">
      <router-view key="router"/>
    </transition>
  </div>
</template>

<script>
import NoteAddButton from './components/NoteAddButton';
import NoteAddForm from './components/NoteAddForm';

export default {
  data(){
    return{
      showAddForm: false
    }
  },
  components:{NoteAddButton, NoteAddForm}
}
</script>

<style>
#nav{
  padding: 5px 0 10px;
  background-color: skyblue;
  margin-bottom: 10px;
}
.home-link{
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-size: 50px;
}
.home-link:hover{
  color: black;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.absolute-center{
  position: absolute;
  left: 50%;
}
.relative-center{
  position: relative;
  left: -50%;
}
.slide-enter-active,
.slide-leave-active{
  transition: transform .5s;
}
.slide-enter{
  transform: translateX(100vw);
}
.slide-leave-to{
  transform: translateX(-100vw);
}
</style>
