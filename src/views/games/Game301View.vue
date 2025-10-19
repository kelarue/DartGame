<template>
  <GameLayout title="301">
    <template #default="{ currentPlayer, nextPlayer, winner }">
      <div class="mt-3">
        <p>Tour de : <strong>{{ currentPlayer.name }}</strong></p>
        <button class="btn btn-warning me-2" @click="simulateThrow">Lancer aléatoire</button>
      </div>
    </template>
  </GameLayout>
</template>

<script setup>
import GameLayout from '@/components/GameLayout.vue'
import { usePlayersStore } from '@/stores/players'

const store = usePlayersStore()
const { players } = store

function simulateThrow() {
  const player = players.find(p => p) // fallback simple
  if (!player) return

  const points = Math.floor(Math.random() * 60) + 1
  const newScore = player.score - points

  if (newScore === 0) {
    player.score = 0
    // winner sera mis à jour dans GameLayout
  } else if (newScore < 0) {
    // bust: score inchangé
  } else {
    player.score = newScore
  }

  // passer au joueur suivant via nextPlayer fourni par le slot
  window.dispatchEvent(new CustomEvent('nextPlayer'))
}
</script>
