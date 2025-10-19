<template>
  <div class="container py-4">
    <h2>🎯 Jeu 301</h2>
    <div v-if="!gameStarted">
      <PlayersManager />
      <button class="btn btn-success mt-3" @click="startGame" :disabled="players.length < 1">
        Commencer la partie
      </button>
    </div>
    <div v-else>
      <h2>JEU 301</h2>
      <ScoreBoard />
    </div>
    

    <!-- Ici tu peux ajouter la logique du jeu -->
  </div>
</template>

<script setup>
import PlayersManager from '@/components/PlayersManager.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import { playersStore } from '@/stores/players'
import { ref } from 'vue'


const gameStarted = ref(false)

const { players, resetScores } = playersStore()

function startGame() {
  gameStarted.value = true
  resetScores(301);
  console.log('Démarrer la partie avec', players.length, 'joueurs')
}
</script>
