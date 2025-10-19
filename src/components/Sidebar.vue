<script setup>
    import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="bg-dark text-white vh-100 p-3 d-flex flex-column" style="width: 250px;">
    <h4 class="mb-4 text-center">🎯 Darts Game</h4>

    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link text-white" active-class="active bg-secondary">
          Accueil
        </RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/301" class="nav-link text-white" active-class="active bg-secondary">
          301
        </RouterLink>
      </li>
    </ul>

    <div class="mt-auto text-center small text-secondary">
      v0.0.1
    </div>
  </div>
</template>

<style scoped>
.nav-link.active {
  color: #fff !important;
}
</style>
