<template>
  <div class="home">
    <FetchButton msg="Welcome to Your Vue.js App" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import FetchButton from '@/components/FetchButton.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    FetchButton,
  },
}
</script>
