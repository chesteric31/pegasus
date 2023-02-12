<script setup lang="ts">
</script>

<template>
  <nav>
    <router-link to="/">Home</router-link>&nbsp;|
    <router-link to="/form">Form</router-link>&nbsp;|
    <router-link to="/about">About</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped>.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.pegasus {
  height: auto;
}

.logo:hover {
  filter: drop-shadow(0 0 2em darkgoldenrod);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
