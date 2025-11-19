<template>
  <section>
    <h1>Detall de l'item {{ id }}</h1>
    <p>Mostra informació carregada segons l'id.</p>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
const props = defineProps({
  id: { type: [String, Number], required: true }
})

onMounted(() => {
  // Exemple: aquí faries fetch(`/api/items/${props.id}`)
  console.log('Carregant item', props.id)
})
</script>