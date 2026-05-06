<script setup>
import CategorySection from './CategorySection.vue'

defineProps([
  'selectedRoom',
  'isSelected',
  'toggleOption',
  'costLabel'
])
</script>

<template>
  <main class="main-panel">
    <div class="panel-heading">
      <h2>{{ selectedRoom.icon }} {{ selectedRoom.label }}</h2>
      <span class="sub">Material & Furniture Selection</span>
    </div>

    <CategorySection
      v-for="cat in selectedRoom.categories"
      :key="cat.id"
      :category="cat"
      :isSelected="isSelected"
      :toggleOption="toggleOption"
      :costLabel="costLabel"
    />
  </main>
</template>