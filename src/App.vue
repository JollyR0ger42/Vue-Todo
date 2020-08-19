<template>
  <div id="app">
    <div id="nav">
      <router-link class="home-link" to="/">
        {{!$route.params.id ? 'notes' : '&larr;notes'}}
      </router-link>
      <NoteAddButton v-if="!$route.params.id" @toggle-add-form="showAddNoteForm = true"/>
    </div>

    <ConfirmationPopup 
      :show="showConfirmationPopup" 
      @toggle-confirmation-popup="showConfirmationPopup = false"
    />
    <NoteAddForm :show="showAddNoteForm" @toggle-add-form="showAddNoteForm = false"/>
    <transition name="slide">
      <router-view @toggle-confirmation-popup="showConfirmationPopup = true"/>
    </transition>
  </div>
</template>

<script>
import NoteAddButton from './components/Note/NoteAddButton';
import NoteAddForm from './components/Note/NoteAddForm';
import ConfirmationPopup from './components/ConfirmationPopup';

export default {
  data(){
    return{
      showAddNoteForm: false,
      showConfirmationPopup: false
    }
  },
  methods:{
  },
  components:{NoteAddButton, NoteAddForm, ConfirmationPopup},
}
</script>

<style>
#nav{
  background-color: skyblue;
  height: 70px;
}
.home-link{
  color: rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-size: 50px;
}
.home-link:hover{
  color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}


/* Globas styles */
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.absolute-center{
  position: fixed;
  top: 70px;
  bottom: 0;
  left: 0;
  right: 0;
  overflow-y: auto;
}
.relative-center{
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pop-up{
  border-radius: 10px;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: white;
  z-index: 11;
}
.overlay{
  opacity: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
}
hr{
  border: 2px solid black;
}
.todo{
  font-size: 18px;
  margin: 5px 0;
  border-bottom: 1px solid grey;
}
input{
  text-align: center;
  min-width: 35px;
}

/* Buttons */
.inactiveButton{
  color: rgba(0, 0, 0, 0.1) !important;
  cursor: default;
}
button{
  margin: 5px 10px;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.5);
  outline: none;
  border: none;
}
button:hover{
  color: black;
  cursor: pointer;
}
i{
  font-size: 35px;
  color: rgba(0, 0, 0, 0.5);
}
i:hover{
  cursor: pointer;
  color: black;
}

/* transition styles */
.fade-enter-active,
.fade-leave-active{
  transition: opacity .3s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active{
  transition: transform .3s;
}
.slide-enter{
  transform: translateX(100vw);
  overflow: hidden;
}
.slide-leave-to{
  transform: translateX(-100vw);
  overflow: hidden;
}

/* Scrollbar */
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: rgb(135,206,235); 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 169, 236); 
}
</style>
