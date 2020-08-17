<template>
  <div id="app">
    <div id="nav">
      <router-link class="home-link" to="/">
        {{!$route.params.id ? 'notes' : '< notes'}}
      </router-link>
      <NoteAddButton v-if="!$route.params.id" @toggle-add-form="showAddForm = true"/>
    </div>

    <ConfirmationPopup 
      :show="showConfirmationPopup" 
      @toggle-confirmation-popup="showConfirmationPopup = false"
    />
    <NoteAddForm :show="showAddForm" @toggle-add-form="showAddForm = false"/>
    <transition name="slide">
      <router-view @toggle-confirmation-popup="showConfirmationPopup = true"/>
    </transition>
  </div>
</template>

<script>
import NoteAddButton from './components/NoteAddButton';
import NoteAddForm from './components/NoteAddForm';
import ConfirmationPopup from './components/ConfirmationPopup';

export default {
  data(){
    return{
      showAddForm: false,
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
  overflow-y: scroll;
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
  font-size: 50px;
}
button:hover{
  color: black;
  cursor: pointer;
}

/* transition styles */
.fade-enter-active,
.fade-leave-active{
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to{
  opacity: 0;
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
