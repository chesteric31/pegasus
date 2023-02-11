<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <!--<a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>-->
    <a href="">
      <img src="./assets/pegasus.png" class="logo pegasus" alt="Pegasus logo"/>
    </a>
    <p>
      <Button>Boum</Button>
    </p>
  </div>
  <HelloWorld msg="Welcome on Pegasus!"/>
</template>

<style scoped>
.logo {
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
