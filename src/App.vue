<script setup>
import { ROOMS } from './data/rooms'
import { useSelections } from './composables/useSelections'

import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import MainPanel from './components/MainPanel.vue'
import RightPanel from './components/RightPanel.vue'

const {
  selectedRoom,
  generating,
  aiSummary,
  generateSummary,
  selectRoom,
  toggleOption,
  isSelected,
  selectionsFor,
  hasSelections,
  costLabel
} = useSelections(ROOMS)
</script>

<template>
  <Header />

  <div class="app-grid">
    <Sidebar
      :rooms="ROOMS"
      :selectedRoom="selectedRoom"
      @selectRoom="selectRoom"
    />

    <MainPanel
      :selectedRoom="selectedRoom"
      :isSelected="isSelected"
      :toggleOption="toggleOption"
      :costLabel="costLabel"
    />

    <RightPanel
      :selectedRoom="selectedRoom"
      :hasSelections="hasSelections"
      :selectionsFor="selectionsFor"
      :costLabel="costLabel"
      :aiSummary="aiSummary"
      :generating="generating"
      :generateSummary="generateSummary"
    />
  </div>
</template>