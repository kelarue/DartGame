<template>
  <div class="container py-4">
    <h2>{{ title }}</h2>

    <!-- Gestion des joueurs -->
    <PlayersManager />

    <!-- Bouton démarrer si le jeu n’a pas commencé -->
    <div v-if="!gameStarted && players.length" class="my-3">
      <button class="btn btn-success" @click="startGame">Commencer le jeu</button>
    </div>
    <div v-else-if="!players.length" class="alert alert-warning mt-3">
      Ajoute au moins un joueur pour commencer le jeu.
    </div>

    <!-- Slot pour la logique spécifique du jeu -->
    <slot 
      v-if="gameStarted" 
      :gameStarted="gameStarted"
      :currentPlayer="currentPlayer" 
      :players="players" 
      :winner="winner" 
      :nextPlayer="nextPlayer">
    </slot>

    <ScoreBoard  v-if="gameStarted"  :currentPlayer="currentPlayer?.name" :winner="winner" />
  </div>
</template>

<script setup>
import PlayersManager from '@/components/PlayersManager.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import { usePlayersStore } from '@/stores/players'
import { ref, computed, watch } from 'vue'

defineProps({
  title: { type: String, default: 'Jeu' }
})

const store = usePlayersStore()
const players = computed(() => store.players)

const currentPlayerIndex = ref(0)
const winner = ref(null)
const gameStarted = ref(false)

const currentPlayer = computed(() => players.value[currentPlayerIndex.value])

function nextPlayer() {
  if (!players.value.length) return
  currentPlayerIndex.value = (currentPlayerIndex.value + 1) % players.value.length
}

// démarre le jeu
function startGame() {
  if (!players.value.length) return
  // reset des scores pour 301 par défaut
  players.value.forEach(p => p.score = 301)
  gameStarted.value = true
  currentPlayerIndex.value = 0
  winner.value = null
}

// reset si les joueurs sont supprimés
watch(players, (newPlayers) => {
  if (!newPlayers.length) {
    gameStarted.value = false
    currentPlayerIndex.value = 0
    winner.value = null
  }
}, { deep: true })
</script>
