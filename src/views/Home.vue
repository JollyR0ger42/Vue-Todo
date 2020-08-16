<template>
  <div class="absolute-center">
    <div class="relative-center">
      <router-link class="component-link" 
        v-for="note in allNotes" :key="note.id" :to="'/notes/' + note.id"
      >
        <Note :note="note"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Note from '@/components/Note';

export default {
  name: 'Home',
  computed: mapGetters(['allNotes']),
  components:{
    Note
  }
}
</script>

<style scoped>
.component-link{
  color: black;
  text-decoration: none;
}

</style>
