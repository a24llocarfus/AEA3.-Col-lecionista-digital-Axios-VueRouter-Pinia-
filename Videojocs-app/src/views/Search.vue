<template>
  <section>
    <h1>Cerca</h1>
    <p>Pàgina on l'usuari buscarà elements.</p>

    <!-- Exemple de llistat simple amb enllaços al detall -->
    <ul>
      <li v-for="id in [1,2,3]" :key="id">
        <router-link :to="{ name: 'ItemDetail', params: { id } }">Veure item {{ id }}</router-link>
      </li>
    </ul>
  </section>
</template>

<script setup>
</script>