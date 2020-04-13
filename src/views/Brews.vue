<template>
  <div class="home">
    <SearchBrews />
  </div>
</template>

<script>
import SearchBrews from '@/components/SearchBrews.vue'

export default {
  name: 'Brews',

  components: {
    SearchBrews,
  },

  data: () => ({
    //
  }),
}
</script>
