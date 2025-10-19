import { ref } from 'vue'
import { defineStore } from 'pinia'

/**
 * players = [{
 *  name: String,
 *  score: Integer
 * } ...]
 */
export const playersStore = defineStore('players', () => {
  const players = ref([]);
  
  function addPlayer(name) {
    if (!name.trim()) return;
    players.value.push({name});
  }

  function removePlayer(index) {
    players.value.splice(index, 1)
  }

  function resetScores(value = 301){
    players.value.forEach((p)  => {
      p.score = value
    })
  }

  function clear(){
    players.value = [];
  }

  return {
    players,
    addPlayer,
    removePlayer,
    resetScores,
    clear
  }

})
