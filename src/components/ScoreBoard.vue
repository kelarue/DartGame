<template>
  <div>
    <h5>Scores</h5>
    <table class="table table-bordered text-center align-middle" style="max-width:600px;">
      <thead class="table-dark">
        <tr>
          <th>#</th>
          <th>Joueur</th>
          <th>Score</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(player, i) in players" 
          :key="i"
          :class="{
            'table-success': winner === player.name,
            'table-primary': currentPlayer === player.name && !winner
          }"
        >
          <td>{{ i+1 }}</td>
          <td>{{ player.name }}</td>
          <td>{{ player.score }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { playersStore } from '@/stores/players'

// Props
defineProps({
  currentPlayer: String, // nom du joueur courant
  winner: String // nom du gagnant
})

// Store des joueurs
const store = playersStore()
const players = computed(() => store.players)
</script>
