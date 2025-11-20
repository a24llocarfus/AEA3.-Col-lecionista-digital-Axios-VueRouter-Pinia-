<script setup>
import { ref, onMounted } from "vue";
import { getAllGames } from "../services/communicationManager.js";

const games = ref([]);
const isLoading = ref(true);

onMounted(async () => {
  isLoading.value = true;
  games.value = await getAllGames();   // 👈 aquí obtenim els jocs
  isLoading.value = false;
});
</script>

<template>
  <div>
    <h1>Llista de jocs</h1>

    <p v-if="isLoading">Carregant...</p>

    <div v-else>
      <div 
        v-for="game in games" 
        :key="game.id"
        style="border:1px solid #aaa; margin:8px; padding:10px;"
      >
        <h3>{{ game.name }}</h3>
        <img :src="game.background_image" width="200" />
      </div>
    </div>
  </div>
</template>