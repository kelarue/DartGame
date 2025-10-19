<script setup lang="ts">
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div class="d-flex">
    <!-- Sidebar -->
    <Sidebar />
    <!-- Contenu principal -->
    <div class="flex-grow-1 p-4">
      <RouterView />
    </div>
  </div>

</template>

<style scoped>

</style>
