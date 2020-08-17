<template>
  <div class="absolute-center">
    <div class="relative-center">
      <NoteEdit :note="noteById($route.params.id)" v-on="$listeners"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import NoteEdit from '@/components/Note/NoteEdit';

export default {
  components: {NoteEdit},
  computed: mapGetters(['noteById']),
}
</script>