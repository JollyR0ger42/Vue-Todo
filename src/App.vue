<template>
  <div id="app">
    <div id="nav">
      <router-link class="home-link" to="/">notes</router-link>
    </div>
    <transition name="slide">
      <router-view/>
    </transition>
  </div>
</template>

<style>
.home-link{
  padding: 5px 0 10px;
  display: block;
  font-size: 50px;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.5);
  background-color: skyblue;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.slide-enter-active,
.slide-leave-active{
  transition: transform 1s;
}
.slide-enter{
  transform: translateX(100vw);
}
.slide-leave-to{
  transform: translateX(-100vw);
}
.absolute-center{
  position: absolute;
  left: 50%;
}
.relative-center{
  position: relative;
  left: -50%;
}
</style>
