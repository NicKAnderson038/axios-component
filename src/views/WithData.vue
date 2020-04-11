<template>
  <div class="d-flex align-center">
    <FetchButton />
  </div>
</template>

<script>
import FetchButton from '../components/FetchButton'

export default {
  name: 'WithData',

  components: {
    FetchButton,
  },

  data: () => ({
    //
  }),
  created() {
    console.log('withdata')
  },
}
</script>
