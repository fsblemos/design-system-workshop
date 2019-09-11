<template>
  <ca-container>
    <router-view :key="$route.path"></router-view>
  </ca-container>
</template>

<script>
export default {
  name: 'App',
};
</script>
