<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from 'src/components/HelloWorld.vue';

export default {
  name: 'HomePage',
  components: {
    HelloWorld,
  },
};
</script>
