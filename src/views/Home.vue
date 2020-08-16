<template>
  <div class="absolute-center">
    <div class="relative-center">
      <router-link class="component-link" 
        v-for="note in allNotes" :key="note.id" :to="'/notes/' + note.id"
      >
        <NotePreview :note="note"/>
      </router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import NotePreview from '@/components/NotePreview';

export default {
  name: 'Home',
  computed: mapGetters(['allNotes']),
  components:{
    NotePreview
  },
}
</script>

<style scoped>
.component-link{
  color: black;
  text-decoration: none;
}

</style>
