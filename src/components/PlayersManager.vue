<template>
  <div>
    <h5>Joueurs</h5>
    <ul class="list-group mb-3">
      <li
        v-for="(player, index) in players"
        :key="index"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        #{{ index+1 }} {{ player.name }}
        <button class="btn btn-sm btn-danger" @click="removePlayer(index)">✖</button>
      </li>
    </ul>

    <div class="input-group mb-3" style="max-width: 400px;">
      <input
        v-model="newPlayer"
        type="text"
        class="form-control"
        placeholder="Nom du joueur"
      />
      <button class="btn btn-primary" @click="addNewPlayer">Ajouter</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { usePlayersStore } from '@/stores/players'

const store = usePlayersStore()
const { players, addPlayer, removePlayer } = store

const newPlayer = ref('')

function addNewPlayer() {
    addPlayer(newPlayer.value)
    newPlayer.value = ''
}
</script>
