<template>
  <div id="app">
    <Navbar />
    <router-view class="main conatiner"/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
html, 
body {
    margin: 0;
    padding: 0;
    background-color:#1f2429;
}
.main {
  margin: 1em;
}
</style>
