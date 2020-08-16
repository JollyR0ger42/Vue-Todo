<template>
  <div class="absolute-center">
    <div class="relative-center">
      <Note :note="noteById($route.params.id)"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Note from '@/components/Note';

export default {
  components: {Note},
  computed: mapGetters(['noteById']),
}
</script>