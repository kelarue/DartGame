import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayersStore = defineStore('playersStore', () => {
  const players = ref([])

  function addPlayer(name, initialScore = 301) {
    if (!name.trim()) return
    players.value.push({ name: name.trim(), score: initialScore })
  }

  function removePlayer(index) {
    players.value.splice(index, 1)
  }

  function resetScores(value = 301) {
    if (!players.value.length) return
    players.value.forEach(p => (p.score = value))
  }

  function clear() {
    players.value = []
  }

  return {
    players,
    addPlayer,
    removePlayer,
    resetScores,
    clear
  }
})
