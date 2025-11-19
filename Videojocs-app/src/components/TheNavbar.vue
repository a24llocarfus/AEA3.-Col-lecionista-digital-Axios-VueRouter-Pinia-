<!-- src/App.vue -->
<template>
  <div id="app">
    <TheNavbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar.vue'
</script>

<style>
/* Estils globals mínims */
main {
  padding: 1rem;
}
</style>